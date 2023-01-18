import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Used for scrolling the position to top on router page changes
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
