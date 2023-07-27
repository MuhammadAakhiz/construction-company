import React from "react";
import Homehero from "./Homehero/Homehero";
import Homeservices from "./Homeservices/Homeservices";
import Clients from "../Main/Clients/Clients";
import Sectestimonials from "../Main/Sectestimonials/Sectestimonials";
import Homeexperience from "./Homeexperience/Homeexperience";
import Homeproject from "./Homeproject/Homeproject";

const Home = () => {
  return (
    <div>
      <Homehero />
      <Homeservices />
      <Homeproject />
      <Homeexperience />
      <Sectestimonials />
      <Clients />
    </div>
  );
};

export default Home;
