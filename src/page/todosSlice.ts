import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: "firsttodo",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateTask(state, action) {
      state.task = action.payload;
    },
  },
});

export const { updateTask } = todoSlice.actions;
export default todoSlice.reducer;
