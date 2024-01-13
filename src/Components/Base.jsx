import React from "react";
import toyota from "../images/toyota.png";

const Base = () => {
  return (
    <div className=" flex  flex-col mt-10 mx-4">
      <div className=" text-center">
        <div className=" flex justify-center">
          <img src={toyota} className=" w-[100px] md:w-[200px]" alt="" />
        </div>
        <p className=" text-[16px] md:text-[20px] font-semibold">
          Proud to research About Land Cruiser
        </p>
      </div>
      <div className=" mt-3 text-center font-semibold text-[16px] md:text-[18px] text-gray-800">
        <p>
          ©2024 Toyota Motor Sales, U.S.A., Inc. All information applies to U.S.
          vehicles only.
        </p>
        <p>
          The use of Olympic Marks, Terminology and Imagery is authorized by the
          U.S. Olympic & Paralympic Committee pursuant to Title 36 U.S. Code
          Section 220506.
        </p>
      </div>
      <div className=" mt-2 text-center font-bold text-[14px] md:text-[16px]">
        <span>
          <a className=" mx-4" href="">
            Privacy Notice
          </a>
          |
          <a className=" mx-4" href="">
            Legal Terms
          </a>
          |
          <a className=" mx-4" href="">
            Site Map
          </a>
        </span>
      </div>
    </div>
  );
};

export default Base;
