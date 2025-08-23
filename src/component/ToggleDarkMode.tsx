import { useTheme } from "../context/useTheme";

const ToggleDarkMode = () => {
  const { dark, toggleDark } = useTheme();

  return (
    <div className={dark ? "dark" : "light"}>
      <h1>{dark ? "🌙 Dark Mode" : "🌞 Light Mode"}</h1>
      <button onClick={toggleDark}>Toggle Theme</button>
    </div>
  );
};

export default ToggleDarkMode;
