export default function LoadingOverlay() {
  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 backdrop-blur-xl
      "
    >
      <div className="flex flex-col items-center gap-4 animate-glass-in">
        {/* SPINNER */}
        <svg
          className="animate-spin"
          width="64"
          height="64"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="var(--accent)"
            strokeWidth="6"
            fill="none"
            strokeDasharray="188"
            strokeDashoffset="120"
          />
        </svg>

        {/* TEXT */}
        <span className="text-sm tracking-widest uppercase opacity-70 animate-pulse">
          Memuat
        </span>
      </div>
    </div>
  );
}
