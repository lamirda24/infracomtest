import React from "react";
import { Card } from "react-bootstrap";
import { Chart, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = () => {
  const todoList = useSelector((state) => state.todoList);
  const countTodo = () => {
    let i = 0;
    todoList.forEach((data) => {
      if (data.status === 0) {
        i++;
      }
    });
    return i;
  };

  const data = {
    labels: ["Todo", "Done"],
    datasets: [
      {
        label: "Tasks",
        data: [countTodo(), todoList.length - countTodo()],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mb-5">
      <Card>
        <Card.Header>Add Todo</Card.Header>
        <Card.Body>
          <>
            <Pie data={data} />
          </>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Graph;
