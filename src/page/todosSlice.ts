import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';

type Task = {
  id: string;
  title: string;
  checked: boolean;
};

type FilterType = 'all' | 'active' | 'completed';

const savedTasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
const initialState = {
  task: savedTasks,
  filter: 'all' as FilterType,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    deleteTask(state, action: PayloadAction<string>) {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },
    deleteCheckedTasks(state) {
      state.task = state.task.filter((task) => !task.checked);
    },
    addTask(state, action) {
      state.task.push({
        id: nanoid(), // generates a unique ID
        title: action.payload,
        checked: false, // the string from your input
      });
    },

    updateTaskOrder: (state, action: PayloadAction<Task[]>) => {
      state.task = action.payload;
    },
    toggleChecked: (state, action: PayloadAction<string>) => {
      const task = state.task.find((t) => t.id === action.payload);
      if (task) task.checked = !task.checked;
    },

    setFilter(state, action: PayloadAction<FilterType>) {
      state.filter = action.payload;
    },
  },
});

export const {
  addTask,
  toggleChecked,
  deleteTask,
  setFilter,
  deleteCheckedTasks,
  updateTaskOrder,
} = todoSlice.actions;
export default todoSlice.reducer;
