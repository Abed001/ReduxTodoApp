import { useTheme } from "../context/useTheme";
import "../styles/filter.css";
function TaskFilter() {
  const { dark } = useTheme();
  return (
    <section className="w-full flex justify-center">
      <div
        className={` text-[0.7rem] shadow-lg min-w-[400px] lg:w-[400px]  py-4 rounded-b-lg ${
          dark
            ? "dark: text-gray-200 bg-darkelements border-t-[0.25px] border-gray-700 placeholder-gray-500"
            : "bg-white border-gray-300 border-t-[0.25px] text-gray-600 "
        } `}
      >
        <div className="filter px-5 flex font-bold justify-around tracking-tight">
          <p>5 items left</p>
          <div className="w-[50%] flex justify-center gap-x-4  ">
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>

          <p>Clear Completed</p>
        </div>
      </div>
    </section>
  );
}

export default TaskFilter;
