import axios from "axios";
import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { addTodos } from "../../../redux/todoSlice";

const Add = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const todoList = useSelector((state) => state.todoList);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const formSubmit = () => {
    const id = todoList[todoList.length - 1].id + 1;
    const dataSubmit = { id: id, ...data };
    if (data) {
      axios
        .post(
          "http://my-json-server.typicode.com/lamirda24/fakeserver/todos",
          dataSubmit
        )
        .then((res) => {
          swal("Data berhasil ditambahkan!", "", "success");
          dispatch(addTodos(dataSubmit));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      swal("Harap isi form terlebih dahulu", "", "warning");
    }
  };
  // console.log(todoList[todoList.length - 1].id + 1);
  return (
    <div className="mb-5">
      <Card>
        <Card.Header>Add Todo</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description"
                name="desc"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Button variant="primary" type="button" onClick={formSubmit}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Add;
