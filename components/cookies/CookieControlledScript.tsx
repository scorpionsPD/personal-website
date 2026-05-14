"use client";

import { ReactNode } from "react";
import {
  CookieConsentCategory
} from "../../lib/cookie-consent";
import { useCookieConsent } from "./CookieConsentProvider";

type CookieControlledScriptProps = {
  category: Exclude<CookieConsentCategory, "necessary">;
  children: ReactNode;
  fallback?: ReactNode;
};

export default function CookieControlledScript({
  category,
  children,
  fallback = null
}: CookieControlledScriptProps) {
  const { isCategoryAllowed } = useCookieConsent();

  return isCategoryAllowed(category) ? <>{children}</> : <>{fallback}</>;
}
