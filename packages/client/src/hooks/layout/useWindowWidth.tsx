import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 767) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return [isMobile];
};
