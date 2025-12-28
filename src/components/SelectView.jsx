/* eslint-disable react/prop-types */
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
    <div className="w-full max-w-md rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur shadow-xl p-6 space-y-5">
      <h1 className="text-3xl font-bold mb-4">Status Meja</h1>
      <div className="grid grid-cols-2 gap-3">
        {STATUS_LIST.map((status) => (
          <button
            key={status.key}
            onClick={() => onSelectStatus(status)}
            className="   flex items-center justify-center gap-2 p-4 rounded-xl border border-black/10 text-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            {status.icon} {status.label}
          </button>
        ))}
      </div>

      {selectedStatus && (
        <div className="space-y-3">
          {selectedStatus.key === "custom" && (
            <input
              type="text"
              placeholder="Isi status custom..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSubmit()}
              className="w-full p-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}

          <input
            type="text"
            placeholder="Nomor WhatsApp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSubmit()}
            className="w-full p-2 border rounded"
          />

          <button
            onClick={onSubmit}
            className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
