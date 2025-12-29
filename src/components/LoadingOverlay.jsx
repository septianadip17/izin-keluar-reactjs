export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl">
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
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="cyan"
          strokeWidth="6"
          fill="none"
          strokeDasharray="188"
          strokeDashoffset="120"
        />
      </svg>
    </div>
  );
}
