import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import horizline from "../../../Assets/images/horizline.svg";
import styles from "./sectestimonials.module.scss";
import Testislider from "../../../Components/Reuseabalecomponents/Testislider/Testislider";

const Sectestimonials = () => {
  return (
    <div>
      <Container fluid className={`${styles.Sectestimonials}`}>
        <Container>
          <div className={`text-center ${styles.wraptestimonials}`}>
            <h2 className={`${styles.headtestimonials}`}>
              Client Testimonials
            </h2>
            <img
              src={horizline}
              alt="Logo"
              className={`pt-4 ${styles.yellowline5}`}
            />
          </div>
          <Row className="pt-4">
            <Col lg={12} md={12}>
              <Testislider />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Sectestimonials;
