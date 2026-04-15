import { useState, useEffect } from "react";
import { getBrandHeaders } from "../services";
import { HTTP_HEADERS, LOG_PREFIX, STORAGE_KEYS } from "../constants";

function checkBrandConfig(setBrandConfigError: (_value: boolean) => void) {
  getBrandHeaders()
    .then((headers) => {
      if (!headers[HTTP_HEADERS.X_BRAND_ID]) {
        setBrandConfigError(true);
      }
    })
    .catch((error) => {
      console.error(LOG_PREFIX.BRAND_CONFIG, "Failed to load brand configuration:", error);
      setBrandConfigError(true);
    });
}

export function useBrandConfigError() {
  const [brandConfigError, setBrandConfigError] = useState(false);

  useEffect(() => {
    // If theme already loaded, check immediately
    if (sessionStorage.getItem(STORAGE_KEYS.THEME_LOADED)) {
      checkBrandConfig(setBrandConfigError);
      return;
    }

    // Otherwise wait for theme-loaded event
    const onThemeLoaded = () => {
      checkBrandConfig(setBrandConfigError);
    };

    window.addEventListener("theme-loaded", onThemeLoaded);
    return () => window.removeEventListener("theme-loaded", onThemeLoaded);
  }, []);

  return brandConfigError;
}
