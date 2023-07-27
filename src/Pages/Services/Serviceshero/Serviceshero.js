import React from "react";
import styles from "./serviceshero.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import mediumline from "../../../Assets/images/mediumline.svg";
import buildyellow from "../../../Assets/images/buildyellow.svg";
import repairyellow from "../../../Assets/images/repairyellow.svg";
import designyellow from "../../../Assets/images/designyellow.svg";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import Heromain from "../../../Components/Reuseabalecomponents/Heromain/Heromain";
import Services from "../../../Components/Reuseabalecomponents/Services";
import { Link } from "react-router-dom";
const serviceshero = () => {
  return (
    <div>
      <Container fluid className={`${styles.serviceshero}`}>
        <Row className={`${styles.rowserviceshero}`}>
          <Col className={`${styles.colabout}`} lg={8} md={12}>
            <Heromain
              image={mediumline}
              heading="Our Construction<br/>Services"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis<br/>egestas pellentesque libero dolor in diam consequat ut."
            />
            <div className="mt-3">
              <Link to="/contact">
                <Buttons
                  backgroundColor="#FFB400"
                  text="GET A FREE QUOTE"
                  borderSize={0}
                  borderColor=""
                  textColor="white"
                  marginTop={25}
                />
              </Link>
            </div>
          </Col>
          <Col className={`${styles.colservices}`} lg={4} md={12}>
            <h2 className={`${styles.headyellow}`}>What We Do</h2>
            <Services
              image={buildyellow}
              heading={"Building Construction"}
              desc={
                "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
              }
              descColor="white"
              headingColor="white"
              alignCenter={true}
            />
            <Services
              image={repairyellow}
              heading={"Building Repairs"}
              desc={
                "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
              }
              descColor="white"
              headingColor="white"
              alignCenter={true}
            />
            <Services
              image={designyellow}
              heading={"Custom Design"}
              desc={
                "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
              }
              descColor="white"
              headingColor="white"
              alignCenter={true}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default serviceshero;
