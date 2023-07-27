import React from "react";
import styles from "./projectabout.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import horizline from "../../../Assets/images/horizline.svg";
import projectbuilding from "../../../Assets/images/projectbuilding.svg";
import Experience from "../../../Components/Reuseabalecomponents/Experience/Experience";

const Projectabout = () => {
  return (
    <div>
      <Container className={`${styles.projectabout}`}>
        <Row className={`${styles.rowprojectabout}`}>
          <Col className={`${styles.collist}`} lg={6} md={12}>
            <Experience
              image={horizline}
              heading="About this Project"
              desc="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.<br/>Proin cursus, dolor a mollis consectetur, risus dolor fermentum<br/>massa, a commodo elit dui sit amet risus. "
            />
            <ul className={`${styles.lists}`}>
              <li className="">Maecenas ornare nisl</li>
              <li className="">A tortor ultrices bibendum</li>
              <li className="">Nulla fermentum</li>
              <li className="">Metus quis</li>
              <li className="">Sodales tristique</li>
            </ul>
          </Col>
          <Col className={`${styles.colimg}`} lg={6} md={12}>
            <img
              src={projectbuilding}
              alt="Logo"
              className={`w-100 ${styles.blackline}`}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projectabout;
