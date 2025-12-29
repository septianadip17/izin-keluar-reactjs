import { getWhatsappLink } from "../utils/whatsapp";

export default function StatusView({ status, customText, phone, onReset }) {
  const title = status.key === "custom" ? customText : status.label;

  const waLink = getWhatsappLink(phone);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(
    waLink
  )}`;

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* MAIN GLASS CARD */}
      <div className="card w-full max-w-3xl p-12 text-center animate-glass-in">
        {/* STATUS ICON */}
        <div className="status-icon text-[120px] mb-6 animate-breathe">
          {status.icon}
        </div>

        {/* TITLE */}
        <h1 className="text-5xl font-extrabold tracking-wide mb-3">{title}</h1>

        {/* DESCRIPTION */}
        <p className="text-lg opacity-80 mb-10">
          {status.desc || "izin keluar sebentar"}
        </p>

        {/* QR SECTION */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <p className="text-xs uppercase tracking-widest opacity-70">
            Scan untuk WhatsApp
          </p>

          <div className="qr-wrapper hover:scale-105 transition-transform">
            <img
              src={qrUrl}
              alt="QR WhatsApp"
              className="w-56 h-56"
              draggable={false}
            />
          </div>
        </div>

        {/* RESET BUTTON */}
        <button
          onClick={onReset}
          className="
            px-10 py-3
            rounded-full
            border border-white/40
            backdrop-blur
            hover:bg-white/20
            transition
          "
        >
          Ganti Status
        </button>
      </div>
    </div>
  );
}
