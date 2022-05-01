import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import tz from "moment-timezone";
import axios from "axios";
import swal from "sweetalert";

const currentDate = moment.tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm");

export const getData = createAsyncThunk("getData", async () => {
  const response = await fetch(
    "http://my-json-server.typicode.com/lamirda24/fakeserver/todos"
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
      const submit = axios
        .post(
          "http://my-json-server.typicode.com/lamirda24/fakeserver/todos",
          newTodo
        )
        .then((res) => {
          swal("Data berhasil ditambahkan!", "", "success");
        })
        .catch((err) => {
          console.log(err);
        });
      if (submit) {
        state.push(newTodo);
      }
    },
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
  },
});
export const { addTodos } = todoSlice.actions;
export default todoSlice.reducer;
