import React from "react";
import styles from "./info.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import brownbuild from "../../../Assets/images/brownbuild.svg";

const Info = () => {
  return (
    <div>
      <Container className={`${styles.secinfo}`}>
        <Row className={`${styles.rowinfo}`}>
          <Col lg={5} md={12}>
            <img
              src={brownbuild}
              alt="Logo"
              className={`w-100 ${styles.blackline}`}
            />
          </Col>
          <Col className={`${styles.colpara}`} lg={7} md={12}>
            <p className="text-muted">
              Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
              erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
              cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
              commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
              ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
              augue mauris molestie augue non feugiat ligula neque nec felis.
            </p>
            <p className="text-muted pt-1">
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
