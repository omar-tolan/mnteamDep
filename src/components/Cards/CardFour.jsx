import React from "react";

function CardFour() {
  return (
    <div className="bg-black flex flex-col py-6 px-4 mx-4 md:mx-1 rounded-3xl min-w-[90%] md:w-fit md:flex-1 md:min-w-0 md:items-center">
      <div className="w-full bg-white rounded-2xl">
        <img className="md:w-full" src="services/mobile.svg" alt="guide" />
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="text-center text-bold text-[30px] mt-4">
          متابعة البرنامج التدريبي والنظام الغذائي عبر تطبيق مخصص
        </p>
        <p className="text-center text-light text-l mb-8">
          هتقدر تتابع كل تفاصيل التمارين والخطط الغذائية من خلال تطبيق منظم
          وسهل الاستخدام، عشان يكون كل شيء واضح وسهل الوصول.
        </p>
      </div>
    </div>
  );
}

export default CardFour;
