import { useEffect } from "react";
import { useTheme } from "../context/useTheme";
import { useAppSelector } from "../page/hooks";
import CheckboxWithIcon from "./CheckboxWithIcon";

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
      <div
        className={`mt-10 ${
          dark ? "bg-darkelements" : "bg-white"
        }  min-w-[400px] lg:min-w-[400px] absolute top-[-20%] left-[50%] translate-x-[-50%] h-64 overflow-y-auto no-scrollbar rounded-md  shadow-lg`}
      >
        <ul
          className={`w-[100%] space-y-[0.5px] ${
            dark ? " text-white" : " text-darkelements "
          }  `}
        >
          {" "}
          {tasks.map((task) => (
            <li
              key={task.id}
              className={` cursor-pointer ${
                dark
                  ? " bg-darkelements border-b-[0.25px] border-gray-700 text-gray-200"
                  : "bg-white border-gray-300 border-b-[0.25px] text-gray-600"
              }   `}
            >
              <div className=" py-3 lg:py-3 pl-5  h-[50px] flex flex-row item-center gap-x-4">
                {" "}
                <CheckboxWithIcon task={task} />{" "}
                <p
                  className={`${
                    task.checked ? "line-through text-gray-400" : " "
                  }`}
                >
                  {task.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LowerSection;
