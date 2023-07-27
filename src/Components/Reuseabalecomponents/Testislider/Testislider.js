import React from "react";
import styles from "./testislider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import testimonslider from "../../../Assets/Data/Testimonslider";

const Testislider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    arrows: false,
    cssEase: "linear",
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.mainSlider}>
      <Slider {...settings} className={`${styles.secslider}`}>
        {testimonslider.map((item) => (
          <Col md={4} key={item.id}>
            <Card className={`border-0 m-3 ${styles.cardtesti}`}>
              <div className="d-flex justify-content-center pt-4">
                <Card.Img
                  variant="top"
                  src={item.banner}
                  className={`${styles.imgstars}`}
                />
              </div>
              <Card.Body className={`${styles.cardbody}`}>
                <Card.Text className={`text-muted py-5 ${styles.desccard}`}>
                  {item.desc}
                </Card.Text>
                <Card.Title className="pb-4">{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Slider>
    </div>
  );
};

export default Testislider;
