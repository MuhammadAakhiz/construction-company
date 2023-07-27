import React from "react";
import styles from "./homeexperience.module.scss";
import { Container, Row } from "react-bootstrap";
import Herohome from "../../../Components/Reuseabalecomponents/Herohome/Herohome";
import horizline from "../../../Assets/images/horizline.svg";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import { Link } from "react-router-dom";
const Homeexperience = () => {
  return (
    <div>
      <Container fluid className={`${styles.secexperience}`}>
        <Row className={`text-center ${styles.rowexperience}`}>
          <Herohome
            image={horizline}
            heading="We’ve Been Building For<br/>Over 20 years"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat<br/>consectetur eu sapien eget, rhoncus consectetur sem."
            paddingTop=""
          />
          <Link to="/portfolio">
            <Buttons
              backgroundColor="#FFB400"
              text="VIEW OUR WORK"
              borderSize={0}
              borderColor=""
              textColor="white"
              marginTop={25}
            />
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default Homeexperience;
