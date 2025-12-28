/* eslint-disable react/prop-types */
import { STATUS_LIST } from "../data/statusList";

/*
  View untuk memilih status
*/
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
    <div className="w-full max-w-md space-y-4">
      <h1 className="text-3xl font-bold mb-4">Status Meja</h1>

      <div className="grid grid-cols-2 gap-3">
        {STATUS_LIST.map((status) => (
          <button
            key={status.key}
            onClick={() => onSelectStatus(status)}
            className="p-4 border rounded text-xl hover:scale-105 transition"
          >
            {status.icon} {status.label}
          </button>
        ))}
      </div>

      {/* Input muncul berdasarkan state */}
      {selectedStatus && (
        <div className="space-y-3">
          {selectedStatus.key === "custom" && (
            <input
              type="text"
              placeholder="Isi status custom..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSubmit()}
              className="w-full p-2 border rounded"
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
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
