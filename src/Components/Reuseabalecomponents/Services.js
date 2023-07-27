import React from "react";
import styles from "./services.module.scss";

const Services = ({
  image,
  heading,
  headingColor,
  desc,
  descColor,
  imagePaddingBottom,
  descPaddingTop,
  imageHeight,
  alignCenter,
}) => {
  const servicesWrapStyle = alignCenter ? { alignItems: "center" } : {};

  return (
    <div className={`d-flex ${styles.serviceswrap}`} style={servicesWrapStyle}>
      <div className="">
        <img
          src={image}
          className={`${styles.imgservices}`}
          style={{ paddingBottom: imagePaddingBottom, height: imageHeight }}
        />
      </div>
      <div className="px-3">
        <h2
          className={`${styles.headservices}`}
          style={{ color: headingColor }}
        >
          {heading}
        </h2>
        <p
          className={`${styles.paraservices}`}
          style={{ color: descColor, paddingTop: descPaddingTop }}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </div>
  );
};

export default Services;
