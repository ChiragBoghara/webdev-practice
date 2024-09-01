import { createSlice } from "@reduxjs/toolkit";

const initialTasks = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    updateTask(state, action) {
      let index = state.tasks.findIndex((task) => {
        return task.id === action.payload.id;
      });
      state.tasks[index] = action.payload;
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    setTasks(state, action) {
      state.tasks = action.payload.tasks;
    },
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice.reducer;
