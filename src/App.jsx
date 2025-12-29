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
  const [view, setView] = useState("select");

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
     THEME & FULLSCREEN
     ===================== */
  const { theme, setTheme } = useTheme();
  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();

  /* =====================
     EFFECTS
     ===================== */
  useEffect(() => {
    if (view === "status") enterFullscreen();
  }, [view, enterFullscreen]);

  /* =====================
     HANDLERS
     ===================== */
  const handleSubmit = () => {
    if (!phone) return alert("Nomor WhatsApp wajib diisi");
    if (selectedStatus?.key === "custom" && !customText)
      return alert("Custom status belum diisi");

    setIsSubmitting(true);

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
    <div className="min-h-screen w-screen relative overflow-hidden flex items-center justify-center p-6">
      {/* BACKGROUND ANIMATION */}
      <div className="animated-bg" />

      {/* CLOCK */}
      <Clock />

      {/* THEME */}
      <ThemeSwitcher theme={theme} setTheme={setTheme} />

      {/* LOADING */}
      {isSubmitting && <LoadingOverlay />}

      {/* VIEW */}
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
          onReset={handleReset}
        />
      )}

      {/* FULLSCREEN */}
      <FullscreenButton
        isFullscreen={isFullscreen}
        enterFullscreen={enterFullscreen}
        exitFullscreen={exitFullscreen}
      />
    </div>
  );
}
