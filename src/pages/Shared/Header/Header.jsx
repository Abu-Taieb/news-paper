import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Button, Container } from "react-bootstrap";

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
        <Button className="" variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={50}>
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>





    </Container>
  );
};

export default Header;
