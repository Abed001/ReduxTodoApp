import { useTheme } from '../context/useTheme';
import { useAppDispatch, useAppSelector } from '../page/hooks';
import CheckboxWithIcon from './CheckboxWithIcon';
import { deleteTask } from '../page/todosSlice';
import { selectFilteredTasks } from '../page/todoSelectors';

function TaskList() {
  const { dark } = useTheme();
  //const tasks = useAppSelector((state) => state.todo.task);
  const tasks = useAppSelector(selectFilteredTasks);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul className={`w-[100%] space-y-[0.5px] ${dark ? ' text-white' : ' text-darkelements '}  `}>
      {' '}
      {tasks.map((task) => (
        <li
          key={task.id}
          className={` group cursor-pointer ${
            dark
              ? ' bg-darkelements border-b-[0.25px] border-gray-700 text-gray-200'
              : 'bg-white border-gray-300 border-b-[0.25px] text-gray-600'
          }   `}
        >
          <div className=" py-3 lg:py-3 px-5  h-[50px] flex flex-row item-center gap-x-4">
            {' '}
            <CheckboxWithIcon task={task} />{' '}
            <p className={`${task.checked ? 'line-through text-gray-400' : ' '}`}>{task.title}</p>
            <span
              onClick={() => handleDelete(task.id)}
              className="flex items-center ml-auto bg-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                <path
                  fill="#494C6B"
                  fill-rule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
