import React from "react";
import Digital from "../../Assets/images/DigitalService.png";
import Chip from "../../Assets/images/chip.svg";
import support from "../../Assets/images/support.svg";
import Teams from "../../Assets/images/Teams.svg";
import Payment2 from "../../Assets/images/payment2.svg";
import background from "../../Assets/images/background.svg";
import { Cards } from "./Layer2";
export default function Layer4() {
  return (
    <>
      <div className="flex  h-full items-center justify-center my-24   ">
        <div className="w-1/2  flex  ">
          <div className="flex flex-col  ">
            <div className="flex w-3/4   flex-col gap-2 ">
              <h3 className="text-base text-[#3734A9]"> WHY CHOOSE US</h3>
              <h1 className=" font-bold text-4xl ">
                Specialist aiding clients on financial challenges
              </h1>
              <p className="font-medium  text-justify text-sm text-[#847FA0] ">
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex justify-center items-center gap-4">
                  <div className="bg-[#FF7F5C] rounded-full p-4">
                    <img className=" object-contain w-12 " src={Chip}></img>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-md">
                      {" "}
                      First Working Process
                    </h4>
                    <p className="font-medium  text-justify text-sm text-[#847FA0] ">
                      End-to-end payments and financial management in a single
                      solution. Meet the right platform to help realize.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <div className="bg-[#3734A9] rounded-full p-4">
                    <img className=" object-contain w-12 " src={Teams}></img>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-md"> Dedicated Teams</h4>
                    <p className="font-medium  text-justify text-sm text-[#847FA0] ">
                      End-to-end payments and financial management in a single
                      solution. Meet the right platform to help realize.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <div className="bg-[#00E1F0] rounded-full p-4">
                    <img className=" object-contain w-12 " src={support}></img>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-md"> 24/7 Hours Support</h4>
                    <p className="font-medium  text-justify text-sm text-[#847FA0] ">
                      End-to-end payments and financial management in a single
                      solution. Meet the right platform to help realize.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" z-50  flex justify-end relative ">
          <div className="z-50  flex justify-center items-center ">
            <img className="z-50 w-4/5 object-center  " src={Digital}></img>
          </div>
          <div className=" z-10  bottom-0  left-5 absolute bg-[#E8F2FF] w-11/12  h-4/5">
            <div className="relative">
              <div class="z-10 absolute right-0 w-20 h-20 top-0  rounded-tr-full bg-[#00E1F0] translate-x-1/4 -translate-y-1/4"></div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <PaymentMethods />

    </>
  );
}



const Features = () => {
  return (
    <div className="flex  h-full items-left justify-center  flex-col">
      <div className="flex flex-col gap-4">
        <h4 className="font-bold text-4xl"> Features that blows mind</h4>
        <p className="font-medium  text-justify   w-1/2 text-sm text-[#847FA0] ">
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </p>
      </div>
      <div className="grid grid-cols-3 my-20 gap-7">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};
const PaymentMethods = () => {
  return (
    <>
      <div className="flex  h-full items-center justify-between  flex-row ">
        <div className="w-1/2 relative">
          <div className="flex justify-center  object-center ">
            <img className="z-50" src={Payment2}></img>
          </div>
          <div className="absolute w-5/6 h-3/4 bottom-0 bg-yellow-200">
            <div class="z-10 absolute left-0 w-20 h-20 top-0  rounded-tl-full bg-[#00E1F0]  -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="w-1/2  ">
          <div className="flex flex-col gap-6">
            <h3 className="text-base text-[#3734A9] ">Our Features</h3>
            <h1 className=" font-bold text-4xl ">
              Receive payments quickly from anywhere
            </h1>
            <p className="font-medium  text-justify text-sm text-[#847FA0] ">
              Why kept very ever home mrs. Considered sympathize ten uncommonly
              occasional assistance sufficient not. Letter of on become he
              tended active enable to.
            </p>
            <button className="bg-[#3734A9] hover:bg-[#1d1a61] text-white rounded-md px-4 py-2 w-1/2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
