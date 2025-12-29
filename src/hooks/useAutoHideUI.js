import { useEffect } from "react";

export function useAutoHideUI(delay = 2500) {
  useEffect(() => {
    let timeoutId;

    const showUI = () => {
      document.body.classList.add("show-ui");

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        document.body.classList.remove("show-ui");
      }, delay);
    };

    // aktif saat ada interaksi
    window.addEventListener("mousemove", showUI);
    window.addEventListener("touchstart", showUI);

    // menampilkan ui sekali di awal
    showUI();

    return () => {
      window.removeEventListener("mousemove", showUI);
      window.removeEventListener("touchstart", showUI);
      clearTimeout(timeoutId);
    };
  }, [delay]);
}
