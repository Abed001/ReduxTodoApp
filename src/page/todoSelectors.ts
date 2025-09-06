import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';

// This selector returns only the tasks that match the current filter
export const selectFilteredTasks = createSelector(
  [
    (state: RootState) => state.todo.task, // all tasks
    (state: RootState) => state.todo.filter, // current filter
  ],
  (tasks, filter) => {
    switch (filter) {
      case 'active':
        return tasks.filter((task) => !task.checked); // unchecked tasks
      case 'completed':
        return tasks.filter((task) => task.checked); // checked tasks
      default:
        return tasks; // all tasks
    }
  }
);
