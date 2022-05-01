import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/asd" className="navbar-brand">
            Home
          </Link>
          <Nav className="me-auto">
            <Link to="/asd" className="nav-link">
              ASD
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
