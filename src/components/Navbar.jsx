import React from "react";
import NavButton from "./Buttons/NavButton";
import { animateScroll, Link } from "react-scroll";

function Navbar() {
  const scrollToTop = () => {
    const options = {
      duration: 500,
      smooth: true,
    };

    animateScroll.scrollToTop(options);
  };
  return (
    <div className="bg-[rgba(55,55,55,0.5)] rounded-3xl h-[46px] mx-auto pr-[8px] pl-[21px] py-[6px] space-x-[20px] backdrop-blur-3xl flex flex-row justify-center items-center top-[30px] z-50 fixed cursor-pointer">
      <img
        src="logos/navlogo.svg"
        alt="logo"
        className="h-[16px] w-[40px]"
        onClick={scrollToTop}
      />
      <Link to="services" smooth={true} duration={500}>
        <button className="text-[12px] font-bold hover:text-[#DB2E10] cursor-pointer">
          البرامج
        </button>
      </Link>
      <Link to="cv" smooth={true} duration={500}>
        <button className="text-[12px] font-bold hover:text-[#DB2E10] cursor-pointer">
          اتصل بنا
        </button>
      </Link>
      <Link to="plans" smooth={true} duration={500}>
        <NavButton />
      </Link>
    </div>
  );
}

export default Navbar;
