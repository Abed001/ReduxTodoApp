import { useEffect } from "react";
import { useTheme } from "../context/useTheme";
import { useAppSelector } from "../page/hooks";
import TaskList from "./TaskList";

function LowerSection() {
  const { dark } = useTheme();
  const tasks = useAppSelector((state) => state.todo.task);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section
      className={`font-semibold customtransition ${
        dark ? "bg-darkbackground" : "bg-lightbackground"
      }    relative h-[100vh] w-[100%] `}
    >
      {tasks.length > 0 && (
        <div
          className={`mt-10 ${
            dark ? "bg-darkelements" : "bg-white"
          }  min-w-[400px] lg:min-w-[400px] absolute top-[-20%] left-[50%] translate-x-[-50%] h-64 overflow-y-auto no-scrollbar rounded-md  shadow-lg`}
        >
          {<TaskList />}
        </div>
      )}
    </section>
  );
}

export default LowerSection;
