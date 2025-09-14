import { useTheme } from '../context/useTheme';
import { useAppDispatch, useAppSelector } from '../page/hooks';
import { deleteTask, updateTaskOrder } from '../page/todosSlice';
import { selectFilteredTasks } from '../page/todoSelectors';
import { AnimatePresence } from 'framer-motion';
import {
  DndContext,
  PointerSensor,
  TouchSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableTask from './SortableTask';

function TaskList() {
  const { dark } = useTheme();
  const tasks = useAppSelector(selectFilteredTasks);
  const dispatch = useAppDispatch();

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const sensors = useSensors(
    useSensor(isMobile ? TouchSensor : PointerSensor, {
      activationConstraint: isMobile ? { delay: 250, tolerance: 5 } : undefined,
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleDragStart = () => {
    document.body.style.overflow = 'hidden';
  };

  const handleDragEnd = (event: DragEndEvent) => {
    document.body.style.overflow = '';
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex((task) => task.id === active.id);
    const newIndex = tasks.findIndex((task) => task.id === over.id);
    const reordered = arrayMove(tasks, oldIndex, newIndex);

    dispatch(updateTaskOrder(reordered));
  };

  return (
    <ul className={`w-full space-y-[0.5px] ${dark ? 'text-white' : 'text-darkelements'}`}>
      <AnimatePresence>
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
