import React from "react";
import PlanCard from "./Cards/PlanCard";

function Plans({ handleSub }) {
  return (
    <div className="bg-black flex flex-col space-y-6 mt-4 md:w-screen md:flex-1 md:space-x-8 md:items-stretch">
      <p className="text-[35px] text-center mt-4 md:text-[50px]">
        اختار اشتراكك
      </p>
      <div className="flex flex-col space-y-6 px-[30px] md:px-0 pb-[50px] md:w-full md:flex-row md:flex-1 md:space-x-8 md:items-stretch md:justify-center">
        <PlanCard
          duration="Turpo 90"
          price="EGP2000"
          oldPrice="EGP3000"
          services={[
            "برنامج تدريبي مخصص لمستواك الحالي",
            "نظام غذائي محسوب السعرات مخصص ليك",
            "برنامج تحليل قوام كامل مع كابتن محمود",
            "تأهيل إصابات بعد العلاج الطبيعي",
            "البرنامج يشمل كل تمارين المرونة والاسترتشات",
            "ٕمكانية التدريب مع كابتن محمود في الجيم",
            "متابعة البرنامج التدريبي والنظام الغذائي عبر تطبيق مخصص"

          ]}
          handleSub={handleSub}
        />
        <PlanCard
          duration="Rebuild 180"
          price="EGP3750"
          oldPrice="EGP5000"
          services={[
            "برنامج تدريبي مخصص لمستواك الحالي",
            "نظام غذائي محسوب السعرات مخصص ليك",
            "برنامج تحليل قوام كامل مع كابتن محمود شخصيًا",
            "تأهيل إصابات بعد العلاج الطبيعي",
            "البرنامج يشمل كل تمارين المرونة والاسترتشات",
            "ٕمكانية التدريب مع كابتن محمود في الجيم",
            "متابعة البرنامج التدريبي والنظام الغذائي عبر تطبيق مخصص"
          ]}
          handleSub={handleSub}
        />
      </div>
    </div>
  );
}

export default Plans;
