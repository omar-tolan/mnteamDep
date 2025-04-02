import React from "react";

function Footer() {
  return (
    <div className="bg-black bottom-0 flex flex-col w-full">
      <div className="flex flex-row justify-between md:justify-center md:flex-row-reverse px-4 space-x-4 py-8 md:px-6 md:space-x-10">
        <div className="flex flex-col text-right w-[20vw]">
          <a href="tel:+20-1094226383" className="text-[20px] md:text-[30px]">
            اتصل بنا
          </a>
          <div className="md:flex flex-row justify-end space-x-2 hidden">
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
        <img src="logos/footerLogo.svg" className="self-start md:w-[15vw]" />
        <div className="flex flex-row md:hidden justify-end space-x-2">
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
      <p className="w-full text-center text-[12px] mb-2 font-light">
        Powered By Huemane
      </p>
    </div>
  );
}

export default Footer;
