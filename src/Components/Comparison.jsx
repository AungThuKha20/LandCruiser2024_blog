import React from "react";

import { Carousel } from "@mantine/carousel";
import { Rating } from "@mantine/core";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from "react-icons/io";

import c_land from "../images/cland.jpg";
import jeep from "../images/jeep.jpg";
import jeepWrangler from "../images/jeep wrangler.jpg";
import landRover from "../images/landRover.jpg";
import Runner from "../images/4runner.jpg";
import lx600 from "../images/llx600.webp";

const Comparison = () => {
  const compares = [
    {
      id: 1,
      name: "2023 Jeep Grand Cherokee",
      img: jeep,
      QuickSpecs:
        "The 2023 Jeep Grand Cherokee is a balanced, appealing choice but the myriad engine and trim levels complicate the process.",
      MSRPFrom: "$40,035",
      Engine: "Regular Unleaded V-6",
      UserRating: 3.5
    },
    {
      id: 2,
      name: "2023 Jeep Wrangler",
      img: jeepWrangler,
      QuickSpecs:
        "The 2023 Jeep Wrangler offers something for everyone so inclined to explore its astounding off-road capability.",
      MSRPFrom: "$31,195",
      Engine: "Regular Unleaded V-6",
      UserRating: 4
    },
    {
      id: 3,
      name: "2023 Land Rover Defender",
      img: landRover,
      QuickSpecs:
        "The 2023 Land Rover Defender masterfully blends off-road ability with on-road prowess, all while looking the part in just about any situation.",
      MSRPFrom: "$53,500",
      Engine: "Intercooled Turbo Premium Unleaded I-4",
      UserRating: 4
    },
    {
      id: 4,
      name: "2023 Toyota 4Runner",
      img: Runner,
      QuickSpecs:
        "As a backwoods exploration companion, the 2023 Toyota 4Runner excels. For any other use, shop its competition.",
      MSRPFrom: "$40,155",
      Engine: "Regular Unleaded V-6",
      UserRating: 4
    },
    {
      id: 5,
      name: "2023 Lexus LX 600",
      img: lx600,
      QuickSpecs:
        "The 2023 Lexus LX 600 masterfully blends off-road ability with on-road prowess, all while looking the part in just about any situation.",
      MSRPFrom: "$89,610",
      Engine: "Regular Unleaded V-6",
      UserRating: 4.5
    }
  ];
  return (
    <div className="  mt-[30px] md:mt-[50px] font-bold md:mx-10  h-full w-full">
      <div>
        <h1 className=" md:text-[30px] ms-2 md:text-center mx-20 md:mb-10 mb-5 text-[20px]  ">
          Compare Land Cruiser with Similar Cars
        </h1>
      </div>
      <div className=" w-full flex justify-center gap-1   ">
        <div className=" md:w-[35vw] w-[45vw]">
          <div className=" ms-2  shadow-lg shadow-black ">
            <img
              src={c_land}
              className=" h-[120px] w-full md:h-[300px] object-cover "
              alt=""
            />
            <p className=" px-2 bg-gray-200 py-1 text-[22px]">Name</p>
            <p className=" px-2 md:h-auto h-[100px] text-[18px] md:text-[22px] py-2">
              Land Cruiser 2024
            </p>
            <p className=" px-2 bg-gray-200 py-4">Quick Specs</p>
            <p className=" px-2 text-[18px] md:text-[18px] md:h-[150px] h-[350px] py-2">
              The 2024 Toyota Land Cruiser marks the return of an icon and
              throws the nameplate back with retro flair.
            </p>
            <p className=" px-2 bg-gray-200 py-4">MSRP From</p>
            <p className=" px-2 text-[18px] md:h-auto h-[100px] md:text-[18px] py-2">
              mid-$50,000 range
            </p>
            <p className=" px-2 bg-gray-200 py-4">Engine</p>
            <p className=" px-2 text-[18px] md:text-[18px] md:h-[80px] h-[120px] py-2">
              2.4-liter four-cylinder engine mated to a hybrid system
            </p>
            <p className=" px-2 bg-gray-200 py-4">User Rating</p>
            <p className=" px-2 text-[18px]  md:text-[18px] py-2">
              <Rating value={4.5} fractions={2} readOnly />
            </p>
          </div>
        </div>
        <div className=" md:w-[45vw] w-[55vw] shadow-md shadow-gray-700  md:me-[100px] ">
          <Carousel
            slideSize="70%"
            align="start"
            slideGap="xs"
            loop
            controlsOffset="xs"
            nextControlIcon={
              <IoIosArrowDroprightCircle
                className="    md:flex hidden  md:mt-[-350px]  "
                size={40}
              />
            }
            previousControlIcon={
              <IoIosArrowDropleftCircle
                className=" md:flex hidden  md:mt-[-350px]   "
                size={40}
              />
            }
          >
            {compares.map((el) => {
              return (
                <Carousel.Slide className=" shadow-md  w-[300px]" key={el.id}>
                  <div>
                    <img
                      src={el.img}
                      className=" h-[120px] w-full   md:h-[300px] object-cover"
                      alt=""
                    />
                    <p className=" px-2 bg-gray-200 py-1">
                      <span className=" opacity-0 text-[22px]">Name</span>
                    </p>
                    <p className=" px-2 text-[18px] md:text-[22px] md:h-auto h-[100px]  py-2">
                      {el.name}
                    </p>
                    <p className=" px-2 bg-gray-200 py-4">
                      <span className=" opacity-0">Quick Specs</span>
                    </p>
                    <p className=" px-2 md:h-[150px] h-[350px] text-[18px] md:text-[18px] py-2">
                      {el.QuickSpecs}
                    </p>
                    <p className=" px-2 bg-gray-200 py-4">
                      <span className=" opacity-0">MSRP From</span>
                    </p>
                    <p className=" px-2 text-[18px] md:h-auto h-[100px] md:text-[18px] py-2">
                      {el.MSRPFrom}
                    </p>
                    <p className=" px-2 bg-gray-200 py-4">
                      <span className=" opacity-0">Engine</span>
                    </p>
                    <p className="  md:h-[80px] h-[120px] px-2 text-[18px] md:text-[18px] py-2">
                      {el.Engine}
                    </p>
                    <p className=" px-2 bg-gray-200 py-4">
                      <span className=" opacity-0">User Rating</span>
                    </p>
                    <p className=" px-2 text-[18px] md:text-[18px] py-2">
                      <Rating value={el.UserRating} fractions={2} readOnly />
                    </p>
                  </div>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
