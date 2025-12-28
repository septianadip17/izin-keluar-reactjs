/* eslint-disable react/prop-types */
/*
  View untuk menampilkan status fullscreen
*/
export default function StatusView({ status, customText, phone, onReset }) {
  const title = status.key === "custom" ? customText : status.label;

  return (
    <div className="space-y-6 text-center">
      <div className="text-7xl">{status.icon}</div>

      <h1 className="text-4xl font-bold">{title}</h1>

      <p className="text-lg opacity-80">
        {status.desc || "Sedang melakukan aktivitas"}
      </p>

      <marquee className="text-lg">
        Terima kasih 🙏 Jika urgent silakan hubungi WhatsApp {phone}
      </marquee>

      <button onClick={onReset} className="px-6 py-2 border rounded">
        Ganti Status
      </button>
    </div>
  );
}
