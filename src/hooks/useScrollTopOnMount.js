import { useEffect } from "react";

export default function useScrollTopOnMount() {
  useEffect(() => {
    // Prevent browser from restoring scroll on hash/router nav
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Ensure it runs after paint
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      // Fallbacks for older browsers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    return () => cancelAnimationFrame(raf);
  }, []);
}
