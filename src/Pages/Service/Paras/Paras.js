import React from "react";
import styles from "./paras.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Paras = () => {
  return (
    <div className={`${styles.secconstruction}`}>
      <Container>
        <Row className={`${styles.rowparas}`}>
          <Col className={`${styles.colpara2}`} lg={6} md={12}>
            <p className="text-muted">
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Phasellus sed nibh dignissim, cursus tellus sit amet,
              ultrices mauris. Aliquam blandit est in eros elementum, quis
              vehicula est suscipit. Proin cursus, dolor a mollis consectetur,
              risus dolor fermentum massa, a commodo elit dui sit amet risus.
              Maecenas ornare nisl a tortor ultrices bibendum.
            </p>
          </Col>
          <Col className={`${styles.colpara1}`} lg={6} md={12}>
            <p className="text-muted">
              Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
              erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
              cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
              commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
              ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
              augue mauris molestie augue non feugiat ligula neque nec felis.
            </p>
            <p className="text-muted">
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Paras;
