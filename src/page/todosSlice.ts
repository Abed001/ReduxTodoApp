import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: string;
  title: string;
  checked: boolean;
};

const savedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
const initialState = {
  task: savedTasks,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateTask(state, action) {
      state.task = action.payload;
    },

    addTask(state, action) {
      state.task.push({
        id: nanoid(), // generates a unique ID
        title: action.payload,
        checked: false, // the string from your input
      });
    },

    toggleChecked: (state, action: PayloadAction<string>) => {
      const task = state.task.find((t) => t.id === action.payload);
      if (task) task.checked = !task.checked;
    },
  },
});

export const { updateTask, addTask, toggleChecked } = todoSlice.actions;
export default todoSlice.reducer;
