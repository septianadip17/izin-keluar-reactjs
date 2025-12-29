import { getWhatsappLink } from "../utils/whatsapp";

export default function StatusView({ status, customText, phone, onReset }) {
  const title = status.key === "custom" ? customText : status.label;

  const waLink = getWhatsappLink(phone);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${waLink}`;

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* GLASS CARD */}
      <div
        className="
          relative
          w-full max-w-2xl
          rounded-3xl
          p-10
          text-center
          backdrop-blur-xl
          bg-white/20
          border border-white/30
          shadow-[0_0_60px_rgba(0,255,255,0.08)]
          animate-glass-in
        "
      >
        {/* STATUS ICON */}
        <div
          className="
            text-[120px]
            mb-4
            drop-shadow-[0_0_25px_rgba(0,255,255,0.35)]
            animate-breathe
          "
        >
          {status.icon}
        </div>

        {/* TITLE */}
        <h1 className="text-5xl font-extrabold tracking-wide mb-2">{title}</h1>

        {/* DESCRIPTION */}
        <p className="text-lg opacity-80 mb-8">
          {status.desc || "Sedang melakukan aktivitas"}
        </p>

        {/* QR SECTION */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm uppercase tracking-widest opacity-70">
            Scan untuk WhatsApp
          </p>

          <div
            className="
              p-4
              rounded-2xl
              bg-white/80
              backdrop-blur
              shadow-xl
              border border-white/50
              hover:scale-105
              transition
            "
          >
            <img src={qrUrl} alt="QR WhatsApp" className="w-56 h-56" />
          </div>
        </div>

        {/* RESET */}
        <button
          onClick={onReset}
          className="
            mt-10
            px-8 py-3
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
