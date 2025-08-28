import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice"; // Adjust path if needed

// ✅ Create the Redux store
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    // Add more slices here as your app grows
  },
});

// ✅ Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
