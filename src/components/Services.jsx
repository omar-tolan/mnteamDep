import React from "react";
import CardOne from "./Cards/CardOne";
import CardTwo from "./Cards/CardTwo";
import CardThree from "./Cards/CardThree";
import CardFour from "./Cards/CardFour";

function Services() {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-black text-[35px] text-center mb-4 mt-4 md:text-[50px] md:mb-10">
        برنامجك التدريبي بيشمل
      </p>
      <div className="flex flex-col items-center space-y-2 md:flex-row md:items-stretch md:w-full md:space-x-0">
        <CardThree />
        <CardTwo />
        <CardOne />
        <CardFour />
      </div>
    </div>
  );
}

export default Services;
