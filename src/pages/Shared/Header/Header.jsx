import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="text-">
          <span>
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>{" "}
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div className="d-flex bg-warning rounded">
        <Button className="" variant="danger">
          Latest
        </Button>
        <Marquee className="" speed={50}>
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="">
              <Nav.Link href="#deets">
              <FontAwesomeIcon icon={faUser} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <Button variant="secondary">Log In</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
