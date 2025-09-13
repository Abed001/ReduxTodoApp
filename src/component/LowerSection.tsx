import { useEffect } from 'react';
import { useTheme } from '../context/useTheme';
import { useAppSelector } from '../page/hooks';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

function LowerSection() {
  const { dark } = useTheme();
  const tasks = useAppSelector((state) => state.todo.task);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <section
        className={`flex flex-col items-center font-semibold customtransition ${
          dark ? 'bg-darkbackground' : 'bg-lightbackground'
        }    h-[100vh] w-[100%] `}
      >
        <div
          className={` transition-all duration-500 ease-in-out mt-[-15%] lg:mt-[-2%] ${
            dark ? 'bg-darkelements' : 'bg-white'
          }  min-w-[300px] lg:min-w-[400px]  h-64 overflow-y-auto no-scrollbar rounded-t-lg shadow-lg
            ${tasks.length > 0 ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}`}
        >
          {<TaskList />}
        </div>
        <div>
          <TaskFilter />
        </div>
      </section>
      <div className="text-gray-500 flex justify-center">
        {' '}
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
}

export default LowerSection;
