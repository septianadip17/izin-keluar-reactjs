export default function ThemeSwitcher({ theme, setTheme }) {
  const themes = [
    { key: "light", label: "Light", color: "bg-white" },
    { key: "bright", label: "Bright", color: "bg-yellow-300" },
    { key: "cyber", label: "Cyber", color: "bg-cyan-400" },
  ];

  return (
    <div className="control-bar fixed top-6 right-6 z-40">
      <div className="flex gap-3 p-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg">
        {themes.map((t) => {
          const active = theme === t.key;

          return (
            <button
              key={t.key}
              onClick={() => setTheme(t.key)}
              title={t.label}
              aria-label={`Theme ${t.label}`}
              className={`
                w-6 h-6 rounded-full
                ${t.color}
                transition-all duration-300
                ${
                  active
                    ? "ring-2 ring-[var(--accent)] scale-110 shadow-[0_0_12px_var(--accent)]"
                    : "opacity-70 hover:opacity-100 hover:scale-110"
                }
              `}
            />
          );
        })}
      </div>
    </div>
  );
}
