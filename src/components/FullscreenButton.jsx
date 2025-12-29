export default function FullscreenButton({
  isFullscreen,
  enterFullscreen,
  exitFullscreen,
  visible = true,
}) {
  if (!visible) return null;

  return (
    <button
      onClick={isFullscreen ? exitFullscreen : enterFullscreen}
      title={isFullscreen ? "Keluar Fullscreen (ESC)" : "Masuk Fullscreen"}
      aria-label="Toggle Fullscreen"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-xl bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition opacity-0 group-hover:opacity-100"
    >
      {isFullscreen ? "⤢" : "⛶"}
    </button>
  );
}
