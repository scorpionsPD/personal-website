"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export default function CookiePreferencesButton() {
  const { hasStoredConsent, openPreferences } = useCookieConsent();

  if (!hasStoredConsent) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="text-xs font-semibold text-[#6b6b6b] transition hover:text-[#1c1c1c]"
    >
      Cookie Settings
    </button>
  );
}
