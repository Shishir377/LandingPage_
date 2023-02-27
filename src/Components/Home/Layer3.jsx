/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Layer3() {
  return (
    <div className="flex  h-full">
      <div className="w-full flex center  ">
        <div className=" relative flex  ">
          <div className="w-full flex  gap-3 flex-col px-14 py-10">
            <div className="relative w-full h-fit p-6 shadow-lg bg-white  z-20  flex flex-col   gap-5">
              <div>
                <h4 className="font-bold text-2xl"> Quick Transfers</h4>
              </div>
              <div className="grid grid-cols-5 gap-2">
                <div className="flex flex-col  text-xs  items-center">
                  <img
                    className="rounded-full w-14 h-14 object-cover"
                    src="https://img.freepik.com/premium-photo/amazed-redhead-woman-face-isolated-yellow-background-face-young-redhead-woman_474717-95128.jpg?w=2000"
                  ></img>
                  <p className="font-semibold">Derek</p>
                </div>
                <div className="flex flex-col text-xs  items-center">
                  <img
                    className="rounded-full w-14 h-14 object-cover"
                    src="data:image/jpeg;base64,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"
                  ></img>
                  <p className="font-semibold">Shane</p>
                </div>

                <div className="flex flex-col text-xs  items-center">
                  <img
                    className="rounded-full w-14 h-14 object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzywPSbPu28s3SLtTWN-QR7bxn2E4VXpwpp15opvXSleZgwfi6LjulaQmeGnK6sVsSug&usqp=CAU"
                  ></img>
                  <p className="font-semibold">Alvina</p>
                </div>

                <div className="flex flex-col text-xs  items-center">
                  <img
                    className="rounded-full w-14 h-14 object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsMKD5CbvLyuzkCdaGacyDM0_Uy3tRLFyL13BjnW7HjEEL-xoXikWIa9arvLHz7dzwWo&usqp=CAU"
                  ></img>
                  <p className="font-semibold">Hunt</p>
                </div>
                <div className="flex flex-col text-xs  items-center">
                  <img
                    className="rounded-full w-14 h-14 object-cover"
                    src="https://thumbs.dreamstime.com/b/portrait-man-making-funny-face-against-gray-background-154284838.jpg"
                  ></img>
                  <p className="font-semibold">Bob</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg"> Provide Amount</h4>
                <div className="flex my-2">
                  <div className="bg-[#E9F3FF] w-3/4 h-8 "></div>
                  <div className="bg-[#01E0F0] w-1/4 h-8"></div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit   z-20 grid grid-cols-2   gap-5">
              <div className=" bg-white p-6 shadow-lg">
                <p>Deposits</p>
                <h4 className="text-lg font-bold flex justify-between">
                  <div>$9350</div>
                  <div>8.46%</div>
                </h4>
                <div className="flex my-2">
                  <div className="w-3/4  bg-[#FDBD65] h-4"></div>
                  <div className="w-1/4 bg-[#E9F3FF] h-4"></div>
                </div>
              </div>
              <div className=" bg-white p-6 shadow-lg">
                <p>Expenses</p>
                <h4 className="text-lg font-bold flex justify-between">
                  <div>$9350</div>
                  <div>8.46%</div>
                </h4>
                <div className="flex my-2">
                  <div className="w-3/4  bg-[#3734A9] h-4"></div>
                  <div className="w-1/4 bg-[#E9F3FF] h-4"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="z-10 absolute right-5 w-20 h-20  rounded-tr-full bg-[#F97D5B]"></div>
          <div class="z-10 absolute left-0 bottom-0  w-20 h-20 rounded-bl-full bg-[#E8F2FF]"></div>

          <img
            src="https://svgsilh.com/svg/26432.svg"
            className=" absolute left-8 w-36 h-36 opacity-5"
          ></img>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center   flex-col">
        <div className="w-3/4 ">
          <div className=" border-b-2 border-[#847FA0] flex flex-col gap-2 mb-5">
            <h3 className="text-base text-[#3734A9]"> WHY CHOOSE US</h3>
            <h1 className=" font-bold text-4xl ">
              Track your crytpo portfolio on the best way possible
            </h1>
            <p className="font-medium  text-sm text-[#847FA0] mb-5">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle-fill text-[#FDBD65]"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />{" "}
                </svg>
              </span>
              Get Overview at a glance
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle-fill text-[#FDBD65]"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />{" "}
                </svg>
              </span>
              Deoposit funds easily, securlity
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle-fill text-[#FDBD65]"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />{" "}
                </svg>
              </span>
              Get Live Support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
