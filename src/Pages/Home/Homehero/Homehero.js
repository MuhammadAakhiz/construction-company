import React from "react";
import styles from "./homehero.module.scss";
import { Container, Row } from "react-bootstrap";
import horizline from "../../../Assets/images/horizline.svg";
import Buttons from "../../../Components/Reuseabalecomponents/buttons/Buttons";
import Herohome from "../../../Components/Reuseabalecomponents/Herohome/Herohome";
import { Link } from "react-router-dom";
const Homehero = () => {
  return (
    <div>
      <Container fluid className={`${styles.sechero}`}>
        <Row className={`text-center ${styles.rowconstruct}`}>
          <Herohome
            image={horizline}
            heading="Construction Inc"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat<br/>consectetur eu sapien eget, rhoncus consectetur sem."
            paddingTop=""
          />
          <div className={`${styles.btnwrapcons}`}>
            <Link to="/contact">
              <Buttons
                backgroundColor="#FFB400"
                text="VIEW OUR WORK"
                borderSize={0}
                borderColor=""
                textColor="white"
                marginTop={25}
              />
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Homehero;

{
  /* <div className={`text-center ${styles.wrapconstruct}`}>
            <img src={horizline} alt="line" className="" />
            <h2 className={`text-white py-3 ${styles.headconstruct}`}>
              Construction Inc
            </h2>
            <p className={`text-white ${styles.paraconstruct}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              lectus erat
              <br />
              consectetur eu sapien eget, rhoncus consectetur sem.
            </p> */
}
