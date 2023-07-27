import React from "react";
import Abouthero from "./Abouthero/Abouthero";
import Construction from "./Construction/Construction";
import Aboutservices from "./Aboutservices/Aboutservices";
import Ceo from "./Ceo/Ceo";

const about = () => {
  return (
    <div>
      <Abouthero />
      <Construction />
      <Aboutservices />
      <Ceo />
    </div>
  );
};

export default about;
