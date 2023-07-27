import React from "react";
import largeline from "../../../Assets/images/largeline.svg";
import buildyellow from "../../../Assets/images/buildyellow.svg";
import repairyellow from "../../../Assets/images/repairyellow.svg";
import designyellow from "../../../Assets/images/designyellow.svg";
import styles from "./abouthero.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Heromain from "../../../Components/Reuseabalecomponents/Heromain/Heromain";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import Services from "../../../Components/Reuseabalecomponents/Services";
import { Link } from "react-router-dom";

const Abouthero = () => {
  return (
    <div>
      <Container fluid className={`${styles.secabouthero}`}>
        <Row className={`${styles.rowabout}`}>
          <Col className={`${styles.colabout}`} lg={8} md={12}>
            <Heromain
              image={largeline}
              heading="About Our<br/>Construction<br/>Company"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis<br/>egestas pellentesque libero dolor in diam consequat ut."
            />
            <div className="mt-3">
              <Link to="/portfolio">
                <Buttons
                  backgroundColor="#FFB400"
                  text="VIEW OUR WORK"
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

export default Abouthero;
