import { useState, useEffect } from "react";
import { getBrandHeaders } from "../services";
import { HTTP_HEADERS, LOG_PREFIX } from "../constants";

export function useBrandConfigError() {
  const [brandConfigError, setBrandConfigError] = useState(false);

  useEffect(() => {
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
  }, []);

  return brandConfigError;
}
