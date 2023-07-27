import React from "react";
import styles from "./contacthero.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Heromain from "../../../Components/Reuseabalecomponents/Heromain/Heromain";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import yellowline from "../../../Assets/images/yellowline.svg";
import Services from "../../../Components/Reuseabalecomponents/Services";
import fbblack from "../../../Assets/images/fbblack.svg";
import linkedinblack from "../../../Assets/images/linkedinblack.svg";
import twitterblack from "../../../Assets/images/twitterblack.svg";
import { Link } from "react-router-dom";
const Contacthero = () => {
  return (
    <div>
      <Container fluid className={`${styles.seccontacthero}`}>
        <Row className={`${styles.rowabouthero}`}>
          <Col lg={8} md={12} className={`${styles.colcontact}`}>
            <Heromain
              image={yellowline}
              heading="Contact Us"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
        egestas <br/>pellentesque libero dolor in diam consequat ut. Mi nibh
        amet viverra id<br/>aliquet neque odio."
            />
            <div className="mt-3">
              <Link to="/contact">
                <Buttons
                  backgroundColor="#FFB400"
                  text="SEND A MESSAGE"
                  borderSize={0}
                  borderColor=""
                  textColor="white"
                  marginTop={25}
                />
              </Link>
            </div>
          </Col>
          <Col lg={4} md={12} className={`${styles.colinfo}`}>
            <h2 className={`${styles.headcontact}`}>Contact Info</h2>

            <Services
              image={""}
              heading={"Our Office"}
              desc={"1234 Divi St. #1000, San Francisc, CA<br/>93251"}
              descColor="black"
              headingColor="black"
            />
            <Services
              image={""}
              heading={"Open Office Hours"}
              desc={"M-F: 9am – 6pm<br/>S-S: 10am – 4pm"}
              descColor="black"
              headingColor="black"
            />
            <Services
              image={""}
              heading={"Get in Touch"}
              desc={"constructioninc.com<br/>(346) 426-2351"}
              descColor="black"
              headingColor="black"
            />

            <div className={`d-flex pt-4 ${styles.iconwrap}`}>
              <img src={fbblack} className={`px-3 ${styles.s}`} />
              <img src={twitterblack} className={`px-3 ${styles.s}`} />
              <img src={linkedinblack} className={`px-3 ${styles.s}`} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacthero;
