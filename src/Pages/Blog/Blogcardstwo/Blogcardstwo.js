import React from "react";
import styles from "./Blogcardstwo.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Infocards from "../../../Components/Reuseabalecomponents/Infocards/Infocards";
import girlcard from "../../../Assets/images/girlcard.svg";
import girlcard2 from "../../../Assets/images/girlcard2.svg";
import cactus from "../../../Assets/images/cactus.svg";
const Blogcardstwo = () => {
  return (
    <div className={`${styles.blogcardstwo}`}>
      <Container>
        <Row className={`${styles.rowcards}`}>
          <Col lg={4} md={12}>
            <Infocards
              image={girlcard}
              title="Nunc Volutpat Venenatis"
              info="May 9, 2014 | Category"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
              fontSize={16}
              border={0}
            />
          </Col>
          <Col className={`${styles.colcard}`} lg={4} md={12}>
            <Infocards
              image={cactus}
              title="Donec Sit Amet Nibh"
              info="May 9, 2014 | Category"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
              fontSize={16}
              //   width={325}
              border={0}
            />
          </Col>
          <Col lg={4} md={12}>
            <Infocards
              image={girlcard2}
              title="Maecenas Fringilla Augue"
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

export default Blogcardstwo;
