import React from "react";
import home from "../images/home2.gif";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className=" flex">
      <div className=" w-full   ">
        <img
          src={home}
          className=" relative md:w-full w-screen h-[90vh] md:h-[95vh] object-cover md:object-center object-left     "
          alt=""
        />
        <div className=" text-white text-center h-[82vh] md:h-[86vh] bg-black bg-opacity-55 w-full md:mt-16 mt-12 absolute top-10">
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
            <button className="    group px-8 py-2 rounded-full w-[250px] text-[16px] md:text-[20px] mb-16 font-bold border-gray-700 border-[2px] bg-white text-black">
              <span className=" flex items-center transition-all duration-400 justify-center me-0 group-hover:me-4">
                {" "}
                <span> Explore More</span>
                <MdOutlineKeyboardArrowRight
                  size={28}
                  className=" hidden group-hover:flex  "
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
