import React from "react";
import styles from "./experience.module.scss";
const Experience = ({ image, heading, desc, paddingTop, children }) => {
  return (
    <div className={styles.container} style={{ paddingTop }}>
      <div>
        <div className={` ${styles.content}`}>
          <h2
            className={`m-0 ${styles.headconstruct}`}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <img src={image} alt="" className={`py-4 ${styles.image}`} />
          <p
            className={`m-0 ${styles.description}`}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
      </div>

      <div className={styles.listContainer}>
        <ul className={styles.list}>{children}</ul>
      </div>
    </div>
  );
};

export default Experience;
