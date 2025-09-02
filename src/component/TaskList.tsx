import { useTheme } from "../context/useTheme";
import { useAppDispatch, useAppSelector } from "../page/hooks";
import CheckboxWithIcon from "./CheckboxWithIcon";
import { deleteTask } from "../page/todosSlice";

function TaskList() {
  const { dark } = useTheme();
  const tasks = useAppSelector((state) => state.todo.task);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul
      className={`w-[100%] space-y-[0.5px] ${
        dark ? " text-white" : " text-darkelements "
      }  `}
    >
      {" "}
      {tasks.map((task) => (
        <li
          key={task.id}
          className={` group cursor-pointer ${
            dark
              ? " bg-darkelements border-b-[0.25px] border-gray-700 text-gray-200"
              : "bg-white border-gray-300 border-b-[0.25px] text-gray-600"
          }   `}
        >
          <div className=" py-3 lg:py-3 px-5  h-[50px] flex flex-row item-center gap-x-4">
            {" "}
            <CheckboxWithIcon task={task} />{" "}
            <p
              className={`${task.checked ? "line-through text-gray-400" : " "}`}
            >
              {task.title}
            </p>
            <span
              onClick={() => handleDelete(task.id)}
              className="ml-auto bg-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            >
              ✕
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
