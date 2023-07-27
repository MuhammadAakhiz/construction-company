import React from "react";
import styles from "./infocards.module.scss";
import { Card } from "react-bootstrap";

const Infocards = ({ image, title, info, desc, fontSize, width, border }) => {
  const cardStyle = {
    width: `${width}px`,
    border: `${border}px solid`,
    borderRadius: "5px",
  };
  const imageStyle = {
    width: "100%",
  };

  const contentStyle = {
    fontSize: `${fontSize}px`,
  };
  return (
    <div>
      <Card className={`${styles.infocards}`} style={cardStyle}>
        <Card.Img variant="top" src={image} style={imageStyle} className="" />
        <Card.Body className={styles.cardcontent} style={contentStyle}>
          <Card.Title className={`text-muted ${styles.cardhead}`}>
            {title}
          </Card.Title>
          <Card.Text className={` ${styles.cardinfo}`}>{info}</Card.Text>
          <Card.Text className={`text-muted ${styles.cardtext}`}>
            {desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Infocards;
