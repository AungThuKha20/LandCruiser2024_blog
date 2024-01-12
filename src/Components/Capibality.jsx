import React, { useContext } from "react";
import capa from "../images/capability.jpg";
import { HiPlusCircle } from "react-icons/hi2";
import { GeneralContext } from "../Context/GeneralContext";
import { AiFillCloseCircle } from "react-icons/ai";

const Capibality = () => {
  const {
    pOne,
    handlePOne,
    pTwo,
    handlePTwo,
    pThree,
    handlePThree,
    details,
    handleDetails
  } = useContext(GeneralContext);
  return (
    <div className=" w-full ">
      <div className={` ${details && " hidden"} relative mt-10  `}>
        <div className=" ">
          <img
            src={capa}
            className={`${pOne && "opacity-90 "}  ${
              pTwo && "opacity-90 "
            }  w-full h-auto`}
            alt=""
          />
        </div>

        {/* Perfomance one */}
        <div className=" absolute bottom-[35%] left-[16%]">
          <button
            onClick={() => handlePOne()}
            className=" rounded-full md:px-2 px-1 py-1 md:py-2 bg-gray-500 bg-opacity-40 hover:bg-opacity-60"
          >
            {!pOne ? (
              <HiPlusCircle className="   text-white md:text-[40px] text-[30px]" />
            ) : (
              <AiFillCloseCircle className="   text-white md:text-[40px] text-[30px]" />
            )}
          </button>
        </div>
        <div
          className={`  ${
            pOne ? "flex" : "  hidden  "
          }   absolute lg:top-[8%] left-[30%]  lg:flex-col  lg:w-[30vw]    h-auto`}
        >
          <p className=" bg-white rounded-t-md text-black px-2 py-2 text-[22px]">
            Stabilizer Disconnect Mechanism
          </p>
          <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
            Enhance traction wherever you go. While Land Cruiser’s natural state
            provides stability to support your everyday drives, sometimes
            off-road excursions require something different. Activate Land
            Cruiser’s available Stabilizer Disconnect Mechanism (SDM) for
            greater wheel articulation as you navigate uneven trails and rocky
            terrain. *
          </p>
        </div>
        {/* Performance2 */}
        <div className=" absolute bottom-[15%] left-[56%]">
          <button
            onClick={() => handlePTwo()}
            className=" rounded-full md:px-2 px-1 py-1 md:py-2 bg-gray-500 bg-opacity-40 hover:bg-opacity-60"
          >
            {pTwo ? (
              <AiFillCloseCircle className="   text-white md:text-[40px] text-[30px]" />
            ) : (
              <HiPlusCircle className="   text-white md:text-[40px] text-[30px]" />
            )}
          </button>
        </div>
        <div
          className={`  ${
            pTwo ? "flex" : " hidden  "
          }   absolute lg:top-[8%] left-[40%]  lg:flex-col  lg:w-[30vw]    h-auto`}
        >
          <p className=" bg-white rounded-t-md text-black px-2 py-2 text-[22px]">
            Multi-Terrain Select With Crawl Control
          </p>
          <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
            Power is sent to the front and rear axles continuously for a Land
            Cruiser’s Multi-Terrain Select (MTS) helps you navigate varying
            landscapes with improved traction at different speeds. Crawl Control
            (CRAWL) * helps take on difficult terrain by working at lower speeds
            and assisting the driver by controlling acceleration and braking,
            allowing the driver to focus on steering.
          </p>
        </div>
        {/* Perfomance3  */}
        <div className=" absolute bottom-[35%] left-[76%]">
          <button
            onClick={() => handlePThree()}
            className=" rounded-full md:px-2 px-1 py-1 md:py-2 bg-gray-500 bg-opacity-40 hover:bg-opacity-60"
          >
            {pThree ? (
              <AiFillCloseCircle className="   text-white md:text-[40px] text-[30px]" />
            ) : (
              <HiPlusCircle className="   text-white md:text-[40px] text-[30px]" />
            )}
          </button>
        </div>
        <div
          className={`  ${
            pThree ? "flex" : " hidden  "
          }   absolute lg:top-[2%] left-[40%]  lg:flex-col  lg:w-[30vw]    h-auto`}
        >
          <p className=" bg-white rounded-t-md text-black px-2 py-2 text-[22px]">
            Rear and Center Differentials
          </p>
          <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
            Engage the available electronically locking rear and center
            differentials with the press of a button to evenly distribute engine
            power to both rear wheels to provide better traction control while
            maneuvering through difficult terrain.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="hidden w-[250px] justify-around rounded-full h-[50px] mx-auto bg-black bottom-5 lg:flex z-30 absolute">
            <button
              onClick={() => handleDetails()}
              className="w-[150px] border flex text-center items-center border-black hover:border-white rounded-full text-white py-1 px-4 focus:bg-white active:bg-white active:text-black focus:text-black"
            >
              Performance
            </button>

            <button
              className={`${
                !details && " bg-white text-black "
              } w-[120px] border flex text-center items-center border-black hover:border-white rounded-full  py-1 px-4`}
            >
              Capability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capibality;
