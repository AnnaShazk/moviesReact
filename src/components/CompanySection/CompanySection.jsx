import React from "react";
import disney from "../../assets/Images/disney.png";
import marvel from "../../assets/Images/marvel.png";
import nationalG from "../../assets/Images/nationalG.png";
import pixar from "../../assets/Images/pixar.png";
import starwar from "../../assets/Images/starwar.png";

import disneyBl from "../../assets/Images/disneyBl.png";
import nationalGBl from "../../assets/Images/nationalGBl.png";
import pixarBl from "../../assets/Images/pixarBl.png";
import starwarBl from "../../assets/Images/starwarBl.png";

import starwarV from "../../assets/Videos/star-wars.mp4";
import disneyV from "../../assets/Videos/disney.mp4";
import marvelV from "../../assets/Videos/marvel.mp4";
import nationalGeographicV from "../../assets/Videos/national-geographic.mp4";
import pixarV from "../../assets/Videos/pixar.mp4";

function CompanySection(darkMode) {
  console.log(darkMode.darkMod);
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];

  const productionHouseListBlackBackground = [
    {
      id: 3,
      image: disneyBl,
      video: disneyV,
    },
    {
      id: 4,
      image: pixarBl,
      video: pixarV,
    },
    {
      id: 5,
      image: marvel,
      video: marvelV,
    },
    {
      id: 6,
      image: starwarBl,
      video: starwarV,
    },
    {
      id: 7,
      image: nationalGBl,
      video: nationalGeographicV,
    },
  ];

  return (
    <>
      <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 dark:bg-black">
        {(darkMode.darkMod == false
          ? productionHouseListBlackBackground
          : productionHouseList
        ).map((item) => (
          <div
            className="border-[2px] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl w-full object-contain h-full  opacity-100 2xl:w-auto 2xl:h-auto"
            key={item.id}
          >
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              muted
              className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50"
            />
            <img
              src={item.image}
              className="w-full object-contain h-full z-[1] opacity-100 2xl:w-auto 2xl:h-auto"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CompanySection;
