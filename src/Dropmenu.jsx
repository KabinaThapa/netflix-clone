import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
;
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Brandlogo from "./Netflix-Brand-Logo.png";

const Dropmenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handledrop = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
           <img src={Brandlogo} alt="logo" width="200px" height="180px"/>
          </Navbar.Brand>
          <Nav className="left">
            <NavDropdown title="English">
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>English</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav.Link href="#SignIN"> SignIN</Nav.Link>

        </Container>
      </Navbar>
      
    </>
  );
};

export default Dropmenu;
