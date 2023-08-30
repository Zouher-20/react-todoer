import { createSlice } from "@reduxjs/toolkit";
import { idGen } from "../../utils";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleTodo: (state, action) => {
      const todoId = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === todoId);
      if (index !== -1) {
        state.todos[index].checked = !state.todos[index].checked;
        if (state.todos[index].checked)
          state.todos[index].finishedAt = new Date().toString();
      }
    },
    archiveTodo: (state, action) => {
      const todoId = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === todoId);
      if (index !== -1) state.todos[index].archiveAt = new Date().toString();
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === todoId);
      if (index !== -1) state.todos.splice(index, 1);
    },
    updateTodo: (state, action) => {
      console.log(action.payload);
      const { id, newContent } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos[index].title = newContent.title;
        state.todos[index].description = newContent.description;
      }
    },
    addTodo: (state, action) => {
      const todo = action.payload;
      todo.id = idGen();
      todo.createdAt = new Date().toString();
      todo.checked = false;
      todo.finishedAt = null;
      todo.archiveAt = null;
      state.todos.push(todo);
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, archiveTodo, updateTodo } =
  todoSlice.actions;

export const selectTodos = (state) =>
  state.todo.todos.filter((todo) => !todo.archiveAt);
export const selectArchivedTodos = (state) =>
  state.todo.todos.filter((todo) => todo.archiveAt);
export const selectTodoById = (state, id) =>
  state.todo.todos.find((todo) => todo.id === id);

export default todoSlice.reducer;
