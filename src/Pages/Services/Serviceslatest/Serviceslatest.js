import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./serviceslatest.module.scss";
import Latestcard from "../../../Components/Reuseabalecomponents/Latestcard/Latestcard";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import horizline from "../../../Assets/images/horizline.svg";
import house from "../../../Assets/images/house.svg";
import building from "../../../Assets/images/building.svg";
import work from "../../../Assets/images/work.svg";
import { Link } from "react-router-dom";

const Serviceslatest = () => {
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
              image={house}
              title="Service Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
          <Col className={`${styles.colcard2}`} lg={4} md={12}>
            <Latestcard
              image={building}
              title="Service Title"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
              fontSize={16}
              width={325}
              border={0}
            />
          </Col>
          <Col lg={4} md={12}>
            <Latestcard
              image={work}
              title="Service Title"
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

export default Serviceslatest;
