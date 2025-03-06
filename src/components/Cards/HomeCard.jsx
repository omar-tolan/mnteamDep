import React from "react";
import GuideButton from "../Buttons/GuideButton";
import { Link } from "react-scroll";

function HomeCard() {
  return (
    <div className="bg-white rounded-3xl flex flex-col justify-center items-center space-y-[17px] mx-[15px] mb-[15px] px-[15px] pb-[20px] pt-[30px] text-black md:w-[345px] md:h-[215px] md:m-[15px]">
      <div>
        <p className="text-[18px] font-medium text-center">احنا بنقدم ايه؟</p>
        <p className="text-[16px]  font-light text-center">
          اعرف البرامج المتاحة وازاى تعمل الجسم اللى نفسك فيه.
        </p>
      </div>
      <Link to="plans" smooth={true} duration={500}>
        <GuideButton />
      </Link>
    </div>
  );
}

export default HomeCard;
