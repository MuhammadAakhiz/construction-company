import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./firstcards.module.scss";
import Latestcard from "../../../Components/Reuseabalecomponents/Latestcard/Latestcard";
import concrete from "../../../Assets/images/concrete.svg";
import bridgecard from "../../../Assets/images/bridgecard.svg";
import building from "../../../Assets/images/building.svg";
const Firstcards = () => {
  return (
    <div className={`${styles.secfirstcards}`}>
      <Container>
        <Row className={`${styles.rowcards}`}>
          <Col className="" lg={4} md={12}>
            <Latestcard
              image={concrete}
              title="Service Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
          <Col className={`${styles.colcard2}`} lg={4} md={12}>
            <Latestcard
              image={bridgecard}
              title="Service Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
          <Col lg={4} md={12}>
            <Latestcard
              image={building}
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

export default Firstcards;
