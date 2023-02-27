import { useState } from "react";

export function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen z-10 bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl  font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter   px-14 py-4 h-15 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="md:w-2/6 w-full flex items-center justify-between">
        <a className=" text-3xl font-bold font-mono text-neutral-600" href="/">
          Dogma
        </a>
      </div>
      <div className="hidden md:flex  w-full md:justify-center ">
        <a href="/">
          <h3 className="w-full mx-4 text-lg font-semibold text-neutral-500">
            Product
          </h3>
        </a>
        <a href="/Jobs/SearchJobs">
          <h3 className="w-full mx-4 text-lg font-semibold text-neutral-500">
            Template
          </h3>
        </a>
        <a href="/Jobs/SearchJobs">
          <h3 className="w-full mx-4 text-lg font-semibold text-neutral-500">
            Blog
          </h3>
        </a>
        <a href="/Jobs/SearchJobs">
          <h3 className="w-full mx-4 text-lg font-semibold text-neutral-500">
            Pricing
          </h3>
        </a>

        <a href="/AboutUs/About">
          <h3 className="w-full mx-4 text-lg font-semibold text-neutral-500 ">
            About
          </h3>
        </a>
      </div>

      <div className="w-2/5 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
        <div className="hidden md:flex">
          <div className="mx-4">
            <div class="flex md:order-2 gap-5">
              <button
                type="button"
                class="text-gray-500  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              >
                Sign In
              </button>
              <button
                type="button"
                class="text-white bg-[#4F47BB] hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              >
                Start Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
