import React from "react";
import SubscribeButton from "../Buttons/SubscibeButton";

const SubscriptionModal = ({ handleSub }) => {
  const close = () => handleSub;
  return (
    <div className="w-full h-screen backdrop-blur-md z-50 fixed inset-0">
      <div className="px-10 py-8 w-fit h-fit bg-white rounded-3xl fixed inset-0 mx-auto my-auto justify-center bg-opacity-50 backdrop-blur-md">
        <div
          onClick={close()}
          className="w-20 h-20 rounded-full absolute top-5 right-5 cursor-pointer"
        >
          <img className="w-6 absolute top-5 right-5" src="assets/close.svg" />
        </div>
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-black text-2xl mb-2">ازاى تبدأ معانا؟</h1>
          <ul className="flex flex-col w-full items-end space-y-1 mb-4">
            <li className="text-black flex flex-row justify-baseline items-end">
              دوس على ابدأ الأن واملا الفورم
              <img src="assets/step_black.svg" className="h-[20px]" />
            </li>
            <li className="text-black flex flex-row justify-baseline">
              هنتواصل معاك فى خلال 48 ساعة
              <img src="assets/step_black.svg" className="h-[20px]" />
            </li>
            <li className="text-black flex flex-row justify-baseline">
              هتبدأ معانا اجراءات الدفع والاشتراك
              <img src="assets/step_black.svg" className="h-[20px]" />
            </li>
            <li className="text-black flex flex-row justify-baseline">
              لو عندك اى استفسارات هنجاوبك عليها
              <img src="assets/step_black.svg" className="h-[20px]" />
            </li>
          </ul>
          <SubscribeButton />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
