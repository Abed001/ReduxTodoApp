import ToggleDarkMode from "../component/ToggleDarkMode";
import UpperSection from "../component/UpperSection";
import { useTheme } from "../context/useTheme";

function Home() {
  const { dark } = useTheme();
  return (
    <div className={`flex flex-col  h-[100vh] w-full`}>
      <section className={`px-10 pb-20 `}>
        <div className="flex flex-col">
          <div className="flex justify-between mx-5 lg:mx-0 lg:justify-center items-center gap-x-40 ">
            <UpperSection />
            <ToggleDarkMode />
          </div>
          <div className="flex justify-center">
            <input
              className={`mt-10 min-w-[90%] lg:min-w-[30%] p-2 rounded-md ${
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

      {/*the bottom section*/}

      <section
        className={`${
          dark ? "bg-darkbackground" : "bg-white"
        }   mt-10 relative h-[100vh] w-100% `}
      >
        <div className=" absolute top-[-30%] left-[50%] translate-x-[-50%] h-64 overflow-y-auto no-scrollbar rounded-md bg-white dark:bg-gray-800 shadow-md">
          <ul
            className={`${
              dark ? "divide-gray-600 text-white" : " text-darkelements"
            } divide-y divide-gray-300`}
          >
            {" "}
            <li className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
              Jog around the park 3x
            </li>
            <li className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
              10 minutes meditation
            </li>
            <li className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
              Read for 1 hour
            </li>
            <li className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
              Jog around the park 3x
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
