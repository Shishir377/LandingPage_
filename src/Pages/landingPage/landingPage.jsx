/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Layer3 from "../../Components/Home/Layer3";
import Layer4 from "../../Components/Home/Layer4";

import Screen1 from "../../Components/Home/Layer1";
import Screen2 from "../../Components/Home/Layer2";

export default function LandingPage() {
  return (
    <div className=" flex flex-col items-center">
      <div className="w-8/12   ">
        <Screen1 />
        <Screen2 />
        <Layer3 />
        <Layer4 />
      </div>
      <div className="w-full py-10  relative">
        <Contact />
      </div>
    </div>
  );
}
const Contact = () => {
  return (
    <div className=" w-full h-96 relative  bg-[#4F46BA] flex justify-center">
      <div className=" w-8/12 flex ">
        <div>
          <h4 className=" absolute w-2/5  h-full font-bold text-4xl flex justify-left items-center text-white">
            We are here to help you grow your business
          </h4>
        </div>
        <div>
          <h4 className=" absolute w-2/5  h-full font-bold text-4xl flex justify-left items-center text-white">
            We are here to help you grow your business
          </h4>
        </div>
      </div>
    </div>
  );
};
