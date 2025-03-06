import React from "react";

function CardTwo() {
  return (
    <div className="bg-black flex flex-col py-6 px-4 mx-4 md:mx-1 rounded-3xl min-w-[90%] md:w-fit md:flex-1 md:min-w-0 md:items-center">
      <div className="bg-white rounded-2xl px-10">
        <img className="md:w-full" src="services/food.svg" alt="diet" />
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="text-center text-bold text-[30px] mt-4">
          نظام غذائي محسوب السعرات
        </p>
        <p className="text-center text-light text-l mb-8">
          جبات متوازنة مبنية على احتياجاتك، سواء هدفك زيادة العضلات، فقدان
          الدهون، أو تحسين الأداء الرياضي.
        </p>
      </div>
    </div>
  );
}

export default CardTwo;
