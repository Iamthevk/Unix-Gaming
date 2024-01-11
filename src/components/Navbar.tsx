import { useState } from "react";
import Button from "../ui_components/Button";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  if (isNavOpen) {
    document.body.style.overflow = "hidden"; // Enable scrolling
  } else {
    document.body.style.overflow = "auto"; // Disable scrolling
  }

  return (
    <>
      <nav>
        <ul className="hidden md:flex font-inter text-2xl font-thin text-secondary-100  items-start gap-12 cursor-pointer">
          <li className="hover:text-primary-200">Home</li>
          <li className="flex items-baseline gap-2 hover:text-primary-200">
            Products{" "}
            <span>
              <img src={"arrow-down.svg"} alt="arrow-down" />
            </span>
          </li>

          <li className="flex items-baseline gap-2 hover:text-primary-200">
            Buy unix token
            <span>
              <img src={"arrow-down.svg"} alt="arrow-down" />
            </span>
          </li>
          <li className="flex items-baseline gap-2 hover:text-primary-200">
            Community
            <span>
              <img src={"arrow-down.svg"} alt="arrow-down" />
            </span>
          </li>
        </ul>
      </nav>
      <Button className="hidden md:block md:w-[150] md:text-2xl h-[55] border-2 border-primary-200 px-10 py-3 -mt-2 opacity-80 hover:text-primary-200 hover:bg-secondary-100">
        Login
      </Button>
      <section className="flex lg:hidden">
        <div
          className="space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
        </div>
        {isNavOpen && (
          <div
            className="overlay relative inset-0 bg-black opacity-50 z-50 h-[700px]"
            onClick={() => setIsNavOpen(false)}
          ></div>
        )}
        <div className={isNavOpen ? "showNavItems z-50" : "hideNavItems z-10"}>
          <div
            className="absolute !top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="flex gap-2 items-center pb-12 w-40">
            <span className="h-12 w-12 text-secondary-100 bg-gradient-to-r from-[#F20493] to-primary-100 text-2xl font-bold rounded-full grid place-items-center">
              U
            </span>
            <p className="text-secondary-100 text-lg text-wrap text-left font-bold leading-5 font-montSerrat w-12 tracking-wider	">
              unix gaming
            </p>
          </div>
          <ul className="flex flex-col pl-8 items-start text-2xl justify-between min-h-[300px] pb-12">
            <li className="hover:text-primary-200">Home</li>
            <li className="flex items-baseline gap-2 hover:text-primary-200">
              Products{" "}
              <span>
                <img src={"arrow-down.svg"} alt="arrow-down" />
              </span>
            </li>

            <li className="flex items-baseline gap-2 hover:text-primary-200">
              Buy unix token
              <span>
                <img src={"arrow-down.svg"} alt="arrow-down" />
              </span>
            </li>
            <li className="flex items-baseline gap-2 hover:text-primary-200">
              Community
              <span>
                <img src={"arrow-down.svg"} alt="arrow-down" />
              </span>
            </li>
          </ul>
          <Button className="text-2xl font-semibold h-[55] border-4 border-primary-200 px-10 py-3 -mt-2 opacity-80 hover:text-primary-200 hover:bg-secondary-100">
            Login
          </Button>
        </div>
      </section>
    </>
  );
}

export default Navbar;
