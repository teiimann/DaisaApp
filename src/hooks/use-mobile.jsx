import React, { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile(){
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const handleChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Инициализация состояния при монтировании
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return !!isMobile;
}
