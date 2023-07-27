import React from "react";
import styles from "./framehero.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Heromain from "../../../Components/Reuseabalecomponents/Heromain/Heromain";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import Services from "../../../Components/Reuseabalecomponents/Services";
import yellowline from "../../../Assets/images/yellowline.svg";
import buildyellow from "../../../Assets/images/buildyellow.svg";
import repairyellow from "../../../Assets/images/repairyellow.svg";
import designyellow from "../../../Assets/images/designyellow.svg";
import { Link } from "react-router-dom";
const Framehero = () => {
  return (
    <div>
      <Container fluid className={`${styles.serviceshero}`}>
        <Row className={`${styles.rowserviceshero}`}>
          <Col className={`${styles.colabout}`} lg={8} md={12}>
            <Heromain
              image={yellowline}
              heading="Framing"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis<br/>egestas pellentesque libero dolor in diam consequat ut."
              paddingTop="10px"
            />
            <div className="mt-5">
              <Link to="/contact">
                <Buttons
                  backgroundColor="#FFB400"
                  text="GET A QUOTE"
                  borderSize={0}
                  borderColor=""
                  textColor="white"
                  marginTop={25}
                />
              </Link>
            </div>
          </Col>
          <Col className={`${styles.colservices}`} lg={4} md={12}>
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

export default Framehero;
