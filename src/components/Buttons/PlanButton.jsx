import React from "react";

function PlanButton({ handleSub }) {
  return (
    <button
      className="bg-[#DB2E10] w-[80%] rounded-3xl text-white text-[16px]  py-[11px] hover:bg-white hover:text-[#DB2E10] cursor-pointer"
      onClick={handleSub}
    >
      اشترك الان
    </button>
  );
}

export default PlanButton;
