import React from "react";

export default function Screen2() {
  return (
    <>
      <div className="font-medium text-center text-md text-slate-800 ">
        Over 32k+ software businesses growing with Ar Shakir.
        <div>
          {/* <img src="https://logovtor.com/wp-content/uploads/2020/11/openzeppelin-logo-vector.png"></img> */}

          <div class="container   flex justify-center ">
            <div className=" flex justify-center    ">
              <div class="grid grid-cols-7 gap-9 place-items-center">
                <div class="flex  justify-center items-center">
                  <img
                    src="https://logovtor.com/wp-content/uploads/2020/11/openzeppelin-logo-vector.png"
                    alt="Logo 1"
                    class="max-w-full max-h-full"
                  />
                </div>
                <div class="flex justify-center items-center">
                  <img
                    src="https://www.pngall.com/wp-content/uploads/4/Oracle-PNG-Free-Download.png"
                    alt="Logo 2"
                    class="max-w-full max-h-full"
                  />
                </div>
                <div class="flex justify-center items-center">
                  <img
                    src="data:image/png;base64,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"
                    alt="Logo 3"
                    class="max-w-full max-h-full"
                  />
                </div>
                <div class="flex justify-center items-center">
                  <img
                    src="https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png"
                    alt="Logo 4"
                    class="max-w-full max-h-full"
                  />
                </div>
                <div class="flex justify-center items-center">
                  <img
                    src="data:image/png;base64,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"
                    alt="Logo 5"
                    class="max-w-full max-h-full"
                  />
                </div>

                <div class="flex justify-center items-center">
                  <img
                    src="data:image/png;base64,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 "
                    alt="Logo 7"
                    class="max-w-full max-h-full"
                  />
                </div>
                <div class="flex justify-center items-center">
                  <img
                    src="data:image/png;base64,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"
                    alt="Logo 8"
                    class="max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-base text-[#3734A9]"> Why Financially</h3>
          <div className=" flex justify-center my-3">
            <h1 className=" font-bold text-4xl text-center w-1/2">
              Specially designed for payments
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-3 my-20 gap-7">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
}

export const Cards = () => {
  return (
    <>
      <div className=" h-full relative  flex justify-end ">
        <div className=" h-44 p-8 text-left justify-center gap-4   relative flex-col flex shadow-xl  border-gray-50 border ">
          <h4 className="font-bold text-2xl"> Modern Cards</h4>
          <p className="text-gray-500">
            End-to-end payments and financial management in a single solution.
            Meet the right platform.
          </p>
        </div>
        <div className="absolute left-5">asd</div>
        <div
          className="absolute -bottom-4  transform h-12 w-7  z-50  rotate-45 -right-2 border border-l-2 border-r-0 border-t-0 border-b-0"
          style={{ zIndex: 10000000 }}
        ></div>
      </div>
    </>
  );
};
