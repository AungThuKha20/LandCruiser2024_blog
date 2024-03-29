import React, { useContext } from "react";
import detail from "../images/detail.jpeg";
import { HiPlusCircle } from "react-icons/hi2";
import { GeneralContext } from "../Context/GeneralContext";
import { AiFillCloseCircle } from "react-icons/ai";
import Capibality from "./Capibality";

const Details = () => {
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
    <div className=" h-full mt-[100px]  w-full">
      <div className="  md:mx-[50px] mx-2 ">
        <h1 className=" md:text-[40px] text-[30px] font-serif md:mb-10 mb-4 font-bold">
          Adventure-Ready Comfort
        </h1>
        <p className=" text-[16px] md:text-[20px] font-semibold">
          Whether you are in pursuit of thrilling off-road adventures or prefer
          a relaxed ride, Land Cruiser offers you the freedom to explore in
          comfort. Seating for up to five, available 8-way power-adjustable
          leather-trimmed front seats and an available 12.3-in. Multimedia
          touchscreen prioritize convenience even during off-road excursions.
          Discover a world of effortless operation right at your fingertips.
        </p>
        {!details && <Capibality />}
        <div className={` ${!details && " hidden"} relative mt-10`}>
          <div className="   ">
            <img
              src={detail}
              className={`${pOne && "opacity-90 "}  ${pTwo && "opacity-90 "} `}
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
            }   lg:absolute lg:top-[8%] left-[30%]  lg:flex-col  lg:w-[30vw]    h-auto`}
          >
            <div className=" animate__animated animate__fadeIn lg:flex flex-col hidden">
              <p className=" bg-white rounded-t-md text-black px-2 py-2 text-[22px]">
                2.4L Cylinder i-Force max Powertrain
              </p>
              <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
                Land Cruiser’s new powertrain combines hybrid tech with the
                power of a turbo 4-cylinder engine. This hybrid engine generates
                an electrifying 326 hp and 465 lb.-ft. of torque to bring you
                the confidence to cover even more ground.
              </p>
            </div>
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
            <div className=" animate__animated animate__fadeIn lg:flex flex-col hidden">
              <p className=" bg-white rounded-t-md text-black px-2 py-2 text-[22px]">
                Full-Time 4WD
              </p>
              <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
                Power is sent to the front and rear axles continuously for a
                confident drive. With the push of a button, you can lock the
                center differential to give Land Cruiser even more off-roading
                capabilities.
              </p>
            </div>
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
            <div className=" animate__animated animate__fadeIn lg:flex flex-col hidden">
              <p className=" bg-white rounded-t-md text-black px-2 py-2 text-[22px]">
                6000-Lb. Towing Capacity
              </p>
              <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
                Explore a range of possibilities. With an impressive 6000-lb.
                towing capacity, * new adventures are just a hitch away.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className=" w-[250px] justify-around rounded-full h-[30px] md:h-[50px] mx-auto bg-black bottom-0 md:bottom-5 flex z-30 absolute">
              <button
                className={` ${
                  details && "bg-white text-black"
                } w-[150px] border flex text-center items-center border-black hover:border-white rounded-full  py-1 px-4 focus:bg-white `}
              >
                Performance
              </button>

              <button
                onClick={() => handleDetails()}
                className="w-[120px] border flex text-center items-center border-black hover:border-white rounded-full text-white py-1 px-4 focus:bg-white focus:text-black"
              >
                Capability
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${!details && " hidden"} mx-2`}>
        {/* md device pOne*/}

        <div
          className={`  ${
            pOne ? "flex" : "  hidden  "
          }       lg:hidden   w-full  `}
        >
          <div className=" animate__animated animate__fadeIn lg:hidden shadow-md shadow-gray-400 mt-2">
            <p className=" font-semibold bg-white rounded-t-md text-black px-2 py-2 text-[18px]">
              2.4L Cylinder i-Force max Powertrain
            </p>
            <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
              Land Cruiser’s new powertrain combines hybrid tech with the power
              of a turbo 4-cylinder engine. This hybrid engine generates an
              electrifying 326 hp and 465 lb.-ft. of torque to bring you the
              confidence to cover even more ground.
            </p>
          </div>
        </div>
        {/* md device pTwo*/}
        <div className={`  ${pTwo ? "flex" : "  hidden  "}        w-full  `}>
          <div className=" animate__animated animate__fadeIn lg:hidden shadow-md shadow-gray-400 mt-2">
            <p className=" font-semibold bg-white rounded-t-md text-black px-2 py-2 text-[18px]">
              Multi-Terrain Select With Crawl Control
            </p>
            <p className={` rounded-b-md bg-black px-2 py-2 text-white`}>
              Power is sent to the front and rear axles continuously for a Land
              Cruiser’s Multi-Terrain Select (MTS) helps you navigate varying
              landscapes with improved traction at different speeds. Crawl
              Control (CRAWL) * helps take on difficult terrain by working at
              lower speeds and assisting the driver by controlling acceleration
              and braking, allowing the driver to focus on steering.
            </p>
          </div>
        </div>
        {/* md device pThree*/}
        <div
          className={`  ${
            pThree ? "flex" : "  hidden  "
          }        w-full  h-auto`}
        >
          <div className="animate__animated animate__fadeIn lg:hidden shadow-md shadow-gray-400 mt-2">
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

export default Details;
