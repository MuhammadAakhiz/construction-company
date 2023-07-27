import React from "react";
import { Button } from "react-bootstrap";
import styles from "./buttons.module.scss";
import "../../../Assets/Styles/hover.css";
import "../../../Assets/Styles/hover-min.css";

const Buttons = ({
  backgroundColor,
  text,
  borderSize,
  borderColor,
  textColor,
  marginTop,
  width,
}) => {
  const ButtonStyle = {
    backgroundColor,
    border: `${borderSize}px solid ${borderColor}`,
    color: textColor,
    marginTop: `${marginTop}px`,
    width: width,
  };
  return (
    <div className={` ${styles.btnwrap}`}>
      <Button
        style={ButtonStyle}
        className={`hvr-sweep-to-right ${styles.btnwork}`}
      >
        {text}
      </Button>
    </div>
  );
};

export default Buttons;
