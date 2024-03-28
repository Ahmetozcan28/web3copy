import { useState, useEffect } from "react";

export default function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const checkScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return scrollY;
}
