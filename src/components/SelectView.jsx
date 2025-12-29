import { STATUS_LIST } from "../data/statusList";

export default function SelectView({
  selectedStatus,
  onSelectStatus,
  customText,
  setCustomText,
  phone,
  setPhone,
  onSubmit,
  isSubmitting,
}) {
  return (
    <div className="w-full max-w-4xl p-8 space-y-6 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.4)] animate-glass-in">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold tracking-wide text-center">
        Izin Sebentar
      </h1>

      {/* STATUS OPTIONS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {STATUS_LIST.map((status) => {
          const active = selectedStatus?.key === status.key;

          return (
            <button
              key={status.key}
              onClick={() => onSelectStatus(status)}
              className={`flex items-center justify-center gap-3 p-4 rounded-2xl border backdrop-blur transition-all duration-300 ${
                active
                  ? "border-white/50 bg-white/20 scale-105 shadow-[0_0_25px_var(--accent)]"
                  : "border-white/20 hover:bg-white/10"
              }`}
            >
              <span className="text-2xl">{status.icon}</span>
              <span className="font-medium">{status.label}</span>
            </button>
          );
        })}
      </div>

      {/* INPUTS */}
      {selectedStatus && (
        <div className="space-y-4 pt-4 border-t border-white/20">
          {/* CUSTOM STATUS */}
          {selectedStatus.key === "custom" && (
            <input
              type="text"
              placeholder="Isi status custom…"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSubmit()}
              className="glass-input w-full p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition"
            />
          )}

          {/* PHONE */}
          <input
            type="text"
            placeholder="Nomor WhatsApp (contoh: 628xxxx)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSubmit()}
            className="glass-input w-full p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition"
          />

          {/* SUBMIT */}
          <button
            onClick={onSubmit}
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl font-semibold tracking-wide bg-[var(--accent)] text-black transition overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Menyiapkan tampilan…</span>
            ) : (
              "Tampilkan Status"
            )}
          </button>
        </div>
      )}
    </div>
  );
}
