import React from "react";
import styles from "./projecthero.module.scss";
import yellowline from "../../../Assets/images/yellowline.svg";
import { Col, Container, Row } from "react-bootstrap";
import Heromain from "../../../Components/Reuseabalecomponents/Heromain/Heromain";

const Projecthero = () => {
  return (
    <div className={`${styles.heroproject}`}>
      <Container fluid>
        <Row>
          <Col className={`${styles.colhero}`} lg={8} md={12}>
            <Heromain
              image={yellowline}
              heading="Monarch HQ Project"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis<br/>egestas pellentesque libero dolor in diam consequat ut. "
              imageHeight="100px"
            />
          </Col>
          <Col lg={4} md={12} className={`${styles.colhero2}`}>
            <p className="text-white">
              <b>Date:</b> 12 April 2018
              <br />
              <b>Client:</b> Monarch Group
              <br />
              <b>Project Type:</b> Building Renovation
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projecthero;
