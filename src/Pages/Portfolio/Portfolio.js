import React from "react";
import Portfoliohero from "./Portfoliohero/Portfoliohero";
import Firstcards from "./Firstcards/Firstcards";
import Secondcard from "./Secondcard/Secondcard";
import Thirdcards from "./Thirdcards/Thirdcards";
import Portfolioproject from "./Portfolioproject/Portfolioproject";

const Portfolio = () => {
  return (
    <div>
      <Portfoliohero />
      <Firstcards />
      <Secondcard />
      <Thirdcards />
      <Portfolioproject />
    </div>
  );
};

export default Portfolio;
