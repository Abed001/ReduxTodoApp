import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useTheme } from '../context/useTheme';
import { motion } from 'framer-motion';
import CheckboxWithIcon from './CheckboxWithIcon';

interface SortableTaskProps {
  task: {
    id: string;
    title: string;
    checked: boolean;
    // Add other fields if your task object has more
  };
  onDelete: (id: string) => void;
}
function SortableTask({ task, onDelete }: SortableTaskProps) {
  const { dark } = useTheme();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.li
      ref={setNodeRef}
      {...attributes}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={` cursor-grab hover:shadow-md transition-all group  ${
        dark
          ? ' bg-darkelements border-b-[0.25px] border-gray-700 text-gray-200'
          : 'bg-white border-gray-300 border-b-[0.25px] text-gray-600'
      }   `}
    >
      <div
        style={style}
        className=" py-3 lg:py-3 px-5  h-[50px] flex flex-row items-center gap-x-4"
      >
        {' '}
        <CheckboxWithIcon task={task} />{' '}
        {/*applying listeners here to initiate the drag on this element then i made the width bigger for better use */}
        <p
          className={`min-w-[50%] ${task.checked ? 'line-through text-gray-400' : ' '}`}
          {...listeners}
        >
          {task.title}
        </p>
        <span
          onClick={() => onDelete(task.id)}
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
    </motion.li>
  );
}
export default SortableTask;
