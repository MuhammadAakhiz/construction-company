import React from "react";
import styles from "./custom.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Experience from "../../../Components/Reuseabalecomponents/Experience/Experience";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import horizline from "../../../Assets/images/horizline.svg";
import { Link } from "react-router-dom";

const Custom = () => {
  return (
    <div className={`${styles.secexperience}`}>
      <Container fluid className="p-0">
        <Row className={`mx-0 ${styles.rowexperience}`}>
          <Col lg={3}></Col>
          <Col className={`p-0 ${styles.colservices}`} lg={9} md={12}>
            {/* <Row className={`${styles.rowwrap}`}>          */}
            <Container className="p-0">
              <Row className={`mx-0 ${styles.rowconstruct}`}>
                <Experience
                  image={horizline}
                  heading="Custom Design Projects"
                  desc="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur,risus dolor<br/>fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. "
                />
              </Row>

              <Row className={`mx-0 ${styles.rowlists}`}>
                <Col className={`${styles.collists}`} lg={4} md={12}>
                  {/* li elements as children */}
                  <ul>
                    <li className="py-1">Lectus erat consectetur</li>
                    <li className="py-1"> Eu sapien eget</li>
                    <li className="py-1">Rhoncus consectetu</li>
                    <li className="py-1">Proin cursus</li>
                    <li className="py-1">Dolor a mollis consectetur</li>
                  </ul>
                </Col>
                <Col className={`${styles.collists}`} lg={4} md={12}>
                  <ul>
                    {/* li elements as children */}
                    <li className="py-1">Lectus erat consectetur</li>
                    <li className="py-1"> Eu sapien eget</li>
                    <li className="py-1">Rhoncus consectetu</li>
                    <li className="py-1">Proin cursus</li>
                    <li className="py-1">Dolor a mollis consectetur</li>
                  </ul>
                </Col>
                <Col className={`${styles.collists}`} lg={4} md={12}>
                  <ul>
                    {/* li elements as children */}
                    <li className="py-1">Lectus erat consectetur</li>
                    <li className="py-1"> Eu sapien eget</li>
                    <li className="py-1">Rhoncus consectetu</li>
                    <li className="py-1">Proin cursus</li>
                    <li className="py-1">Dolor a mollis consectetur</li>
                  </ul>
                </Col>
              </Row>

              <Row className="mx-0">
                <Col
                  className={`text-center ${styles.colyellow}`}
                  lg={6}
                  md={12}
                >
                  <div className="">
                    <Link to="/contact">
                      <Buttons
                        backgroundColor="transparent"
                        text="GET A QUOTE"
                        borderSize={5}
                        borderColor="#FFFFFF"
                        textColor="#FFFFFF"
                      />
                    </Link>
                  </div>
                </Col>
                <Col
                  className={`text-center ${styles.colblack}`}
                  lg={6}
                  md={12}
                >
                  <div className="">
                    <Link to="/contact">
                      <Buttons
                        backgroundColor="transparent"
                        text="LEARN MORE"
                        borderSize={5}
                        borderColor="#FFFFFF"
                        textColor="#FFFFFF"
                      />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Custom;
