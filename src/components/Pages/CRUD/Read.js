import React, { useEffect } from "react";
import { Card, Button, Table } from "react-bootstrap";

const Read = ({ data }) => {
  const handleMarkAsDone = () => {};
  return (
    <div className="mb-5">
      <Card>
        <Card.Header>Add Todo</Card.Header>
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
                    <Button
                      variant="primary"
                      className="m-1"
                      onClick={() => handleMarkAsDone()}
                    >
                      Mark as Done{" "}
                    </Button>
                    <Button variant="danger" className="m-1">
                      {" "}
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
