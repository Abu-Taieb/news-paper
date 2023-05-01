import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author } = news;
  return (
    <Card className=" mb-4">
      <Card.Header className="d-flex">
        <div className="">
          <Image className="img-fluid w-25" src={author.img} roundedCircle />
        </div>
        <div className="">
          {author.name}
          {author.published_date}
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <img className="img-fluid" src={image_url} alt="" />
        <Card.Text>
            
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsCard;
