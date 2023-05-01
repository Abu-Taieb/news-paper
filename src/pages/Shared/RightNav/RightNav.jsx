import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const RightNav = () => {
  return (
    <div>
      <div className="my-5">
        <h5 className="my-3 fw-bold text-secondary">Login With</h5>
        <Button className="my-2" variant="outline-secondary">
          <FaGoogle /> Log in with Google
        </Button>
        <Button className="my-2" variant="outline-secondary">
          <FaGithub /> Log in with Github
        </Button>
      </div>
      <div className="my-5">
        <h5 className="my-3 fw-bold text-secondary">Find Us On</h5>

        <ListGroup className="">
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
          <ListGroup.Item>
            <FaLinkedinIn /> LinkedIn
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightNav;
