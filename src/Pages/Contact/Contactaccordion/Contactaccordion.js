import React from "react";
import horizline from "../../../Assets/images/horizline.svg";
import styles from "./contactaccordion.module.scss";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import { Link } from "react-router-dom";

const Contactaccordion = () => {
  return (
    <div>
      <Container fluid className={`${styles.secaccordion}`}>
        <Row>
          <Col className={`${styles.colform}`} lg={6} md={12}>
            <div>
              <h2 className={`${styles.headform}`}>Get In Touch</h2>
              <img src={horizline} className={`${styles.horizline}`} />
            </div>

            <form action="" className="pt-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className={` ${styles.namefield}`}
              />
              <br />
              <input
                type="email"
                name="name"
                id="email"
                placeholder="Email"
                className={`mt-4 ${styles.emailfield}`}
              />
              <textarea
                className={`mt-4 p-2 ${styles.messagefield}`}
                placeholder="Message"
                rows={5}
                cols={51}
              />
            </form>
            <div className={`pt-4 ${styles.btnwrap}`}>
              <Link to="/about">
                <Buttons
                  backgroundColor="transparent"
                  text="LEARN MORE"
                  borderSize={5}
                  borderColor="#1F1F1F"
                  textColor="#1F1F1F"
                />
              </Link>
            </div>
          </Col>
          <Col className={`${styles.colaccordion}`} lg={6} md={12}>
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
    </div>
  );
};

export default Contactaccordion;
