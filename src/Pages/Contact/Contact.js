import React from "react";
import Contacthero from "./Contacthero/Contacthero";
import Call from "./Call/Call";
import Contactaccordion from "./Contactaccordion/Contactaccordion";
import Map from "./Map/Map";

const Contact = () => {
  return (
    <div>
      <Contacthero />
      <Call />
      <Contactaccordion />
      <Map />
    </div>
  );
};

export default Contact;
