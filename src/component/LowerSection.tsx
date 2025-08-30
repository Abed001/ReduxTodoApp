import { useTheme } from "../context/useTheme";
import { useAppSelector } from "../page/hooks";

function LowerSection() {
  const { dark } = useTheme();
  const tasks = useAppSelector((state) => state.todo.task);
  console.log(tasks);
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
            dark
              ? " divide-gray-600 text-white"
              : " text-darkelements divide-gray-800"
          } divide-y `}
        >
          {" "}
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`${
                dark ? "bg-darkelements" : "bg-white"
              } py-2 lg:py-3 pl-12 `}
            >
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LowerSection;
