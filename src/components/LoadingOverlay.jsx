export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="card px-10 py-8 text-center animate-glass-in">
        <div className="mb-4 text-4xl animate-spin">⏳</div>
        <p className="tracking-wide opacity-80">Menyiapkan status...</p>
      </div>
    </div>
  );
}
