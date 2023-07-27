import React from "react";
import styles from "./process.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import Youtube from "../../../Components/Reuseabalecomponents/youtube/Youtube";
import horizline from "../../../Assets/images/horizline.svg";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <div className={`${styles.secprocess}`}>
      <Container fluid>
        <Row>
          <Col className={`${styles.colprocess}`} lg={4} md={12}>
            <div className={`${styles.wrapperhead}`}>
              <h2 className={`text-white ${styles.headbuild}`}>
                About Process
              </h2>
              <img
                src={horizline}
                alt="Logo"
                className={`pt-4 ${styles.yellowline3}`}
              />
            </div>
            <p className={`text-white  ${styles.parabuild}`}>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus
            </p>
            <ul className={`text-white ${styles.listprocess}`}>
              {/* li elements as children */}
              <li className="py-1"> Maecenas ornare nisl</li>
              <li className="py-1"> A tortor ultrices bibendum</li>
              <li className="py-1"> Nulla fermentum</li>
              <li className="py-1"> Metus quis</li>
              <li className="py-1"> Sodales tristique</li>
            </ul>
          </Col>
          <Col lg={8} md={12}>
            <Row className={`${styles.rowvideo}`}>
              <Col className="p-0" lg={12} md={12}>
                <Youtube videoId="XjdseQRnjRE" />
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

export default Process;
