import { getWhatsappLink } from "../utils/whatsapp";
import { useAutoHideControls } from "../hooks/useAutoHideControls";
import { useEffect } from "react";

export default function StatusView({ status, customText, phone, onReset }) {
  const title = status.key === "custom" ? customText : status.label;
  const waLink = getWhatsappLink(phone);

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(
    waLink
  )}`;

  const showControls = useAutoHideControls(3000);

  useEffect(() => {
    const handleDoubleClick = () => onReset();
    window.addEventListener("dblclick", handleDoubleClick);
    return () => window.removeEventListener("dblclick", handleDoubleClick);
  }, [onReset]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onReset();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onReset]);

  return (
    <div className="w-full h-full flex items-center justify-center px-6">
      <div className="w-full max-w-3xl px-12 py-14 text-center rounded-3xl backdrop-blur-xl bg-white/10 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-glass-in relative">
        {/* ICON */}
        <div className="text-[110px] mb-6 animate-breathe">{status.icon}</div>

        {/* TITLE */}
        <h1 className="text-6xl md:text-7xl font-black tracking-wider leading-tight mb-4">
          {title}
        </h1>

        {/* DESC */}
        <p className="text-base md:text-lg uppercase tracking-[0.25em] opacity-60 mb-12">
          {status.desc || "Izin keluar sebentar"}
        </p>

        {/* QR */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <span className="text-xs uppercase tracking-widest opacity-60">
            Scan untuk WhatsApp
          </span>

          <div className="p-4 rounded-2xl bg-white/90 shadow-lg hover:scale-105 transition">
            <img
              src={qrUrl}
              alt="QR WhatsApp"
              className="w-56 h-56"
              draggable={false}
            />
          </div>
        </div>

        {/* MARQUEE */}
        <div className="overflow-hidden text-sm opacity-50 mb-10">
          <div className="text-xs opacity-50 tracking-wide">
            Terima kasih 🙏 Jika urgent silakan hubungi WhatsApp
          </div>
        </div>

        {/* RESET (SUBTLE) */}
        <button
          onClick={onReset}
          aria-label="Ganti status"
          className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold backdrop-blur-xl bg-white/20 border border-white/30 transition-all duration-300 ease-out 
            ${
              showControls
                ? "opacity-80 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            } hover:opacity-100 hover:scale-110`}
        >
          ↩
        </button>
      </div>
    </div>
  );
}
