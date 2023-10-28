import React from "react";
import { ServicesJson } from "../../constants";

const OurServices = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mt-10">
        <p className="font-mulish font-bold text-[36px] leading-[56px] text-[#000000]">
          Our services
        </p>
        <div className="h-[2px] w-[56px]  rounded-[5px] bg-[#000000] mt-[40px]"></div>
        <p className="font-mulish font-light text-[18px] leading-[30px] text-[#7D7987] text-center mt-[40px]">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-[100px] justify-evenly mt-10">
        {ServicesJson.map((item) => {
          const { height, width } = item;

          const dynamicStyles = {
            width,
            height,
          };
          return (
            <div className="shadow-md bg-white w-full max-w-[280px]  h-[300px] p-[30px] rounded-[20px]">
              <img
                src={item.image}
                alt="search"
                className="w-full"
                style={dynamicStyles}
              />
              <p className="font-mulish font-bold text-[24px] leading-[56px]">
                {item.title}
              </p>
              <p className="font-mulish font-light text-[16px] leading-[28px]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center max-w-[200px] max-h-[60px] border border-[#458FF6] rounded-[33px] mt-20">
        <p className="text-[18px] leading-[60px] font-mulish font-bold text-[#458FF6]">
          Learn more
        </p>
      </div>
    </div>
  );
};

export default OurServices;
