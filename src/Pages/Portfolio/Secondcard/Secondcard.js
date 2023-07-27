import React from "react";
import styles from "./secondcard.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Latestcard from "../../../Components/Reuseabalecomponents/Latestcard/Latestcard";
import cardimg1 from "../../../Assets/images/cardimg1.svg";
import cardimg3 from "../../../Assets/images/cardimg3.svg";
import secondcardimg from "../../../Assets/images/Secondcardimg.svg";

const Secondcard = () => {
  return (
    <div className={`${styles.secsecondcards}`}>
      <Container>
        <Row className={`${styles.rowcards}`}>
          <Col className="" lg={4} md={12}>
            <Latestcard
              image={cardimg1}
              title="Service Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
          <Col className={`${styles.colcard2}`} lg={4} md={12}>
            <Latestcard
              image={cardimg3}
              title="Service Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
          <Col lg={4} md={12}>
            <Latestcard
              image={secondcardimg}
              title="Service Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Secondcard;
