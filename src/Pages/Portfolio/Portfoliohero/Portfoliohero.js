import React from "react";
import styles from "./portfoliohero.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Heromain from "../../../Components/Reuseabalecomponents/Heromain/Heromain";
import mediumline from "../../../Assets/images/mediumline.svg";
const Portfoliohero = () => {
  return (
    <div>
      <Container fluid className={`${styles.portfoliohero}`}>
        <Row className={`${styles.rowserviceshero}`}>
          <Col className={`${styles.colabout}`} lg={12} md={12}>
            <Heromain
              image={mediumline}
              heading="Our Construction<br/>Projects"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis<br/>egestas pellentesque libero dolor in diam consequat ut."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfoliohero;
