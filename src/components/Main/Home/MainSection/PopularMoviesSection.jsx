import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../../assets/logo.png";
import iconCheck from "../../../../assets/check-icon.png";
import { Button } from "flowbite-react";
const PopularMoviesSection = () => {
  return (
    <div>
      <div className="flex justify-center my-auto">
        <div className="container bg-blue-500  p-4 rounded-2xl max-w-xs relative">
          <div className="items-center p-4 ">
            <div className="ribbon-container">
              <div className="ribbon"></div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <img src={logo} alt="logo" style={{ width: "50px" }} />
              <div>
                <h2 className="text-xl font-bold mt-3 whitespace-nowrap text-white ">
                  ELEPHANT MOVIES
                </h2>
                <h3 className="font-bold text-black">12 followers</h3>
              </div>
              <img src={iconCheck} alt="icon-check" style={{ width: "30px" }} />
            </div>
            <div className="grid grid-cols-1 gap-4 ">
              <Button className="rounded-3xl">Followed</Button>
              <div className="max-w-sm border-b-2 p-2 relative "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMoviesSection;
