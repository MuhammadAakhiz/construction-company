import React from "react";
import styles from "./thirdcards.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import work from "../../../Assets/images/work.svg";
import crane from "../../../Assets/images/Crane.svg";
import house from "../../../Assets/images/house.svg";
import Latestcard from "../../../Components/Reuseabalecomponents/Latestcard/Latestcard";

const Thirdcards = () => {
  return (
    <div className={`${styles.secthirdcards}`}>
      <Container>
        <Row className={`${styles.rowcards}`}>
          <Col className="" lg={4} md={12}>
            <Latestcard
              image={work}
              title="Service Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
          <Col className={`${styles.colcard2}`} lg={4} md={12}>
            <Latestcard
              image={crane}
              title="Service Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
          <Col lg={4} md={12}>
            <Latestcard
              image={house}
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

export default Thirdcards;
