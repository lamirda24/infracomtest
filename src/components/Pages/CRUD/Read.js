import axios from "axios";
import React, { useEffect } from "react";
import { Card, Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { deleteTodos, markAsDone } from "../../../redux/todoSlice";

const Read = ({ data }) => {
  const dispatch = useDispatch();

  const handleMarkAsDone = (id) => {
    const dataSubmit = {
      status: 1,
    };
    axios
      .patch(
        `http://my-json-server.typicode.com/lamirda24/fakeserver/todos/${id}`,
        dataSubmit,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        swal("Data berhasil diupdate", "", "success");
        dispatch(markAsDone(id));
      })
      .catch((err) => {
        swal("Data berhasil diupdate", "", "success");
        dispatch(markAsDone(id));
        console.log("error akan muncul jika id > 5", err);
      });
  };
  const deleteTodo = (id) => {
    axios
      .delete(
        `http://my-json-server.typicode.com/lamirda24/fakeserver/todos/${id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        swal("Data deleted!", "", "success");
        dispatch(deleteTodos(id));
      })
      .catch((err) => {
        swal("Data deleted", "", "success");
        dispatch(deleteTodos(id));

        console.log("error akan muncul jika id > 5", err);
      });
  };

  return (
    <div className="mb-5">
      <Card>
        <Card.Header>Todo List</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>{data.status === 0 ? "Todo" : "Done"}</td>
                  <td>{data.createdAt}</td>
                  <td>
                    {data.status === 0 ? (
                      <>
                        {" "}
                        <Button
                          variant="primary"
                          className="m-1"
                          onClick={() => handleMarkAsDone(data.id)}
                        >
                          Mark as Done{" "}
                        </Button>
                      </>
                    ) : (
                      <></>
                    )}
                    <Button
                      variant="danger"
                      className="m-1"
                      onClick={() => deleteTodo(data.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Read;
