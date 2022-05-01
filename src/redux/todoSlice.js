import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import tz from "moment-timezone";
import axios from "axios";
import swal from "sweetalert";

const currentDate = moment.tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm");

export const getData = createAsyncThunk("getData", async () => {
  const response = await fetch(
    "http://my-json-server.typicode.com/lamirda24/fakeserver/todos",
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});

const todoSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodos: (state, action) => {
      const newTodo = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.desc,
        status: 0,
        createdAt: currentDate,
      };
      //   console.log(newTodo);

      state.push(newTodo);
    },
    markAsDone: (state, action) => {
      const dataSubmit = {
        status: 1,
      };

      const index = state.findIndex((todo) => todo.id === action.payload);
      state[index].status = 1;
    },
    deleteTodos: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
  },
});
export const { addTodos, markAsDone, deleteTodos } = todoSlice.actions;
export default todoSlice.reducer;
