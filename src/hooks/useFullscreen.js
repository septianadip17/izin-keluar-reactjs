import { useEffect, useState } from "react";

/*
  Hook untuk:
  - Masuk fullscreen
  - Keluar fullscreen
  - Deteksi status fullscreen
*/
export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = () => {
    document.documentElement.requestFullscreen();
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  return {
    isFullscreen,
    enterFullscreen,
    exitFullscreen,
  };
}
