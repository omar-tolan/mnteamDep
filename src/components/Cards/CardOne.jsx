import React from "react";

function CardOne() {
  return (
    <div className="bg-[#DB2E10] flex flex-col items-center space-y-10 py-6 px-4 mx-4 md:mx-1 rounded-3xl min-w-[90%] md:flex-1 md:min-w-0 md:min-h-[100%]">
      <div className="flex flex-col items-center w-full">
        <p className="text-bold text-[30px] w-full text-right">
          برنامج تمارين المقاومة
        </p>
        <ul className="flex flex-col space-y-2 mt-1">
          <li className="text-light text-l text-right">
            خطة تمارين تفصيلية تناسب مستواك البدني، سواء كنت مبتدئ، متوسط، أو
            متقدم، لتحقيق أفضل النتائج
          </li>
          <li className="text-light text-l text-right">
            البرنامج يشمل كل تمارين المرونة والاسترتشات • تحسين نطاق الحركة
            وتقليل الإصابات من خلال تمارين إطالة واسترتشات مدمجة في البرنامج
          </li>
        </ul>
        <div className="bg-black rounded-2xl relative px-10 py-10 mt-5 flex flex-row justify-start space-x-5 md:mt-8">
          <img className="w-[100px] md:w-[125px]" src="services/dumbel.svg" alt="exercise" />
          <img className="w-[100px] md:w-[125px]" src="services/bike.svg" alt="exercise" />
        </div>
      </div>
    </div>
  );
}

export default CardOne;
[];
