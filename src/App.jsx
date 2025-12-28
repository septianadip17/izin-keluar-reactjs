import { useEffect, useState } from "react";
import SelectView from "./components/SelectView";
import StatusView from "./components/StatusView";
import ThemeSwitcher from "./components/ThemeSwitcher";
import FullscreenButton from "./components/FullscreenButton";
import { useTheme } from "./hooks/useTheme";
import { useFullscreen } from "./hooks/useFullscreen";

/*
  App:
  - Pusat state
  - Kontrol view
  - Kontrol fullscreen
*/
export default function App() {
  // View control
  const [view, setView] = useState("select");

  // Status data
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [customText, setCustomText] = useState("");
  const [phone, setPhone] = useState("");

  // Theme
  const { theme, setTheme } = useTheme();

  // Fullscreen
  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();

  /*
    Auto fullscreen saat masuk Status View
  */
  useEffect(() => {
    if (view === "status") {
      enterFullscreen();
    }
  }, [enterFullscreen, view]);

  /*
    Handler submit
  */
  const handleSubmit = () => {
    if (!phone) return alert("Nomor WhatsApp wajib diisi");
    if (selectedStatus.key === "custom" && !customText)
      return alert("Custom status belum diisi");

    setView("status");
  };

  /*
    Reset semua state
  */
  const resetStatus = () => {
    setView("select");
    setSelectedStatus(null);
    setCustomText("");
    setPhone("");
    exitFullscreen();
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-6">
      {/* THEME SWITCHER */}
      <ThemeSwitcher theme={theme} setTheme={setTheme} />

      {/* VIEW CONTROL */}
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

      {/* FULLSCREEN HELPER */}
      <FullscreenButton
        isFullscreen={isFullscreen}
        enterFullscreen={enterFullscreen}
        exitFullscreen={exitFullscreen}
      />
    </div>
  );
}
