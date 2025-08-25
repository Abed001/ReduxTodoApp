import ToggleDarkMode from "../component/ToggleDarkMode";

import UpperSection from "../component/UpperSection";
import { useTheme } from "../context/useTheme";

function Home() {
  const { dark } = useTheme();
  return (
    <section className={dark ? "dark" : "light"}>
      <div className="flex flex-col">
        <div className="flex justify-between mx-10 lg:mx-0 lg:justify-center items-center gap-x-40 ">
          <UpperSection />
          <ToggleDarkMode />
        </div>
        <div className="flex justify-center">
          <input
            className={`mt-10 min-w-[30%] p-2 rounded-md ${
              dark
                ? "dark:text-white bg-darkelements placeholder-gray-500"
                : "bg-white text-black "
            } `}
            type="text"
            placeholder="write a task"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
