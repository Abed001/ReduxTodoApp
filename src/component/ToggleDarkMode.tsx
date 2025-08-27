import { useTheme } from "../context/useTheme";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

const ToggleDarkMode = () => {
  const { dark, toggleDark } = useTheme();

  return (
    <div className={dark ? "dark" : "light"}>
      <h1
        className=" mt-5 text-4xl"
        onClick={toggleDark}
      >
        {dark ? (
          <img
            src={moon}
            alt=""
          />
        ) : (
          <img
            src={sun}
            alt=""
          />
        )}
      </h1>
    </div>
  );
};

export default ToggleDarkMode;
