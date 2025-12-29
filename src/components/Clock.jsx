import { useEffect, useState } from "react";

/*
  Clock
  - Jam digital 24 jam
  - Update tiap 1 detik
  - Untuk ambient display (pojok layar)
*/
export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return <div className="clock">{formattedTime}</div>;
}
