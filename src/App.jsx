import { useEffect, useState } from "react";

/* Views */
import SelectView from "./components/SelectView";
import StatusView from "./components/StatusView";

/* UI */
import ThemeSwitcher from "./components/ThemeSwitcher";
import FullscreenButton from "./components/FullscreenButton";
import Clock from "./components/Clock";
import LoadingOverlay from "./components/LoadingOverlay";

/* Hooks */
import { useTheme } from "./hooks/useTheme";
import { useFullscreen } from "./hooks/useFullscreen";

export default function App() {
  /* =====================
     VIEW STATE
     ===================== */
  const [view, setView] = useState("select"); // "select" | "status"

  /* =====================
     STATUS STATE
     ===================== */
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [customText, setCustomText] = useState("");
  const [phone, setPhone] = useState("");

  /* =====================
     UI STATE
     ===================== */
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =====================
     THEME
     ===================== */
  const { theme, setTheme } = useTheme();

  /* =====================
     FULLSCREEN
     ===================== */
  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();

  /* =====================
     SIDE EFFECTS
     ===================== */

  // Auto fullscreen saat masuk Status View
  useEffect(() => {
    if (view === "status") {
      enterFullscreen();
    }
  }, [view, enterFullscreen]);

  /* =====================
     HANDLERS
     ===================== */

  const handleSubmit = () => {
    if (!phone) {
      alert("Nomor WhatsApp wajib diisi");
      return;
    }

    if (selectedStatus?.key === "custom" && !customText) {
      alert("Custom status belum diisi");
      return;
    }

    setIsSubmitting(true);

    // UX loading animation
    setTimeout(() => {
      setIsSubmitting(false);
      setView("status");
    }, 1200);
  };

  const handleReset = () => {
    setView("select");
    setSelectedStatus(null);
    setCustomText("");
    setPhone("");
    exitFullscreen();
  };

  /* =====================
     RENDER
     ===================== */

  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* CLOCK (ambient) */}
      <Clock />

      {/* THEME SWITCHER */}
      <ThemeSwitcher theme={theme} setTheme={setTheme} />

      {/* VIEW: SELECT */}
      {view === "select" && (
        <SelectView
          selectedStatus={selectedStatus}
          onSelectStatus={setSelectedStatus}
          customText={customText}
          setCustomText={setCustomText}
          phone={phone}
          setPhone={setPhone}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}

      {/* VIEW: STATUS */}
      {view === "status" && selectedStatus && (
        <StatusView
          status={selectedStatus}
          customText={customText}
          phone={phone}
          onReset={handleReset}
        />
      )}

      {/* FULLSCREEN HELPER */}
      <FullscreenButton
        isFullscreen={isFullscreen}
        enterFullscreen={enterFullscreen}
        exitFullscreen={exitFullscreen}
      />

      {/* LOADING OVERLAY */}
      {isSubmitting && <LoadingOverlay />}
    </div>
  );
}
