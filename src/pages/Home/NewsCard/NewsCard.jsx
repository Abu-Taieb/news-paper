import React from "react";
import moment from "moment";
import "./NewsCard.css";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaRegBookmark,
  FaShareAlt,
  FaStar,
  FaEye,
  FaRegStar,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4 border-0">
      <Card.Header className="d-flex justify-content-between align-items-center border-0">
        <div className="d-flex">
          <Image
            className="img-fluid img-width"
            src={author.img}
            roundedCircle
          />
          <div className="d-grid align-content-center mx-3">
            <p className="m-0">{author.name}</p>
            <p className="m-0">
              {moment(author.published_date).format("YYYY-MM-DD")}
            </p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body className="card-body">
        <Card.Title>{title}</Card.Title>
        <img className="img-fluid my-4" src={image_url} alt="" />
        <Card.Text>
          {details.length < 245 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 246)}...{" "}
              <Link
                className="text-decoration-none fw-bold text-info"
                to={`/news/${_id}`}
              >
                {" "}
                Read more
              </Link>{" "}
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="border-0 d-flex justify-content-between  align-items-center">
        <div className="d-flex align-items-center">
          <Rating
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <p className="my-0 mx-2">{rating.number}</p>
        </div>
        <div className="d-flex align-items-center">
          <FaEye />
          <p className="my-0 mx-2">{total_view}</p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
