import React, { useContext } from "react";
import capa from "../images/capability.jpg";
import { HiPlusCircle } from "react-icons/hi2";
import { GeneralContext } from "../Context/GeneralContext";
import { AiFillCloseCircle } from "react-icons/ai";

const Capibality = () => {
  const {
    cOne,
    handleCOne,
    cTwo,
    handleCTwo,
    cThree,
    handleCThree,
    details,
    handleDetails
  } = useContext(GeneralContext);
  return (
    <div className=" w-full ">
      <div className={` ${details && " hidden"} relative mt-10  `}>
        <div className=" ">
          <img
            src={capa}
            className={`${cOne && "opacity-90 "}  ${
              cTwo && "opacity-90 "
            }  w-full h-auto`}
            alt=""
          />
        </div>

        {/* Perfomance one */}
        <div className=" absolute bottom-[35%] left-[16%]">
          <button
            onClick={() => handleCOne()}
            className=" rounded-full md:px-2 px-1 py-1 md:py-2 bg-gray-500 bg-opacity-40 hover:bg-opacity-60"
          >
            {!cOne ? (
              <HiPlusCircle className="   text-white md:text-[40px] text-[30px]" />
            ) : (
              <AiFillCloseCircle className="   text-white md:text-[40px] text-[30px]" />
            )}
          </button>
        </div>
        <div
          className={`  ${
            cOne ? "flex" : "  hidden  "
          }    absolute lg:top-[8%] left-[30%]   lg:flex-col  lg:w-[40vw]    h-auto`}
        >
          <div className="  animate__animated animate__fadeIn hidden lg:flex flex-col">
            <p className=" bg-white rounded-t-md text-black px-2 py-2 text-[22px]">
              Stabilizer Disconnect Mechanism
            </p>
            <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
              Enhance traction wherever you go. While Land Cruiser’s natural
              state provides stability to support your everyday drives,
              sometimes off-road excursions require something different.
              Activate Land Cruiser’s available Stabilizer Disconnect Mechanism
              (SDM) for greater wheel articulation as you navigate uneven trails
              and rocky terrain. *
            </p>
          </div>
        </div>

        {/* Performance2 */}
        <div className=" absolute bottom-[15%] left-[56%]">
          <button
            onClick={() => handleCTwo()}
            className=" rounded-full md:px-2 px-1 py-1 md:py-2 bg-gray-500 bg-opacity-40 hover:bg-opacity-60"
          >
            {cTwo ? (
              <AiFillCloseCircle className="   text-white md:text-[40px] text-[30px]" />
            ) : (
              <HiPlusCircle className="   text-white md:text-[40px] text-[30px]" />
            )}
          </button>
        </div>
        <div
          className={`  ${
            cTwo ? "flex" : "  hidden  "
          }    absolute lg:top-[8%] left-[30%]   lg:flex-col  lg:w-[50vw]    h-auto`}
        >
          <div className="  animate__animated animate__fadeIn hidden lg:flex flex-col">
            <p className=" bg-white rounded-t-md text-black px-2 py-2 text-[22px]">
              Multi-Terrain Select With Crawl Control
            </p>
            <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
              Land Cruiser’s Multi-Terrain Select (MTS) helps you navigate
              varying landscapes with improved traction at different speeds.
              Crawl Control (CRAWL) * helps take on difficult terrain by working
              at lower speeds and assisting the driver by controlling
              acceleration and braking, allowing the driver to focus on
              steering.
            </p>
          </div>
        </div>
        {/* Perfomance3  */}
        <div className=" absolute bottom-[42%] left-[84%]">
          <button
            onClick={() => handleCThree()}
            className=" rounded-full md:px-2 px-1 py-1 md:py-2 bg-gray-500 bg-opacity-40 hover:bg-opacity-60"
          >
            {cThree ? (
              <AiFillCloseCircle className="   text-white md:text-[40px] text-[30px]" />
            ) : (
              <HiPlusCircle className="   text-white md:text-[40px] text-[30px]" />
            )}
          </button>
        </div>
        <div
          className={`  ${
            cThree ? "flex" : "  hidden  "
          }    absolute lg:top-[8%] left-[30%]   lg:flex-col  lg:w-[50vw]    h-auto`}
        >
          <div className="  animate__animated animate__fadeIn hidden lg:flex flex-col">
            <p className=" bg-white rounded-t-md text-black px-2 py-2 text-[22px]">
              Rear and Center Differentials
            </p>
            <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
              Engage the available electronically locking rear and center
              differentials with the press of a button to evenly distribute
              engine power to both rear wheels to provide better traction
              control while maneuvering through difficult terrain.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className=" w-[250px] justify-around rounded-full md:rounded-full h-[30px] md:h-[50px] mx-auto bg-black bottom-0 md:bottom-5 flex z-30 absolute">
            <button
              onClick={() => handleDetails()}
              className="w-[50vw] hover:border  bg-black flex text-center rounded-full items-center  hover:border-white   md:rounded-full text-white py-1 px-4 focus:bg-white active:bg-white active:text-black focus:text-black"
            >
              Performance
            </button>

            <button
              className={`${
                !details && " bg-white text-black "
              } w-[50vw]  flex text-center items-center  hover:border-white rounded-full  md:rounded-full  py-1 px-4`}
            >
              Capability
            </button>
          </div>
        </div>
      </div>

      <div className=" ">
        {/* md device cOne*/}
        <div className={`  ${cOne ? "flex" : "  hidden  "}       w-full  `}>
          <div className="  animate__animated animate__fadeIn lg:hidden shadow-md shadow-gray-400 mt-2">
            <p className=" font-semibold bg-white w-full  rounded-t-md text-black px-2 py-2 text-[18px]">
              Stabilizer Disconnect Mechanism
            </p>
            <p className={` w-full rounded-b-md bg-black px-2 py-2 text-white`}>
              Enhance traction wherever you go. While Land Cruiser’s natural
              state provides stability to support your everyday drives,
              sometimes off-road excursions require something different.
              Activate Land Cruiser’s available Stabilizer Disconnect Mechanism
              (SDM) for greater wheel articulation as you navigate uneven trails
              and rocky terrain. *
            </p>
          </div>
        </div>
        {/* md device cTwo*/}
        <div
          className={`  ${cTwo ? "flex" : "  hidden  "}         w-full  h-auto`}
        >
          <div className=" animate__animated animate__fadeIn lg:hidden shadow-md shadow-gray-400 mt-2">
            <p className=" font-semibold bg-white rounded-t-md text-black px-2 py-2 text-[18px]">
              Multi-Terrain Select With Crawl Control
            </p>
            <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
              Land Cruiser’s Multi-Terrain Select (MTS) helps you navigate
              varying landscapes with improved traction at different speeds.
              Crawl Control (CRAWL) * helps take on difficult terrain by working
              at lower speeds and assisting the driver by controlling
              acceleration and braking, allowing the driver to focus on
              steering.
            </p>
          </div>
        </div>
        {/* md device cThree*/}
        <div className={`  ${cThree ? "flex" : "  hidden  "}           h-auto`}>
          <div className=" animate__animated animate__fadeIn lg:hidden shadow-md shadow-gray-400 mt-2">
            <p className=" font-semibold bg-white rounded-t-md text-black px-2 py-2 text-[18px]">
              Rear and Center Differentials
            </p>
            <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
              Engage the available electronically locking rear and center
              differentials with the press of a button to evenly distribute
              engine power to both rear wheels to provide better traction
              control while maneuvering through difficult terrain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capibality;
