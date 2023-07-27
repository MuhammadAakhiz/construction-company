import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import horizline from "../../../Assets/images/horizline.svg";
import styles from "./latestproject.module.scss";
import cardimg1 from "../../../Assets/images/cardimg1.svg";
import cardimg2 from "../../../Assets/images/cardimg2.svg";
import cardimg3 from "../../../Assets/images/cardimg3.svg";
import Latestcard from "../../../Components/Reuseabalecomponents/Latestcard/Latestcard";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import { Link } from "react-router-dom";

const Latestproject = () => {
  return (
    <div className={`${styles.seclatestproject}`}>
      <Container>
        <div className={`${styles.projectwrap}`}>
          <h2 className={`${styles.headproj}`}>Latest Projects</h2>
          <img src={horizline} alt="Logo" className={`${styles.yellowline2}`} />
        </div>
        <Row className={`${styles.rowcards}`}>
          <Col className="" lg={4} md={12}>
            <Latestcard
              image={cardimg1}
              title="Project Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
          <Col className={`${styles.colcard2}`} lg={4} md={12}>
            <Latestcard
              image={cardimg2}
              title="Project Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
          <Col lg={4} md={12}>
            <Latestcard
              image={cardimg3}
              title="Project Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
        </Row>
        <div className="pt-5 text-center">
          <Link to="/portfolio">
            <Buttons
              backgroundColor="transparent"
              text="VIEW ALL"
              borderSize={5}
              borderColor="#1F1F1F"
              textColor="#1F1F1F"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Latestproject;
