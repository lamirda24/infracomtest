import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/todoSlice";
import Add from "../CRUD/Add";
import Graph from "../CRUD/Graph";
import Read from "../CRUD/Read";

const Home = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="container">
      <Add />
      <Read data={todoList} />
      <Graph />
    </div>
  );
};

export default Home;
