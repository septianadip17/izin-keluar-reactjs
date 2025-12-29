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
import { useAutoHideUI } from "./hooks/useAutoHideUI";


const VIEW = {
  SELECT: "select",
  STATUS: "status",
};

export default function App() {
  /* =====================
     VIEW STATE
     ===================== */
  const [view, setView] = useState(VIEW.SELECT);

  /* =====================
     STATUS DATA
     ===================== */
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [customText, setCustomText] = useState("");
  const [phone, setPhone] = useState("");

  /* =====================
     UI STATE
     ===================== */
  const [isSubmitting, setIsSubmitting] = useState(false);
  useAutoHideUI();

  /* =====================
     THEME & FULLSCREEN
     ===================== */
  const { theme, setTheme } = useTheme();
  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();

  /* =====================
     EFFECTS
     ===================== */
  useEffect(() => {
    if (view === VIEW.STATUS) {
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

    // UX flow: loading → status
    setTimeout(() => {
      setView(VIEW.STATUS);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleReset = () => {
    setView(VIEW.SELECT);
    setSelectedStatus(null);
    setCustomText("");
    setPhone("");
    exitFullscreen();
  };

  /* =====================
     RENDER
     ===================== */
  return (
    <div className="relative min-h-screen w-screen overflow-hidden flex items-center justify-center p-6">
      {/* BACKGROUND */}
      <div className="animated-bg" />

      {/* CLOCK */}
      <Clock />

      {/* THEME SWITCH */}
      <ThemeSwitcher theme={theme} setTheme={setTheme} />

      {/* LOADING OVERLAY */}
      {isSubmitting && <LoadingOverlay />}

      {/* VIEW: SELECT */}
      {view === VIEW.SELECT && (
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
      {view === VIEW.STATUS && selectedStatus && (
        <StatusView
          status={selectedStatus}
          customText={customText}
          phone={phone}
          onReset={handleReset}
        />
      )}

      {/* FULLSCREEN CONTROL */}
      <FullscreenButton
        isFullscreen={isFullscreen}
        enterFullscreen={enterFullscreen}
        exitFullscreen={exitFullscreen}
      />
    </div>
  );
}
