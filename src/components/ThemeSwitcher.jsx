export default function ThemeSwitcher({ theme, setTheme }) {
  const themes = [
    {
      key: "light",
      color: "bg-white",
    },
    {
      key: "bright",
      color: "bg-yellow-300",
    },
    {
      key: "cyber",
      color: "bg-cyan-400",
    },
  ];

  return (
    <div className="fixed top-4 right-4 flex gap-3 z-50">
      {themes.map((t) => (
        <button
          key={t.key}
          onClick={() => setTheme(t.key)}
          title={t.key}
          className={`
            w-5 h-5 rounded-full
            ${t.color}
            border
            ${theme === t.key ? "ring-2 ring-black" : ""}
            hover:scale-125
            transition
          `}
        />
      ))}
    </div>
  );
}
