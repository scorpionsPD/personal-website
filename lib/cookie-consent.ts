export const COOKIE_CONSENT_VERSION = "2026-05";
export const COOKIE_CONSENT_STORAGE_KEY = `pd_cookie_consent:${COOKIE_CONSENT_VERSION}`;

export type CookieConsentCategory = "necessary" | "analytics" | "marketing";

export type CookieConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type CookieConsentRecord = {
  version: string;
  updatedAt: string;
  consent: CookieConsentState;
};

export const defaultCookieConsentState: CookieConsentState = {
  necessary: true,
  analytics: false,
  marketing: false
};

export const cookieConsentCategories: Array<{
  key: CookieConsentCategory;
  title: string;
  description: string;
  required: boolean;
}> = [
  {
    key: "necessary",
    title: "Necessary",
    description:
      "Required for core site behaviour such as saving your consent preferences and keeping the site functional.",
    required: true
  },
  {
    key: "analytics",
    title: "Analytics",
    description:
      "Allows privacy-aware measurement of site usage patterns, page performance, and engagement once enabled.",
    required: false
  },
  {
    key: "marketing",
    title: "Marketing",
    description:
      "Allows future marketing or third-party campaign scripts to load only when you explicitly opt in.",
    required: false
  }
];

export function isValidCookieConsentRecord(value: unknown): value is CookieConsentRecord {
  if (!value || typeof value !== "object") {
    return false;
  }

  const record = value as CookieConsentRecord;

  return (
    record.version === COOKIE_CONSENT_VERSION &&
    typeof record.updatedAt === "string" &&
    !!record.consent &&
    record.consent.necessary === true &&
    typeof record.consent.analytics === "boolean" &&
    typeof record.consent.marketing === "boolean"
  );
}

export function createCookieConsentRecord(
  consent: CookieConsentState
): CookieConsentRecord {
  return {
    version: COOKIE_CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    consent: {
      necessary: true,
      analytics: consent.analytics,
      marketing: consent.marketing
    }
  };
}
