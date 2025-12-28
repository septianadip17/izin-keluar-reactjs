import { useState } from "react";
import SelectView from "./components/SelectView";
import StatusView from "./components/StatusView";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  // View control
  const [view, setView] = useState("select");

  // Status data
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [customText, setCustomText] = useState("");
  const [phone, setPhone] = useState("");

  // Theme
  const { theme, setTheme } = useTheme();

  // handler submit status
  const handleSubmit = () => {
    if (!phone) return alert("Nomor HP wajib diisi");
    if (selectedStatus.key === "custom" && !customText)
      return alert("Custom status belum diisi");

    setView("status");
  };

  const resetStatus = () => {
    setView("select");
    setSelectedStatus(null);
    setCustomText("");
    setPhone("");
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      {view === "select" && (
        <SelectView
          selectedStatus={selectedStatus}
          onSelectStatus={setSelectedStatus}
          customText={customText}
          setCustomText={setCustomText}
          phone={phone}
          setPhone={setPhone}
          onSubmit={handleSubmit}
        />
      )}

      {view === "status" && selectedStatus && (
        <StatusView
          status={selectedStatus}
          customText={customText}
          phone={phone}
          onReset={resetStatus}
        />
      )}
    </div>
  );
}
