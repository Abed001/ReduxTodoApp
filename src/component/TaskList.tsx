import { useTheme } from '../context/useTheme';
import { useAppDispatch, useAppSelector } from '../page/hooks';
import { deleteTask, updateTaskOrder } from '../page/todosSlice';
import { selectFilteredTasks } from '../page/todoSelectors';
import { AnimatePresence } from 'framer-motion';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableTask from './SortableTask';

function TaskList() {
  const { dark } = useTheme();
  //const tasks = useAppSelector((state) => state.todo.task);
  const tasks = useAppSelector(selectFilteredTasks);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex((task) => task.id === active.id);
    const newIndex = tasks.findIndex((task) => task.id === over.id);
    const reordered = arrayMove(tasks, oldIndex, newIndex);

    dispatch(updateTaskOrder(reordered));
  };

  return (
    <ul className={` w-[100%] space-y-[0.5px] ${dark ? ' text-white' : ' text-darkelements '}  `}>
      {' '}
      <AnimatePresence>
        <DndContext onDragEnd={handleDragEnd}>
          <SortableContext
            items={tasks.map((task) => task.id)}
            strategy={verticalListSortingStrategy}
          >
            {tasks.map((task) => (
              <SortableTask key={task.id} task={task} onDelete={handleDelete} />
            ))}
          </SortableContext>
        </DndContext>
      </AnimatePresence>
    </ul>
  );
}

export default TaskList;
