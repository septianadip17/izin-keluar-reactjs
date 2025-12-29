import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="control-bar fixed top-6 left-6 z-30 select-none">
      <div
        className="px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 border border-white/20 shadow-md text-xs tracking-[0.35em] font-mono opacity-50 hover:opacity-100 transition">
        {time}
      </div>
    </div>
  );
}
