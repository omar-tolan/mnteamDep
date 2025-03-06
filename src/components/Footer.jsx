import React from "react";

function Footer() {
  return (
    <div className="bg-black bottom-0 flex flex-col w-full mt-10">
      <div className="flex flex-row space-x-4 py-8 md:px-6 md:space-x-10">
        <img src="logos/footerLogo.svg" className="self-start md:w-[15vw]" />
        <div className="flex flex-col text-right w-[20vw]">
          <p className="text-[20px] md:text-[30px]">اتصل بنا</p>
          <p className="text-light text-[14px] md:text-[16px]">القاهرة، مصر</p>
          <p className="text-light text-[14px] md:text-[16px]">
            +20-1094226383
          </p>
          <p className="text-light text-[14px] md:text-[16px]">
            Mahmoud.natto1991@gmail.com
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] text-right md:text-[30px]">
            تابعنا على مواقع التواصل الاجتماعى
          </p>
          <div className="flex flex-row justify-end space-x-2">
            <a
              href="https://www.facebook.com/share/1A75QnPFVQ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener norefferer"
            >
              <img className="h-[30px]" src="assets/icons8-facebook.svg" />
            </a>
            <a
              href="https://www.instagram.com/mahmoudnasrteam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener norefferer"
            >
              <img className="h-[30px]" src="assets/icons8-instagram.svg" />
            </a>
            <a
              href="https://www.tiktok.com/@mahmoud.nasr.team?_t=ZS-8uQqq4ozJw1&_r=1"
              target="_blank"
              rel="noopener norefferer"
            >
              <img className="h-[30px]" src="assets/icons8-tiktok.svg" />
            </a>
          </div>
        </div>
      </div>
      <p className="w-full text-[14px] text-end pr-2 pb-1">
        Powered By Huemane
      </p>
    </div>
  );
}

export default Footer;
