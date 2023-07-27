import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import servicesimg1 from "../../../Assets/images/servicesimg1.svg";
import servicesimg4 from "../../../Assets/images/servicesimg4.svg";
import servicesimg2 from "../../../Assets/images/servicesimg2.svg";
import servicesimg5 from "../../../Assets/images/servicesimg5.svg";
import servicesimg3 from "../../../Assets/images/servicesimg3.svg";
import servicesimg6 from "../../../Assets/images/servicesimg6.svg";
import Services from "../../../Components/Reuseabalecomponents/Services";
import styles from "./homeservices.module.scss";
const Homeservices = () => {
  return (
    <div>
      <Container>
        <Row className={`${styles.rowservice}`}>
          <Col lg={4} md={12}>
            <div className="pb-4">
              <Services
                image={servicesimg1}
                heading={"Building Construction"}
                desc={
                  "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
                }
                descColor="#666666"
                alignCenter={true}
              />
            </div>

            <Services
              image={servicesimg4}
              heading={"Foundation Work"}
              desc={
                "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
              }
              descColor="#666666"
              alignCenter={true}
            />
          </Col>
          <Col lg={4} md={12}>
            <div className="pb-4">
              <Services
                image={servicesimg2}
                heading={"Building Repairs"}
                desc={
                  "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
                }
                descColor="#666666"
                alignCenter={true}
              />
            </div>
            <Services
              image={servicesimg5}
              heading={"Painting & Exterior"}
              desc={
                "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
              }
              descColor="#666666"
              alignCenter={true}
            />
          </Col>
          <Col lg={4} md={12}>
            <div className="pb-4">
              <Services
                image={servicesimg3}
                heading={"Demolition"}
                desc={
                  "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
                }
                descColor="#666666"
                alignCenter={true}
              />
            </div>
            <Services
              image={servicesimg6}
              heading={"Site Management"}
              desc={
                "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
              }
              descColor="#666666"
              alignCenter={true}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homeservices;
