import React from "react";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import useEmblaCarousel from "embla-carousel-react";

const About = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className=" w-full h-full">
      <div className=" flex flex-col w-full items-center mx-2 justify-center  mt-[50px]  md:mt-[100px]">
        <h1 className=" md:text-[40px] text-[25px] font-serif font-bold">
          Peak of Every Adventure
        </h1>
        <p className=" font-semibold md:w-[700px] text-center md:my-10 my-6 md:text-[20px] mx-4 md:mx-0  ">
          Introducing the all-new 2024 Land Cruiser, with no fuss, no muss—just
          the way you remember it. With prices starting in the mid-$50,000
          range, * Land Cruiser brings back the thrill and excitement of
          exploring unfamiliar terrain with its remarkable capabilities and
          legendary reliability, while paying homage to its historic roots of
          over 65 years. Whether you're conquering rugged trails or cruising
          through city streets, Land Cruiser brings dynamic energy to any
          adventure.
        </p>
        <button className=" px-8 py-2 rounded-full text-[16px] md:text-[20px] mb-8 font-bold border-gray-700 border-[2px] bg-black text-white">
          Check Out More Details
        </button>
      </div>
      <div className=" bg-gray-100">
        <div className=" mx-4   hidden lg:flex items-center justify-center gap-3  py-4 ">
          <img src={about1} className=" w-[50vw] rounded-md  " alt="" />
          <img src={about2} className=" w-[45vw] rounded-md  h-auto" alt="" />
        </div>
        <div className="embla lg:hidden visible mx-4 py-4" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <img src={about1} alt="" />
            </div>
            <div className="embla__slide">
              <img src={about2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
