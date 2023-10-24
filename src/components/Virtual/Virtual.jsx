import React from "react";

const Virtual = () => {
  return (
    <div className="flex items-center mt-[100px] ml-[60px]">
      <div>
        <div className="font-mulish font-bold text-[48px] text-[#000000] leading-[56px]">
          Virtual healthcare for you
        </div>
        <div className="font-light font-mulish text-[21px] leading-[32px] text-[#7D7987] overflow-hidden overflow-ellipsis line-clamp-3 box-border w-[51%]">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </div>
        <div className="font-mulish text-[18px] leading-[60px] ">
          Consult today
        </div>
      </div>
      <div>
        <img
          src="/images/health.png"
          alt="arrow_boulder"
          className="h-[598px] w-[693px]"
        />
      </div>
    </div>
  );
};
export default Virtual;
