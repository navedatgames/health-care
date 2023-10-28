import React from "react";

const Virtual = () => {
  return (
    <div className="flex items-center mt-[100px] ml-[60px]">
      <div>
        <div className="font-mulish font-bold text-[48px] text-[#000000] leading-[56px]">
          Virtual healthcare for you
        </div>
        <div className="font-light font-mulish text-[21px] leading-[32px] text-[#7D7987] overflow-hidden overflow-ellipsis line-clamp-3 box-border w-[51%] mt-10">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </div>
        <div className="w-full flex items-center justify-center max-w-[200px] max-h-[60px] bg-[#458FF6] border rounded-[33px] mt-6">
          <p className="text-[18px] leading-[60px] font-mulish font-bold text-[#FFFFFF]">Consult today</p>
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
