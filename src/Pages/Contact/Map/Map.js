import React from "react";
import styles from "./map.module.scss";
import { Container } from "react-bootstrap";
const Map = () => {
  return (
    <div>
      <Container fluid className={`${styles.secmap}`}></Container>
    </div>
  );
};

export default Map;
