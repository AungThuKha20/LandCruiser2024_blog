import React, { useContext } from "react";
import logo from "../images/logo.jpg";
import { GeneralContext } from "../Context/GeneralContext";
// import { CiMenuBurger } from "react-icons/ci";

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
      <div className=" mx-4 flex justify-between items-center">
        <div>
          <img src={logo} className=" h-[50px]   " alt="" />
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
          <div className=" md:hidden visible">
            <button onClick={() => handleMenu()}>Menu</button>
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "right-0" : " -right-full"
        } fixed z-30 top-0 md:hidden transition-all duration-200 shadow-md shadow-black  w-[70vw] h-[100vh]    bg-white`}
      >
        <div className=" flex justify-end mx-4 my-2">
          <button
            onClick={() => handleMenu()}
            className="  px-4 py-2 hover:bg-gray-300 rounded-full border-[1px]"
          >
            close
          </button>
        </div>
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
