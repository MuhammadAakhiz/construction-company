import React from "react";
import styles from "./image.module.scss";
import { Container } from "react-bootstrap";
import containerimg from "../../../Assets/images/containerimg.svg";
const Image = () => {
  return (
    <div>
      <Container className={`${styles.secimg}`}>
        <img
          src={containerimg}
          alt="Logo"
          className={`w-100 ${styles.blackline}`}
        />
      </Container>
    </div>
  );
};

export default Image;
