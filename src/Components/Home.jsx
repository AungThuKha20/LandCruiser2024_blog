import React from "react";
import home from "../images/home2.gif";

const Home = () => {
  return (
    <div className=" flex">
      <div className=" w-full   ">
        <img
          src={home}
          className=" relative md:w-full w-screen h-[90vh] md:h-[95vh] object-cover md:object-center object-top     "
          alt=""
        />
        <div className=" text-white text-center h-[88vh] md:h-[91vh] bg-black bg-opacity-55 w-full md:mt-8 mt-4 absolute top-10">
          <div className=" text-[25px] md:text-[30px] font-serif font-bold">
            <p className=" text-[15px] font-sans font-semibold md:text-[20px]">
              The All New{" "}
            </p>
            <p>Land Cruiser 2024</p>
          </div>
          <div className=" absolute bottom-0 text-center w-full">
            <p className="  animate__animated animate__fadeIn animate__delay-2s mb-5 font-serif font-bold  md:text-[34px]  text-[24px]">
              <span className=" opacity-70">Life made extraordinary</span>
            </p>
            <button className=" px-8 py-2 rounded-full text-[16px] md:text-[20px] mb-8 font-bold border-gray-700 border-[2px] bg-white text-black">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
