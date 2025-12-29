import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );

    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return <div className="clock glass">{time}</div>;
}
