import React from "react";
import'./RightNav.css'
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import QZoon from "../QZoon/QZoon";
import bg from "../../../assets/bg.png";

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
      <QZoon></QZoon>
      <div className="my-5 bg-image p-5">
        <div className="text-center text-light my-2">
          <h6 className="fw-bold fs-3 lh-sm">Create an Amazing Newspaper</h6>
          <p className="my-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button className="my-3 fw-bold" variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
