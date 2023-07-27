import React from "react";
import styles from "./bloghero.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Heromain from "../../../Components/Reuseabalecomponents/Heromain/Heromain";
import smallline from "../../../Assets/images/smallline.svg";
const Bloghero = () => {
  return (
    <div>
      <Container fluid className={`${styles.bloghero}`}>
        <Row className={`${styles.rowserviceshero}`}>
          <Col className={`${styles.colabout}`} lg={12} md={12}>
            <Heromain image={smallline} heading="News" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bloghero;
