import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../../assets/logo.png";
import iconCheck from "../../../../assets/check-icon.png";
import avengersPoster from "../../../../assets/avenger-poster.png";
import { Button } from "flowbite-react";
const PopularMoviesSection = () => {
  return (
    <div>
      <div className="flex w-full mx-auto justify-end my-auto dark:bg-black  ">
        <div className="container bg-blue-500  p-4 rounded-2xl max-w-xs relative">
          <div className="items-center p-2 ">
            <div className="ribbon-container">
              <div className="ribbon"></div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <img src={logo} alt="logo" style={{ width: "50px" }} />
              <div>
                <h2 className="text-xl font-bold  whitespace-nowrap text-white ">
                  ELEPHANT MOVIES
                </h2>
              </div>
              <img src={iconCheck} alt="icon-check" style={{ width: "30px" }} />
            </div>
            <div className="grid grid-cols-1 gap-4  ">
              {/*  <Button className="rounded-3xl flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="mr-24" />
                Followed
              </Button> */}
              <div className=" border-b-2 p-2  "></div>
              <h2 className="font-semibold text-white">Most popular</h2>
              <div className="flex ">
                <div className="w-32 h-32">
                  <img
                    src={avengersPoster}
                    alt="logo"
                    style={{ width: "80px" }}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col ml-2  ">
                  <h2 className="text-white font-semibold">
                    Avengers Infinity War
                  </h2>
                  <div className="flex gap-2">
                    <h2 className="text-white">Action</h2>
                    <h2 className="text-white">2023</h2>
                  </div>
                  <div className="flex items-center gap-4 mt-11">
                    <FontAwesomeIcon icon={faStar} color="yellow" />
                    <h3 className="text-white font-semibold mt-1">8.2</h3>
                    <Button className="rounded-3xl h-7 bg-emerald-600">
                      Completed
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 ">
              {/*  <Button className="rounded-3xl flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="mr-24" />
                Followed
              </Button> */}
              <div className=" border-b-2 p-2  "></div>
              <h2 className="font-semibold text-white">Most popular</h2>
              <div className="flex ">
                <div className="w-32 h-32">
                  <img
                    src={avengersPoster}
                    alt="logo"
                    style={{ width: "80px" }}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col ml-2  ">
                  <h2 className="text-white font-semibold">
                    Avengers Infinity War
                  </h2>
                  <div className="flex gap-2">
                    <h2 className="text-white">Action</h2>
                    <h2 className="text-white">2023</h2>
                  </div>
                  <div className="flex items-center gap-4 mt-11">
                    <FontAwesomeIcon icon={faStar} color="yellow" />
                    <h3 className="text-white font-semibold  mt-1">8.2</h3>
                    <Button className="rounded-3xl h-7 bg-emerald-600">
                      Completed
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 ">
              {/*  <Button className="rounded-3xl flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="mr-24" />
                Followed
              </Button> */}
              <div className=" border-b-2 p-2  "></div>
              <h2 className="font-semibold text-white">Most popular</h2>
              <div className="flex ">
                <div className="w-32 h-32">
                  <img
                    src={avengersPoster}
                    alt="logo"
                    style={{ width: "80px" }}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col ml-2  ">
                  <h2 className="text-white font-semibold">
                    Avengers Infinity War
                  </h2>
                  <div className="flex gap-2">
                    <h2 className="text-white">Action</h2>
                    <h2 className="text-white">2023</h2>
                  </div>
                  <div className="flex items-center gap-4 mt-11">
                    <FontAwesomeIcon icon={faStar} color="yellow" />
                    <h3 className="text-white font-semibold  mt-1">8.2</h3>
                    <Button className="rounded-3xl h-7 bg-emerald-600">
                      Completed
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 ">
              {/*  <Button className="rounded-3xl flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="mr-24" />
                Followed
              </Button> */}
              <div className=" border-b-2 p-2  "></div>
              <h2 className="font-semibold text-white">Most popular</h2>
              <div className="flex ">
                <div className="w-32 h-32">
                  <img
                    src={avengersPoster}
                    alt="logo"
                    style={{ width: "80px" }}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col ml-2  ">
                  <h2 className="text-white font-semibold">
                    Avengers Infinity War
                  </h2>
                  <div className="flex gap-2">
                    <h2 className="text-white">Action</h2>
                    <h2 className="text-white">2023</h2>
                  </div>
                  <div className="flex items-center gap-4 mt-11">
                    <FontAwesomeIcon icon={faStar} color="yellow" />
                    <h3 className="text-white font-semibold  mt-1">8.2</h3>
                    <Button className="rounded-3xl h-7 bg-emerald-600">
                      Completed
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMoviesSection;
