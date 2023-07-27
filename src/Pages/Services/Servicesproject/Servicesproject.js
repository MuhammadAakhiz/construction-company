import React from "react";
import styles from "./servicesproject.module.scss";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Secproject = () => {
  return (
    <div className={`${styles.Secproject}`}>
      <Container>
        <Row className={`d-flex align-items-center ${styles.rowqoute}`}>
          <Col className={`${styles.colqoute}`} lg={8} md={12}>
            <h2 className={`${styles.headqoute}`}>
              Get a Quote For Your Project
            </h2>
          </Col>
          <Col lg={4} md={12}>
            <Link to="/contact">
              <Buttons
                backgroundColor="transparent"
                text="FREE QUOTE"
                borderSize={5}
                borderColor=""
                textColor="#FFB400"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Secproject;
