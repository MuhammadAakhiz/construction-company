import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./latestcard.module.scss";
import Buttons from "../../Reuseabalecomponents/buttons/Buttons";
import { Link } from "react-router-dom";
const Latestcard = ({ image, title, info, desc, fontSize, width, border }) => {
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
    <Card className={`${styles.cardsproject}`} style={cardStyle}>
      <Card.Img variant="top" src={image} style={imageStyle} className="pb-4" />
      <Card.Body className={styles.cardcontent} style={contentStyle}>
        <Card.Title className={`${styles.cardhead}`}>{title}</Card.Title>
        <Card.Text className={`text-muted ${styles.cardtext}`}>
          {desc}
        </Card.Text>
        <div className={`text-center ${styles.wrapbtnproject}`}>
          <Link to="/project">
            <Buttons
              backgroundColor="transparent"
              text="VIEW PROJECT"
              borderSize={2}
              borderColor="#666666"
              textColor="#666666"
            />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default Latestcard;
