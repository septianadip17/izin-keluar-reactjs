import { getWhatsappLink } from "../utils/whatsapp";

export default function StatusView({ status, customText, phone, onReset }) {
  const title = status.key === "custom" ? customText : status.label;
  const waLink = getWhatsappLink(phone);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${waLink}`;

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
      <div className="text-[120px] drop-shadow-lg">{status.icon}</div>

      <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide">
        {title || "Izin"}
      </h1>

      <p className="text-xl opacity-80">
        {status.desc || "Izin keluar sebentar"}
      </p>

      <div className="overflow-hidden w-full">
        <p className="whitespace-nowrap animate-marquee text-lg">
          Terima kasih 🙏 Jika urgent silakan hubungi WhatsApp {phone}
        </p>
      </div>

      <button
        onClick={onReset}
        className="px-8 py-3 rounded-full border font-medium hover:bg-black/10 transition"
      >
        Ganti Status
      </button>
    </div>
  );
}
