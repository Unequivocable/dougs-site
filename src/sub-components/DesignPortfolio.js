import React from "react";
import { Card } from "react-bootstrap";

const DesignPortfolio = (props) => {
  return (
    <Card bg={props.color} border={props.bordercolor} className="new-border" style={{ width: "100%" }}>
      <Card.Body className="centre">
        <a href={props.src} target="_blank" rel="noreferrer">
        <Card.Img variant="top" src={props.src} alt={props.alt}  />
        </a>
        <Card.Title style={{ margin: "8px 0 0 0" }}><h3>{props.title}</h3></Card.Title>
        <Card.Text>
          <p>{props.text}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DesignPortfolio;
