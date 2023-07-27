import React from "react";
import styles from "./aboutservices.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Services from "../../../Components/Reuseabalecomponents/Services";
import yellowarrow from "../../../Assets/images/yellowarrow.svg";
import bridge from "../../../Assets/images/bridge.svg";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import { Link } from "react-router-dom";
const Aboutservices = () => {
  return (
    <div>
      <Container fluid className={`${styles.secaboutservices}`}>
        <Row>
          <Col className={`${styles.colservices}`} lg={4} md={12}>
            <h2 className={`${styles.headbest}`}>Only the Best</h2>
            <Row className="pt-4 mx-0">
              <Services
                image={yellowarrow}
                heading={"Eco Friendly Construction"}
                desc={
                  "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                }
                descColor="black"
                descPaddingTop="8px"
              />
            </Row>
            <Row className={` mx-0 ${styles.rowservice}`}>
              <Services
                image={yellowarrow}
                heading={"The Newest Technology Repairs"}
                desc={
                  "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                }
                descColor="black"
                descPaddingTop="8px"
              />
            </Row>
            <Row className="mx-0">
              <Services
                image={yellowarrow}
                heading={"High Quality Construction Management"}
                desc={
                  "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                }
                descColor="black"
                descPaddingTop="8px"
              />
            </Row>
            <div className={` ${styles.btnwrap}`}>
              <Link to="/contact">
                <Buttons
                  backgroundColor="transparent"
                  text="FREE QUOTE"
                  borderSize={5}
                  borderColor=""
                  textColor="#FFB400"
                />
              </Link>
            </div>
          </Col>
          <Col lg={8} md={12} className="p-0">
            <img src={bridge} alt="line" className="w-100" />
            <Row className="m-0">
              <Col className={`text-center ${styles.colyellow}`} lg={6} md={12}>
                <div>
                  <h2>12</h2>
                  <h6>YEARS ESTABLISHED</h6>
                </div>
              </Col>
              <Col className={`text-center ${styles.colblack}`} lg={6} md={12}>
                <div className="text-white">
                  <h2>250</h2>
                  <h6>COMPLETED PROJECTS</h6>
                </div>
              </Col>
            </Row>
            <Row className="m-0">
              <Col
                className={`text-center ${styles.colworkers}`}
                lg={6}
                md={12}
              >
                <div>
                  <h2>24</h2>
                  <h6>FIELD WORKERS</h6>
                </div>
              </Col>
              <Col className={`text-center ${styles.colstaff}`} lg={6} md={12}>
                <div className="">
                  <h2>18</h2>
                  <h6>OFFICE STAFF</h6>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Aboutservices;
