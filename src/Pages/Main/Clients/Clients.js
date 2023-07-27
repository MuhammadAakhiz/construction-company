import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import clients from "../../../Assets/images/Clients.svg";
import styles from "./clients.module.scss";

const Clients = () => {
  return (
    <div>
      <Container fluid className={`${styles.secclients}`}>
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <img
                src={clients}
                alt="Logo"
                className={`w-100 ${styles.clientsimg}`}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Clients;
