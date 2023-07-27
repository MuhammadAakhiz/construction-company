import React from "react";
import styles from "./Servicefaq.module.scss";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import horizline from "../../../Assets/images/horizline.svg";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import { Link } from "react-router-dom";
const Servicefaq = () => {
  return (
    <div>
      <Container fluid className={`${styles.secservicefaq}`}>
        <Container>
          <Row className="py-5">
            <Col className={`${styles.colabout}`} lg={4} md={12}>
              <div className={`${styles.wrapperheadyears}`}>
                <h2 className={`text-dark ${styles.headyears}`}>F.A.Q.</h2>
                <img
                  src={horizline}
                  alt="Logo"
                  className={`pt-4 ${styles.yellowline4}`}
                />
              </div>
              <p className={`text-muted py-4 ${styles.parayears}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
                ut quam sed mauris proin feugiat.
              </p>
              <Link to="/contact">
                <Buttons
                  backgroundColor="transparent"
                  text="ASK A QUESTION"
                  borderSize={5}
                  borderColor=""
                  textColor="#FFB400"
                />
              </Link>
            </Col>
            <Col className={`${styles.colaccordion}`} lg={8} md={12}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className={`2${styles.accordionheader}`}>
                    Donec rutrum congue leo eget malesuada?
                  </Accordion.Header>
                  <Accordion.Body className={`${styles.accordionbody}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Vivamus suscipit tortor eget felis porttitor volutpat?
                  </Accordion.Header>
                  <Accordion.Body className={`${styles.accordionbody}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Curabitur non nulla sit amet nisl tempus?
                  </Accordion.Header>
                  <Accordion.Body className={`${styles.accordionbody}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Pellentesque in ipsum id orci porta dapibus?
                  </Accordion.Header>
                  <Accordion.Body className={`${styles.accordionbody}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Curabitur non nulla sit amet nisl?
                  </Accordion.Header>
                  <Accordion.Body className={`${styles.accordionbody}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Servicefaq;
