import { getWhatsappLink } from "../utils/whatsapp";

export default function StatusView({ status, customText, phone, onReset }) {
  const title = status.key === "custom" ? customText : status.label;

  const waLink = getWhatsappLink(phone);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(
    waLink
  )}`;

  return (
    <div className="w-full h-full flex items-center justify-center px-6">
      {/* GLASS CARD */}
      <div
        className="
        w-full max-w-3xl p-12 text-center rounded-3xl
        backdrop-blur-xl bg-white/10 border border-white/20
        shadow-[0_0_40px_rgba(0,0,0,0.4)]
        animate-glass-in
      "
      >
        {/* ICON */}
        <div className="text-[120px] mb-6 animate-breathe drop-shadow-lg">
          {status.icon}
        </div>

        {/* TITLE */}
        <h1 className="text-5xl font-extrabold tracking-wide mb-3">{title}</h1>

        {/* DESCRIPTION */}
        <p className="text-lg opacity-80 mb-10">
          {status.desc || "Izin keluar sebentar"}
        </p>

        {/* QR */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <p className="text-xs uppercase tracking-widest opacity-70">
            Scan untuk WhatsApp
          </p>

          <div
            className="
            p-4 rounded-2xl bg-white
            shadow-xl
            hover:scale-105 transition-transform
          "
          >
            <img
              src={qrUrl}
              alt="QR WhatsApp"
              className="w-56 h-56"
              draggable={false}
            />
          </div>
        </div>

        {/* MARQUEE */}
        <div className="overflow-hidden whitespace-nowrap opacity-70 text-sm mb-8">
          <div className="inline-block animate-marquee">
            Terima kasih 🙏 Jika urgent silakan hubungi WhatsApp
          </div>
        </div>

        {/* RESET */}
        <button
          onClick={onReset}
          className="
            px-10 py-3 rounded-full font-semibold
            border border-white/30
            backdrop-blur
            hover:bg-[var(--accent)]
            hover:text-black
            transition
          "
        >
          Ganti Status
        </button>
      </div>
    </div>
  );
}
