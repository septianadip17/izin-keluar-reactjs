import { STATUS_LIST } from "../data/statusList";

export default function SelectView({
  selectedStatus,
  onSelectStatus,
  customText,
  setCustomText,
  phone,
  setPhone,
  onSubmit,
}) {
  return (
    <div className="card w-full max-w-4xl p-8 space-y-6 animate-glass-in">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold tracking-wide text-center">
        Status Meja
      </h1>

      {/* STATUS BUTTONS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {STATUS_LIST.map((status) => {
          const isActive = selectedStatus?.key === status.key;

          return (
            <button
              key={status.key}
              onClick={() => onSelectStatus(status)}
              className={`flex items-center justify-center gap-3 p-4 rounded-2xl border backdrop-blur transition-all duration-300
                ${
                  isActive
                    ? "border-white/50 bg-white/20 shadow-[0_0_25px_var(--accent)] scale-105"
                    : "border-white/20 hover:bg-white/10"
                }
              `}
            >
              <span className="text-2xl">{status.icon}</span>
              <span className="font-medium">{status.label}</span>
            </button>
          );
        })}
      </div>

      {/* INPUT SECTION */}
      {selectedStatus && (
        <div className="space-y-4 pt-4 border-t border-white/20">
          {/* CUSTOM STATUS */}
          {selectedStatus.key === "custom" && (
            <input
              type="text"
              placeholder="Isi status custom..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSubmit()}
              className="w-full p-4 rounded-xl bg-white/10 backdrop-blur border border-white/30 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          )}

          {/* PHONE */}
          <input
            type="text"
            placeholder="Nomor WhatsApp (contoh: 628xxxx)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSubmit()}
            className="w-full p-4 rounded-xl bg-white/10 backdrop-blur border border-white/30 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />

          {/* SUBMIT */}
          <button
            onClick={onSubmit}
            className="w-full py-4 rounded-xl font-semibold tracking-wide bg-[var(--accent)] text-black hover:opacity-90 transition"
          >
            Tampilkan Status
          </button>
        </div>
      )}
    </div>
  );
}
