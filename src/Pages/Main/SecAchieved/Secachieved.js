import React from "react";
import styles from "./secachieved.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import horizline from "../../../Assets/images/horizline.svg";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import Youtube from "../../../Components/Reuseabalecomponents/youtube/Youtube";
import { Link } from "react-router-dom";

const Secachieved = () => {
  return (
    <div className={`${styles.secachieved}`}>
      <Container fluid>
        <Row>
          <Col className={`${styles.colachieved}`} lg={4} md={12}>
            <div className={`${styles.wrapperhead}`}>
              <h2 className={`text-white ${styles.headbuild}`}>
                We’ve Been Building For Over 10 Years
              </h2>
              <img
                src={horizline}
                alt="Logo"
                className={`pt-4 ${styles.yellowline3}`}
              />
            </div>
            <p className={`text-white pb-5 ${styles.parabuild}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat. Scelerisque lorem posuere
              iaculis nunc amet phasellus.
            </p>
            <Link to="/about">
              <Buttons
                backgroundColor="transparent"
                text="ABOUT US"
                borderSize={5}
                borderColor=""
                textColor="#FFB400"
              />
            </Link>
          </Col>
          <Col lg={8} md={12}>
            <Row className={`${styles.rowvideo}`}>
              <Col className="p-0" lg={12} md={12}>
                <Youtube videoId="VtAtLdXWTGA" />
              </Col>
            </Row>
            <Row>
              <Col className={`${styles.colcontact}`} lg={6} md={12}>
                <div className={`${styles.wrapcontact}`}>
                  <h2 className={`${styles.headcontact}`}>Call for a Quote</h2>
                  <h3>(346) 234-6973</h3>
                </div>
              </Col>
              <Col className={`${styles.colonline}`} lg={6} md={12}>
                <div className="text-center">
                  <Link to="/contact">
                    <Buttons
                      backgroundColor="transparent"
                      text="ONLINE ESTIMATE FORM"
                      borderSize={5}
                      borderColor="#1F1F1F"
                      textColor="#1F1F1F"
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Secachieved;
