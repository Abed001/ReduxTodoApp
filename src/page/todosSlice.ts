import { createSlice, nanoid } from "@reduxjs/toolkit";

type Task = {
  id: string;
  title: string;
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
        title: action.payload, // the string from your input
      });
    },
  },
});

export const { updateTask, addTask } = todoSlice.actions;
export default todoSlice.reducer;
