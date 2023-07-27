import React from "react";
import Herosec from "./Herosection/Herosec";
import Secproject from "./SecProject/Secproject";
import Latestproject from "./Latestprojects/Latestproject";
import Secachieved from "./SecAchieved/Secachieved";
import Secaccordion from "./Secaccordion/Secaccordion";
import Sectestimonials from "./Sectestimonials/Sectestimonials";
import Clients from "./Clients/Clients";

function Main() {
  return (
    <div>
      <Herosec />
      <Secproject />
      <Latestproject />
      <Secachieved />
      <Secaccordion />
      <Sectestimonials />
      <Clients />
    </div>
  );
}

export default Main;
