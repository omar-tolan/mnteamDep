import React from "react";

function CardThree() {
  return (
    <div className="bg-[#DB2E10] flex flex-col items-center space-y-10 py-[40px] px-[45px] mx-4 md:mx-1 rounded-3xl min-w-[90%] md:flex-1 md:min-w-0">
      <div className="flex flex-col items-center w-full">
        <div className="bg-black py-8 flex justify-center rounded-3xl mb-4">
          <img className="w-[62%]" src="services/weight.svg" alt="exercise" />
        </div>
        <p className="text-bold text-[30px] text-right">
          برنامج تحليل قوام كامل
        </p>
        <p className="text-light text-l mb-8 text-right">
          جلسة تقييم شاملة لتحديد أي مشاكل حركية أو عدم تناسق في الجسم، مع
          حلول عملية لضمان أفضل أداء تدريبي
        </p>
      </div>
    </div>
  );
}

export default CardThree;
