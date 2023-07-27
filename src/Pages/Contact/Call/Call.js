import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";

import styles from "./call.module.scss";
import { Link } from "react-router-dom";

const Call = () => {
  return (
    <div>
      <Container className={`${styles.seccall}`}>
        <Row className={`d-flex align-items-center ${styles.rowcall}`}>
          <Col lg={8} md={12}>
            <h2 className={`pb-3 ${styles.headcall}`}>Call: (541) 931-3526</h2>
            <h4>We Can’t Wait to Make Your Ideas a Reality</h4>
          </Col>
          <Col lg={4} md={12}>
            <div className={`text-center  ${styles.btnwrap}`}>
              <Link to="/blog">
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
      </Container>
    </div>
  );
};

export default Call;
