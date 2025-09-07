import { useTheme } from '../context/useTheme';
import { useAppDispatch, useAppSelector } from '../page/hooks';
import { deleteCheckedTasks, setFilter } from '../page/todosSlice';
import '../styles/filter.css';
function TaskFilter() {
  const { dark } = useTheme();
  const dispatch = useAppDispatch();
  const taskNumber = useAppSelector((state) => state.todo.task);

  const handleFilter = (filter: 'all' | 'active' | 'completed') => {
    dispatch(setFilter(filter));
  };

  const handleClear = () => {
    dispatch(deleteCheckedTasks());
  };

  return (
    <section className="w-full flex justify-center">
      <div
        className={` text-[0.7rem] shadow-lg min-w-[400px] lg:w-[400px]  py-4 rounded-b-lg ${
          dark
            ? 'dark: text-gray-200 bg-darkelements border-t-[0.25px] border-gray-700 placeholder-gray-500'
            : 'bg-white border-gray-300 border-t-[0.25px] text-gray-600 '
        } `}
      >
        <div className="filter px-5 flex font-bold justify-around tracking-tight">
          <span>{taskNumber.length} items left</span>
          <div className="w-[50%] flex justify-center gap-x-4  ">
            {/* Filter buttons */}
            <div className="w-[50%] flex justify-center gap-x-4">
              <p onClick={() => handleFilter('all')} className="cursor-pointer hover:text-blue-500">
                All
              </p>
              <p
                onClick={() => handleFilter('active')}
                className="cursor-pointer hover:text-blue-500"
              >
                Active
              </p>
              <p
                onClick={() => handleFilter('completed')}
                className="cursor-pointer hover:text-blue-500"
              >
                Completed
              </p>
            </div>
          </div>

          <p onClick={() => handleClear()}>Clear Completed</p>
        </div>
      </div>
    </section>
  );
}

export default TaskFilter;
