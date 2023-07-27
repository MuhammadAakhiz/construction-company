import React from "react";
import styles from "./projectrelated.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Latestcard from "../../../Components/Reuseabalecomponents/Latestcard/Latestcard";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import bridgecard from "../../../Assets/images/bridgecard.svg";
import cardimg1 from "../../../Assets/images/cardimg1.svg";
import secondcardimg from "../../../Assets/images/Secondcardimg.svg";
import horizline from "../../../Assets/images/horizline.svg";
import { Link } from "react-router-dom";

const Projectrelated = () => {
  return (
    <div className={`${styles.projectrelated}`}>
      <Container>
        <div className={`${styles.projectwrap}`}>
          <h2 className={`${styles.headproj}`}>Related Projects</h2>
          <img src={horizline} alt="Logo" className={`${styles.yellowline2}`} />
        </div>
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
              image={secondcardimg}
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

export default Projectrelated;
