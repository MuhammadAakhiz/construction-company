import React from "react";
import styles from "./portfolioproject.module.scss";
import { Container } from "react-bootstrap";

const Portfolioproject = () => {
  return (
    <div>
      <Container fluid className={`${styles.secproject}`}>
        <h2 className={`m-0 ${styles.headproject}`}>
          Have a Project in Mind?
          <br />
          Let’s Get Building!
        </h2>
      </Container>
    </div>
  );
};

export default Portfolioproject;
