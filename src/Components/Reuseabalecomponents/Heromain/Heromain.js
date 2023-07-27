import React from "react";
import styles from "./heromain.module.scss";
const Heromain = ({ image, heading, desc, paddingTop }) => {
  return (
    <div className={`${styles.headwrapper}`}>
      <div
        className={`d-flex text-white align-items-center ${styles.wrapperconstruct}`}
      >
        <img src={image} alt="Logo" className={`${styles.yellowline}`} />
        <div>
          <h1
            className={`m-0 px-4 ${styles.headconstruct}`}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>
      </div>
      <p
        className={`text-white pt-4 m-0 ${styles.paraconstruct}`}
        style={{ paddingTop }}
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </div>
  );
};

export default Heromain;
