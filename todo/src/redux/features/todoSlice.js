import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "Learn Vitest", status: "pending" },
    { id: 2, title: "Write Tests", status: "ongoing" },
    { id: 3, title: "Read React Testing Library Doc", status: "complete" },
    { id: 4, title: "Jest Dom", status: "archive" },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload,
        status: "pending",
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    changeStatus: (state, action) => {
      const { id, status } = action.payload; // status can be "pending", "ongoing", "complete", "archive"
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.status = status;
      }
    },
  },
});

export const { addTodo, deleteTodo, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;
