import React from "react";
import Serviceshero from "./Serviceshero/Serviceshero";
import Servicesproject from "./Servicesproject/Servicesproject";
import Servicesexperience from "./Servicesexperience/Servicesexperience";
import Repair from "./Repair/Repair";
import Custom from "./Custom/Custom";
import Serviceslatest from "./Serviceslatest/Serviceslatest";
const Services = () => {
  return (
    <div>
      <Serviceshero />
      <Servicesproject />
      <Servicesexperience />
      <Repair />
      <Custom />
      <Serviceslatest />
    </div>
  );
};

export default Services;
