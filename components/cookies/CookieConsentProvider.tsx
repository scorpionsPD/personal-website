"use client";

import Link from "next/link";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore
} from "react";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  CookieConsentCategory,
  CookieConsentRecord,
  CookieConsentState,
  cookieConsentCategories,
  createCookieConsentRecord,
  defaultCookieConsentState,
  isValidCookieConsentRecord
} from "../../lib/cookie-consent";

type CookieConsentContextValue = {
  consent: CookieConsentState;
  hasStoredConsent: boolean;
  preferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (nextConsent: CookieConsentState) => void;
  isCategoryAllowed: (category: CookieConsentCategory) => boolean;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function readStoredConsentSnapshot(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveRecord(record: CookieConsentRecord) {
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(
    new CustomEvent("cookie-consent-updated", {
      detail: record
    })
  );
}

function subscribeToConsentStore(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleChange = () => {
    onStoreChange();
  };

  window.addEventListener("storage", handleChange);
  window.addEventListener("cookie-consent-updated", handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener("cookie-consent-updated", handleChange);
  };
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const storedConsentSnapshot = useSyncExternalStore(
    subscribeToConsentStore,
    readStoredConsentSnapshot,
    () => null
  );
  const storedConsentRecord = useMemo<CookieConsentRecord | null>(() => {
    if (!storedConsentSnapshot) {
      return null;
    }

    try {
      const parsed = JSON.parse(storedConsentSnapshot);
      return isValidCookieConsentRecord(parsed) ? parsed : null;
    } catch {
      return null;
    }
  }, [storedConsentSnapshot]);
  const hasStoredConsent = Boolean(storedConsentRecord);
  const consent = storedConsentRecord?.consent ?? defaultCookieConsentState;
  const [draftConsent, setDraftConsent] = useState<CookieConsentState>(defaultCookieConsentState);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    if (storedConsentSnapshot && !storedConsentRecord) {
      window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
      window.dispatchEvent(new CustomEvent("cookie-consent-updated"));
    }
  }, [storedConsentRecord, storedConsentSnapshot]);

  useEffect(() => {
    if (!preferencesOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && hasStoredConsent) {
        setPreferencesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasStoredConsent, preferencesOpen]);

  const persistConsent = (nextConsent: CookieConsentState) => {
    const normalizedConsent = {
      necessary: true as const,
      analytics: nextConsent.analytics,
      marketing: nextConsent.marketing
    };

    const record = createCookieConsentRecord(normalizedConsent);

    saveRecord(record);
    setDraftConsent(normalizedConsent);
    setPreferencesOpen(false);
  };

  const contextValue = useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      hasStoredConsent,
      preferencesOpen,
      openPreferences: () => {
        setDraftConsent(consent);
        setPreferencesOpen(true);
      },
      closePreferences: () => {
        if (hasStoredConsent) {
          setPreferencesOpen(false);
        }
      },
      acceptAll: () =>
        persistConsent({
          necessary: true,
          analytics: true,
          marketing: true
        }),
      rejectNonEssential: () =>
        persistConsent({
          necessary: true,
          analytics: false,
          marketing: false
        }),
      savePreferences: persistConsent,
      isCategoryAllowed: (category: CookieConsentCategory) =>
        category === "necessary" ? true : consent[category]
    }),
    [consent, hasStoredConsent, preferencesOpen]
  );

  const showBanner = !hasStoredConsent && !preferencesOpen;

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}

      {showBanner ? (
        <section
          aria-label="Cookie consent"
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/15 px-4 py-4 sm:px-6"
        >
          <div className="w-full max-w-[440px]">
            <div className="rounded-3xl border border-[#e6e6e3] bg-[#f7f7f5]/98 shadow-[0_22px_56px_rgba(28,28,28,0.16)] backdrop-blur">
              <div className="flex flex-col gap-5 p-5 sm:p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                    Privacy Controls
                  </p>
                  <h2 className="mt-2 font-display text-[26px] leading-tight text-neutral-950">
                    Choose how this site uses cookies.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    Necessary storage is always on. Analytics and marketing stay off until you
                    choose otherwise.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => contextValue.acceptAll()}
                    className="rounded-full bg-[#1c1c1c] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Accept all
                  </button>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => contextValue.rejectNonEssential()}
                      className="rounded-full border border-[#d7d7d2] bg-white px-5 py-3 text-sm font-semibold text-[#1c1c1c] transition hover:border-[#b9b9b3]"
                    >
                      Reject non-essential
                    </button>
                    <button
                      type="button"
                      onClick={() => contextValue.openPreferences()}
                      className="rounded-full border border-[#d7d7d2] bg-white px-5 py-3 text-sm font-semibold text-[#1c1c1c] transition hover:border-[#b9b9b3]"
                    >
                      Manage preferences
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[#e6e6e3] pt-4 text-sm">
                  <Link href="/privacy-policy" className="font-semibold text-accent hover:underline">
                    Privacy Policy
                  </Link>
                  <Link href="/cookie-policy" className="font-semibold text-accent hover:underline">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {preferencesOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4 py-6">
          <div
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            className="w-full max-w-2xl rounded-3xl border border-[#e6e6e3] bg-[#f7f7f5] p-6 shadow-2xl sm:p-8"
            role="dialog"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Cookie Preferences
                </p>
                <h2
                  id="cookie-preferences-title"
                  className="mt-2 font-display text-3xl text-neutral-950"
                >
                  Manage consent categories
                </h2>
              </div>
              {hasStoredConsent ? (
                <button
                  aria-label="Close cookie preferences"
                  className="rounded-full border border-[#d7d7d2] px-3 py-2 text-sm font-semibold text-[#1c1c1c]"
                  onClick={() => setPreferencesOpen(false)}
                  type="button"
                >
                  Close
                </button>
              ) : null}
            </div>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Adjust optional categories below. Necessary storage cannot be disabled because it is
              required to remember your privacy choices and keep the site functioning correctly.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {cookieConsentCategories.map((category) => {
                const isEnabled =
                  category.key === "necessary" ? true : draftConsent[category.key];

                return (
                  <div
                    key={category.key}
                    className="rounded-2xl border border-[#e6e6e3] bg-white p-5"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-xl">
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-semibold text-neutral-900">
                            {category.title}
                          </h3>
                          {category.required ? (
                            <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                              Always on
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-neutral-600">
                          {category.description}
                        </p>
                      </div>
                      <button
                        aria-checked={isEnabled}
                        aria-disabled={category.required}
                        className={`inline-flex h-8 w-14 items-center rounded-full border transition ${
                          isEnabled
                            ? "border-[#1f3d2b] bg-[#1f3d2b]"
                            : "border-[#d7d7d2] bg-white"
                        } ${category.required ? "cursor-not-allowed opacity-70" : ""}`}
                        onClick={() => {
                          if (category.required) {
                            return;
                          }

                          setDraftConsent((current) => ({
                            ...current,
                            [category.key]: !current[category.key]
                          }));
                        }}
                        role="switch"
                        type="button"
                      >
                        <span
                          className={`mx-1 h-6 w-6 rounded-full bg-white shadow-sm transition ${
                            isEnabled ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/privacy-policy" className="font-semibold text-accent hover:underline">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="font-semibold text-accent hover:underline">
                Cookie Policy
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() =>
                  persistConsent({
                    necessary: true,
                    analytics: true,
                    marketing: true
                  })
                }
                className="rounded-full bg-[#1c1c1c] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={() =>
                  persistConsent({
                    necessary: true,
                    analytics: false,
                    marketing: false
                  })
                }
                className="rounded-full border border-[#d7d7d2] px-5 py-3 text-sm font-semibold text-[#1c1c1c] transition hover:border-[#b9b9b3]"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={() =>
                  contextValue.savePreferences({
                    necessary: true,
                    analytics: draftConsent.analytics,
                    marketing: draftConsent.marketing
                  })
                }
                className="rounded-full border border-[#1c1c1c] px-5 py-3 text-sm font-semibold text-[#1c1c1c] transition hover:bg-[#efefec]"
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }

  return context;
}
