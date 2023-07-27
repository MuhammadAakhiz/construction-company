import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./secproject.module.scss";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import projectimg from "../../../Assets/images/projectimg.svg";
import horizline from "../../../Assets/images/horizline.svg";
import { Link } from "react-router-dom";
const Secproject = () => {
  return (
    <div className={` ${styles.secProject}`}>
      <Container>
        <Row className={`${styles.rowqoute}`}>
          <Col className={`${styles.colqoute}`} lg={8} md={12}>
            {/* <div
          className={`d-flex justify-content-between align-items-center py-4 ${styles.qoutewrap}`}
        > */}
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

      <Container fluid>
        <Row>
          <Col className={`p-0 ${styles.colimg}`} lg={4} md={12}></Col>
          <Col className={`${styles.colproj}`} lg={8} md={12}>
            <Row>
              <Col className={`${styles.colinnerproj}`} lg={12} md={12}>
                <div>
                  <h2 className={`${styles.headproj}`}>
                    No Project Too Big Or Too Small
                  </h2>
                  <img src={horizline} alt="line" className="pt-4" />
                </div>
              </Col>
            </Row>
            <Row className={`${styles.rowparaproj}`}>
              <Col className={`${styles.colinner2}`} lg={6} md={12}>
                <div className="">
                  <p className={`text-muted ${styles.paraproj}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                    Scelerisque lorem posuere iaculis nunc amet phasellus.
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                  </p>
                </div>
              </Col>
              <Col className={`${styles.collearn}`} lg={6} md={12}>
                <div className="">
                  <p className={`text-muted ${styles.paralearn}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                    Scelerisque lorem posuere iaculis nunc amet phasellus.
                  </p>
                  <Link to="/project">
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
            </Row>
            <Row className={`${styles.rowcolored}`}>
              <Col className={`${styles.colyellow}`} lg={6} md={12}>
                <div className={`text-center ${styles.wrapestablish}`}>
                  <h2 className={`${styles.headnumber}`}>12 </h2>
                  <p className={`p-0 ${styles.paraestablish}`}>
                    YEARS ESTABLISHED
                  </p>
                </div>
              </Col>
              <Col className={`${styles.colblack}`} lg={6} md={12}>
                <div className={`text-center ${styles.wrapestablish2}`}>
                  <h2 className={`text-white ${styles.headnumber}`}>250 </h2>
                  <p className={`text-white p-0 ${styles.paraestablish}`}>
                    COMPLETED PROJECTS
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Secproject;
