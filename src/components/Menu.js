import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import image from "../images/brain.png";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          New Words
          <Image src={image} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="words">
              Términos
            </Nav.Link>
            <Nav.Link as={Link} to="users">
              Usuarios
            </Nav.Link>
            <Nav.Link as={Link} to="newUser">
              Nuevo Usuario
            </Nav.Link>
            <Nav.Link as={Link} to="newWord">
              Nuevo Término
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
