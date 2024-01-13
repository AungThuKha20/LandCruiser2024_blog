import React, { useContext } from "react";
import logo from "../images/logo.jpg";
import { GeneralContext } from "../Context/GeneralContext";

import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const { menu, handleMenu } = useContext(GeneralContext);
  const Links = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "Comparisons"
    },
    {
      id: 3,
      name: "Contact Us"
    },
    {
      id: 4,
      name: "Global Website"
    }
  ];
  return (
    <div>
      <div className=" mx-4 py-2 flex justify-between items-center">
        <div>
          <img src={logo} className=" md:h-[50px] h-[40px]   " alt="" />
        </div>
        <div className=" ">
          <div className=" md:flex hidden gap-10 me-6">
            {Links.map((el) => {
              return (
                <h1
                  key={el.id}
                  className=" text-[20px] font-bold hover:scale-110 transition-all duratio cursor-pointer "
                >
                  {el.name}
                </h1>
              );
            })}
          </div>
          <div
            className=" me-2 flex items-center
           md:hidden visible"
          >
            <button className=" hover:bg-gray-100" onClick={() => handleMenu()}>
              {menu ? (
                <IoClose size={30} className="py-1 px-1 border border-black" />
              ) : (
                <MdMenu className=" py-1 px-1 border border-black" size={30} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "right-0" : " -right-full"
        } fixed z-30 top-15 md:hidden transition-all duration-200 shadow-md shadow-black  w-[80vw] h-[100vh]    bg-white`}
      >
        <div className="flex flex-col items-center mt-10 ">
          {Links.map((el) => {
            return (
              <h1
                key={el.id}
                className=" mt-10 font-bold hover:scale-110 transition-all duratio cursor-pointer "
              >
                {el.name}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
