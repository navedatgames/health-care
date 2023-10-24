import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center gap-3 w-1/6">
        <div className="border border-solid border-white rounded-full h-12 w-12 flex justify-center items-center bg-[#458FF6]">
          <p className=" font-mulish font-bold text-[26px] text-white">T</p>
        </div>
        <p className="font-mulish font-bold text-[#233348] text-[24px] leading-7">
          Trafalgar
        </p>
      </div>
      <div className=" flex w-2/5 justify-between items-center">
        <p className=" font-mulish font-bold text-[18px] leading-[22.59px]">Home</p>
        <p className="font-mulish text-[18px] font-normal">Find a doctor</p>
        <p className="font-mulish text-[18px] font-normal">Apps</p>
        <p className="font-mulish text-[18px] font-normal">Testimonials</p>
        <p className="font-mulish text-[18px] font-normal">About us</p>
      </div>
    </div>
  );
};

export default Header;
