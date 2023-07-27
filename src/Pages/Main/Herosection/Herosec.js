import React from "react";
import styles from "./herosec.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import yellowline from "../../../Assets/images/yellowline.svg";
import Services from "../../../Components/Reuseabalecomponents/Services";
import build from "../../../Assets/images/buildimg.svg";
import found from "../../../Assets/images/found.svg";
import site from "../../../Assets/images/site.svg";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import Heromain from "../../../Components/Reuseabalecomponents/Heromain/Heromain";
import { Link } from "react-router-dom";

const Herosec = () => {
  return (
    <div className={`${styles.herosec}`}>
      <Container fluid>
        <Row>
          <Col className={`${styles.colhero}`} lg={8} md={12}>
            <Heromain
              image={yellowline}
              heading="Construction"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                egestas <br/>pellentesque libero dolor in diam consequat ut. Mi nibh
                amet viverra id<br/>aliquet neque odio."
              // desc2="pellentesque libero dolor in diam consequat ut. Mi nibh
              // amet viverra id"
              // desc3="aliquet neque odio."
            />

            <Link to="/portfolio">
              <Buttons
                backgroundColor="#FFB400"
                text="VIEW OUR WORK"
                borderSize={0}
                borderColor=""
                textColor="white"
                marginTop={35}
              />
            </Link>
          </Col>
          <Col lg={4} md={12} className={`${styles.colhero2}`}>
            <h2 className={`pt-2 ${styles.headservice}`}>Our Services</h2>
            <Services
              image={build}
              heading={"Building Construction"}
              desc={"Lorem ipsum dolor sit consectetur adipiscing elit."}
              descColor="white"
              alignCenter={true}
            />
            <Services
              image={found}
              heading={"Foundation Work"}
              desc={"Lorem ipsum dolor sit consectetur adipiscing elit."}
              descColor="white"
              alignCenter={true}
            />
            <Services
              image={site}
              heading={"Site Management"}
              desc={"Lorem ipsum dolor sit consectetur adipiscing elit."}
              descColor="white"
              alignCenter={true}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Herosec;
