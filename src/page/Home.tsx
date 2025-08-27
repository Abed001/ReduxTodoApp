import ToggleDarkMode from "../component/ToggleDarkMode";
import UpperSection from "../component/UpperSection";
import { useTheme } from "../context/useTheme";

function Home() {
  const { dark } = useTheme();
  return (
    <div className={`flex flex-col h-[100vh] w-full`}>
      <section className={`px-10 pb-10 h-[50vh] `}>
        <div className="flex flex-col ">
          <div className="flex justify-between mx-5 lg:mx-0 lg:justify-center items-center gap-x-40 ">
            <UpperSection />
            <ToggleDarkMode />
          </div>
          <div className="flex justify-center">
            <input
              className={`mt-10 min-w-[400px] lg:min-w-[400px] p-2 rounded-md ${
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
        className={`customtransition ${
          dark ? "bg-darkbackground" : "bg-lightbackground"
        }    relative h-[100vh] w-[100%] `}
      >
        <div
          className={`mt-10 ${
            dark ? "bg-darkbackground" : "bg-white"
          }  min-w-[400px] lg:min-w-[400px] absolute top-[-20%] left-[50%] translate-x-[-50%] h-64 overflow-y-auto no-scrollbar rounded-md  shadow-lg`}
        >
          <ul
            className={`w-[100%] space-y-[0.5px] ${
              dark
                ? " divide-gray-600 text-white"
                : " text-darkelements divide-gray-800"
            } divide-y `}
          >
            {" "}
            <li className="py-2 lg:py-3 pl-12 bg-gray-100 dark:bg-gray-700 ">
              Jog around the park 3x
            </li>
            <li className="py-2 lg:py-3 pl-12 bg-gray-100 dark:bg-gray-700 ">
              Jog around the park 3x
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
