import React from "react";
import Projecthero from "./Projecthero/Projecthero";
import Projectabout from "./Projectabout/Projectabout";
import Image from "./Image/Image";
import Info from "./Info/Info";
import Projectrelated from "./Projectrelated/Projectrelated";

const Project = () => {
  return (
    <div>
      <Projecthero />
      <Projectabout />
      <Image />
      <Info />
      <Projectrelated />
    </div>
  );
};

export default Project;
