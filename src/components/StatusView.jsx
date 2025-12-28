import { getWhatsappLink } from "../utils/whatsapp";

/*
  StatusView:
  - Tampilan fullscreen
  - Menampilkan status + QR WhatsApp
*/
export default function StatusView({ status, customText, phone, onReset }) {
  const title = status.key === "custom" ? customText : status.label;

  const waLink = getWhatsappLink(phone);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${waLink}`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
      {/* ICON */}
      <div className="text-[120px] drop-shadow-lg">{status.icon}</div>

      {/* TITLE */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide">
        {title}
      </h1>

      {/* DESCRIPTION */}
      <p className="text-xl opacity-80">
        {status.desc || "Sedang melakukan aktivitas"}
      </p>

      {/* QR SECTION */}
      <div className="mt-6 flex flex-col items-center gap-4">
        <p className="text-lg opacity-80">
          Jika urgent, silakan scan QR WhatsApp
        </p>

        <div className="p-5 rounded-2xl bg-white shadow-2xl hover:scale-105 transition-transform">
          <img src={qrUrl} alt="QR WhatsApp" className="w-64 h-64" />
        </div>

        <p className="text-sm opacity-60">Scan untuk langsung chat WhatsApp</p>
      </div>

      {/* RESET BUTTON */}
      <button
        onClick={onReset}
        className="mt-8 px-8 py-3 rounded-full border font-medium hover:bg-black/10 transition"
      >
        Ganti Status
      </button>
    </div>
  );
}
