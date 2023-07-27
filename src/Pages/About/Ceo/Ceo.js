import React from "react";
import styles from "./ceo.module.scss";
import { Container } from "react-bootstrap";
const Ceo = () => {
  return (
    <div>
      <Container className={`text-center ${styles.secceo}`}>
        <div>
          <h3 className={`${styles.headceo}`}>
            “Suspendisse neque erat, imperdiet
            <br />
            ac non, sollicitudin accumsan lacus.
            <br />
            Vestibulum ac ex rutrum,
            <br />
            pellentesque purus et, lacinia mi.
            <br />
            Nullam maximus lectus libero.”
          </h3>
          <p className="text-muted">
            <b>JOHN SMITH – CEO</b>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Ceo;
