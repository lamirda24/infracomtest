import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./todoSlice";

export default configureStore({
  reducer: {
    todoList: todoReducers,
  },
});
