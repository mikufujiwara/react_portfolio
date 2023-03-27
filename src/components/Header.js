import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" className="title">
            Miku Portfolio
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="navmenu">
                Home
              </Nav.Link>
              <NavDropdown
                title="Project"
                className="navmenu"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  href="https://mikufujiwara.github.io/Portfolio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Responsive Website
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  target="_blank"
                  rel="noreferrer"
                >
                  To-Do List App
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://github.com/takumi-tsuka/toy_store_final"
                  target="_blank"
                  rel="noreferrer"
                >
                  E-commerce
                </NavDropdown.Item>
                <NavDropdown.Item href="/graphicdesign">
                  Graphic Design
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/#experience" className="navmenu">
                Experience
              </Nav.Link>
              <Nav.Link href="/contact" className="navmenu">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
