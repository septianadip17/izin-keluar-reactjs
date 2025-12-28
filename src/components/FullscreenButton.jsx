export default function FullscreenButton({
  isFullscreen,
  enterFullscreen,
  exitFullscreen,
}) {
  return (
    <button
      onClick={isFullscreen ? exitFullscreen : enterFullscreen}
      className="
        fixed bottom-4 right-4 z-50
        px-4 py-2
        rounded-full
        bg-black/70 text-white
        hover:bg-black
        transition
      "
    >
      {isFullscreen ? "Keluar Fullscreen (ESC)" : "Fullscreen"}
    </button>
  );
}
