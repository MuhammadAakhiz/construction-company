import React from "react";
import styles from "./homeproject.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Services from "../../../Components/Reuseabalecomponents/Services";
import whitearrow from "../../../Assets/images/whitearrow.svg";
import horizline from "../../../Assets/images/horizline.svg";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import { Link } from "react-router-dom";
const Homeproject = () => {
  return (
    <div className={`${styles.sechomeproject}`}>
      <Container fluid>
        <Row className="pt-2">
          <Col className={`${styles.colservices}`} lg={4} md={12}>
            <Row className="mx-0 p-0">
              <Services
                image={whitearrow}
                heading={"Eco Friendly Construction"}
                desc={
                  "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                }
                descColor="black"
                descPaddingTop="8px"
              />
            </Row>
            <Row className={`mx-0 ${styles.rowservice}`}>
              <Services
                image={whitearrow}
                heading={"The Newest Technology Repairs"}
                desc={
                  "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                }
                descColor="black"
                descPaddingTop="8px"
              />
            </Row>
            <Row className="mx-0 p-0">
              <Services
                image={whitearrow}
                heading={"High Quality Construction Management"}
                desc={
                  "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                }
                descColor="black"
                descPaddingTop="8px"
              />
            </Row>
          </Col>
          <Col lg={8} md={12} className={`${styles.colproject}`}>
            <Row className={`${styles.rowproject}`}>
              <div>
                <h2 className={`${styles.headproject}`}>
                  No Project Too Big Or Too Small
                </h2>
                <img
                  src={horizline}
                  alt="Image"
                  className={`pt-4 pb-5 ${styles.horizline}`}
                />
              </div>
            </Row>
            <Row className={`${styles.rowparas}`}>
              <Col lg={6} md={12}>
                <p className="text-muted">
                  Lectus erat, consectetur eu sapien eget rhoncus consectetur
                  sem. Proin cursus, dolor a mollis consectetur, risus dolor
                  fermentum massa, a commodo elit dui sit amet risus. Maecenas
                  ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus
                  quis sodales tristique, augue mauris molestie augue, non
                  feugiat ligula neque nec felis
                </p>
              </Col>
              <Col lg={6} md={12}>
                <p className="text-muted">
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                  lectus erat, consectetur eu sapien eget rhoncus consectetur
                  sem. Proin cursus, dolor a mollis consectetur, risus dolor
                  fermentum massa, a commodo elit dui sit amet risus. Maecenas
                  ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus
                  quis sodales tristique,
                </p>
              </Col>
            </Row>
            <div>
              <Row className={`${styles.rowconsult}`}>
                <Col lg={6} md={12}>
                  <h3 className={`text-white ${styles.headconsult}`}>
                    Get Free Consultation
                  </h3>
                </Col>
                <Col lg={6} md={12}>
                  <div className={`${styles.btnwrap}`}>
                    <Link to="/contact">
                      <Buttons
                        backgroundColor="transparent"
                        text="ONLINE ESTIMATE FORM"
                        borderSize={5}
                        borderColor=""
                        textColor="#FFB400"
                      />
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homeproject;
