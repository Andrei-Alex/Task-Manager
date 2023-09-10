import { useCallback, useEffect, useState } from "react";

/**
  useWindowWidth Hook

  The useWindowWidth hook is a custom React hook designed to determine whether
  the current screen width corresponds to a mobile device (width less than or
  equal to 767 pixels). It provides a simple way to track the window width and
  identify whether the application is being viewed on a mobile device or not.

  @returns {Array} An array containing a single boolean value:
  - isMobile (boolean): A boolean value indicating whether the current screen
    width corresponds to a mobile device.
*/
export const useWindowWidth = () => {
  const [isMobile, setIsMobile] = useState(false);
  const setMobile = useCallback(() => {
    if (window.innerWidth > 767) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [window.innerWidth]);
  useEffect(() => {
    setMobile();
    const handleWindowResize = () => {
      setMobile();
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return [isMobile];
};
