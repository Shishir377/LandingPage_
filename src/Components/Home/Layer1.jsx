/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { BsArrowDownRight } from "react-icons/bs";

export default function Screen1() {
  return (
    <div >
      <LeftItem />
      <TopElement />
      <CenterContent />
    </div>
  );
}

const CenterContent = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" flex  flex-col gap-8 items-center w-3/4">
        <h1 className=" font-bold text-5xl text-center">
          Managing freelance payments has never been easier
        </h1>
        <div className="flex flex-col  item     w-1/2">
          <h4 className="font-medium text-center text-sm text-slate-600 ">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </h4>
          <div class="flex gap-5 mt-6 justify-center">
            <button
              type="button"
              class="text-white bg-[#4F47BB] hover:bg-blue-800 font-normal  rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            >
              Get Started
            </button>
            <button
              type="button"
              class=" text-[#4F47BB]  bg-[#F6F8FB] font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeftItem = () => {
  return (
    <div className="absolute left-28  w-48   border-dashed border-2 border-gray-400 border-l-2  border-b-2 border-r-0 border-t-0  transform top-2/4 h-60 translate-x-1/2 -translate-y-1/2">
      <div className="relative flex  top-1/2  -translate-x-8 ">
        <div className="absolute w-16 h-16  shadow-md rounded-lg   bg-white  p-3  left-0 flex ">
          <img src="https://www.citypng.com/public/uploads/preview/upwork-round-logo-icon-png-116625559716y405kvdce.png"></img>
        </div>
      </div>
      <div className="relative w-full ">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 ">
          <img
            className="w-16 h-16 shadow-sm p-1 rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoifiEziNAmS8VzDuju7MbtawQCPO2-O7Fg&usqp=CAU"
          ></img>
        </div>
      </div>
      <div className="relative h-full">
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 ">
          <img
            className="w-16 h-16 shadow-sm p-1 rounded-2xl "
            src="data:image/jpeg;base64,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"
          ></img>
        </div>
      </div>
    </div>
  );
};
const TopElement = () => {
  return (
    <div className="absolute left-1/2 top-32 -translate-x-3/4 translate-y-1/2">
      <div className=" flex">
        <div className="w-20 h-11 rounded-sm border-dashed border-gray-400 border-2 border-l-0 border-t-0 relative ">
          <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
            <img
              className="w-12 h-12 shadow-sm p-1 rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDs61ZSGs6P0QNWeiCofqL3IRnDu6aTYjdjQ&usqp=CAU"
            ></img>
          </div>
        </div>
        <div className=" border-dashed border-gray-400 rounded-sm border-2 w-20 h-11 border-l-0 border-b-0  border-r-0 relative">
          <div className="absolute  right-0 top-0 transform translate-x-1/2 -translate-y-1/2">
            <img
              className=" w-14 h-14  rounded-2xl shadow-md "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUp3UHlSN3P2JdeFM9Vt1UCYZye8_cNOg7_w&usqp=CAU"
            ></img>
            <div className=" w-52  h-20 absolute top-0  transform translate-x-1/4   -translate-y-3 shadow rounded-xl p-3 flex">
              <div className="flex  justify-center items-center">
                <div className=" bg-slate-100 p-2 rounded-md">
                  <BsArrowDownRight
                    style={{ color: "lightgreen", strokeWidth: "2" }}
                  />
                </div>

                <div>
                  <p className="font-bold"> $500</p>
                  <p>Received</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
