import { useEffect } from "react";
import { useTheme } from "../context/useTheme";
import { useAppSelector } from "../page/hooks";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";

function LowerSection() {
  const { dark } = useTheme();
  const tasks = useAppSelector((state) => state.todo.task);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <section
        className={`flex flex-col items-center font-semibold customtransition ${
          dark ? "bg-darkbackground" : "bg-lightbackground"
        }    h-[100vh] w-[100%] `}
      >
        {tasks.length > 0 && (
          <div
            className={` mt-[-3%] ${
              dark ? "bg-darkelements" : "bg-white"
            }  min-w-[400px] lg:max-w-[400px]  h-64 overflow-y-auto no-scrollbar rounded-t-lg shadow-lg`}
          >
            {<TaskList />}
          </div>
        )}
        <div>
          <TaskFilter />
        </div>
      </section>
    </>
  );
}

export default LowerSection;
