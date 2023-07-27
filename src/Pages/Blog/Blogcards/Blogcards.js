import React from "react";
import styles from "./blogcards.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Infocards from "../../../Components/Reuseabalecomponents/Infocards/Infocards";
import food from "../../../Assets/images/food.svg";
import cusion from "../../../Assets/images/cusion.svg";
import flowers from "../../../Assets/images/flowers.svg";

const Blogcards = () => {
  return (
    <div className={`${styles.blogcards}`}>
      <Container>
        <Row className={`${styles.rowcards}`}>
          <Col lg={4} md={12}>
            <Infocards
              image={food}
              title="Nunc Volutpat Venenatis"
              info="May 9, 2014 | Category"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
              fontSize={16}
              border={0}
            />
          </Col>
          <Col className={`${styles.colcard}`} lg={4} md={12}>
            <Infocards
              image={cusion}
              title="Vestibulum Nisl Felis"
              info="May 9, 2014 | Category"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
              fontSize={16}
              //   width={325}
              border={0}
            />
          </Col>
          <Col lg={4} md={12}>
            <Infocards
              image={flowers}
              title="Proin Eu Augue Efficitur"
              info="May 9, 2014 | Category"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
              fontSize={16}
              //   width={325}
              border={0}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blogcards;
