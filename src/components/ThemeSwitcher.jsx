import PropTypes from 'prop-types';

export default function ThemeSwitcher({ theme, setTheme }) {
  const themes = ["light", "bright", "cyber"];

  return (
    <div className="absolute top-4 right-4 flex gap-2">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-3 py-1 border rounded ${
            theme === t ? "font-bold" : ""
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

ThemeSwitcher.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
