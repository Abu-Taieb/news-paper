import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Category from "../../Home/Category/Category";
import EditorsInsights from "../EditorsInsights/EditorsInsights";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  return (
    <>
      <h5 className="mt-5 mb-4 fw-bold text-secondary">Dragon News</h5>
      <Card className="p-4">
        <Card.Img variant="top" src={image_url} />
        <Card.Body className="border-0 px-0">
          <Card.Title className="fs-2 mt-4">{title}</Card.Title>
          <Card.Text className="my-4">{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
          <Button variant="danger">
            {" "}
            <FaArrowLeft /> All news in this category
          </Button></Link>
        </Card.Body>
      </Card>
      <EditorsInsights></EditorsInsights>
    </>
  );
};

export default News;
