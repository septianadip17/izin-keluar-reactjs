import { useEffect, useRef, useState } from "react";

export function useAutoHideControls(delay = 3000) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const show = () => {
      setVisible(true);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setVisible(false);
      }, delay);
    };

    window.addEventListener("mousemove", show);
    window.addEventListener("touchstart", show);

    return () => {
      window.removeEventListener("mousemove", show);
      window.removeEventListener("touchstart", show);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [delay]);

  return visible;
}
