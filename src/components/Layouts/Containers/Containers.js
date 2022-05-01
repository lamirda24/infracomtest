import React from "react";
import { Outlet } from "react-router-dom";
import "./_container.css";

const Containers = () => {
  return (
    <div className="containers">
      <Outlet />
    </div>
  );
};

export default Containers;
