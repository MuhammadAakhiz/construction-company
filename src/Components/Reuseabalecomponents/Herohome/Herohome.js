import React from "react";
import PropTypes from "prop-types";
import styles from "./herohome.module.scss";

const Herohome = ({ image, heading, desc, paddingTop }) => {
  return (
    <div className={styles.container} style={{ paddingTop }}>
      <img src={image} alt="Image" className={styles.image} />
      <div className={`text-white ${styles.content}`}>
        <div className="py-4">
          <h2
            className={`${styles.headconstruct}`}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>

        <p
          className={`m-0 ${styles.description}`}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </div>
  );
};

Herohome.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  paddingTop: PropTypes.string,
};

Herohome.defaultProps = {
  paddingTop: "0", // Default padding top is 0
};

export default Herohome;
