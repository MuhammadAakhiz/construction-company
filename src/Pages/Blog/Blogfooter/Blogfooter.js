import React from "react";
import styles from "./blogfooter.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import fb from "../../../Assets/images/fb.svg";
import twitter from "../../../Assets/images/twitter.svg";
import linkedin from "../../../Assets/images/linkedin.svg";
import location from "../../../Assets/images/location.svg";
import phone from "../../../Assets/images/phone.svg";
import mail from "../../../Assets/images/mail.svg";
import blackline from "../../../Assets/images/horizblack.svg";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";

const Blogfooter = () => {
  return (
    <div className={`${styles.secblogfooter}`}>
      <Container fluid>
        <Row>
          <Col className={` ${styles.colform}`} lg={6} md={12}>
            <div className={`${styles.wrapheadcontact}`}>
              <h2 className={`text-dark ${styles.headcontact}`}>
                Join Our Newsletter
              </h2>
              <img
                src={blackline}
                alt="Logo"
                className={`${styles.blackline}`}
              />
            </div>

            <form action="" className="pt-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className={` ${styles.namefield}`}
              />
              <input
                type="email"
                name="name"
                id="email"
                placeholder="Email"
                className={`mt-4 ${styles.emailfield}`}
              />
              <textarea
                className={`mt-4 p-2 ${styles.messagefield}`}
                placeholder="Message"
                rows={5}
                cols={51}
              />
              <div className={` pt-3 ${styles.btnmessage}`}>
                <Buttons
                  backgroundColor="transparent"
                  text="SUBSCRIBE NOW"
                  borderSize={5}
                  borderColor="#FFFFFF"
                  textColor="#FFFFFF"
                  width="100%"
                />
              </div>
            </form>
          </Col>
          <Col lg={6} md={12}>
            <Row className={`p-4 ${styles.rowicons}`}>
              <Col lg={12} md={12}>
                <div className={`text-center ${styles.inconswrapper}`}>
                  <img src={fb} alt="Logo" className="px-4" />
                  <img src={twitter} alt="Logo" className="px-4" />
                  <img src={linkedin} alt="Logo" className="px-4" />
                </div>
              </Col>
            </Row>
            <Row className="p-4">
              <Col lg={12} md={12} className="p-3">
                <ul className="list-unstyled p-0">
                  <li className="py-3 d-flex p-0">
                    <img src={location} alt="Logo" className="px-3" />
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </li>
                  <li className="py-3 d-flex">
                    <img src={phone} alt="Logo" className="px-3" />
                    <p className="m-0">+00 123 456 78</p>
                  </li>
                  <li className="py-3 d-flex">
                    <img src={mail} alt="Logo" className="px-3" />
                    <p className="m-0">constractioninc@gmail.com</p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blogfooter;
