import Button from "../ui_components/Button";
import Cards from "./CardContainer";
import Ecosystem from "./Ecosystem";
import Navbar from "./Navbar";
import { useInView } from "react-intersection-observer";

function Banner() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <div className="banner-bg h-[840px] md:w-full pt-12 px-8 md:px-36 relative">
        <div
          ref={ref}
          className={`flex justify-between items-start mb-24 ${
            inView ? "animate__animated animate__backInDown" : ""
          }`}
        >
          <div className="flex gap-2 items-center">
            <span className="h-12 w-12 text-secondary-100 bg-gradient-to-r from-[#F20493] to-primary-100 text-2xl font-bold rounded-full grid place-items-center">
              U
            </span>
            <p className="text-secondary-100 text-lg text-wrap text-left font-bold leading-5 font-montSerrat w-12 tracking-wider	">
              unix gaming
            </p>
          </div>

          <Navbar />
        </div>
        <div>
          <header className="text-secondary-100 w-full md:w-[70%] text-start animate__animated animate__zoomIn">
            <p className="text-center md:text-left text-secondary-100 text-xl md:text-8xl font-montSerrat font-bold mb-3">
              Kickstart your web3 game
            </p>
            <p className="px-1 md:px-0 text-center md:text-left font-inter font-light md:text-2xl md:w-[80%] mb-14">
              unix gaming provides what all games need to succed: gamers,
              technology & funding{" "}
            </p>
            <Button className="mx-7 md:mx-0 px-10 py-5 bg-gradient-to-r from-[#F20493] to-primary-100 font-inter text-xl md:text-3xl hover:scale-110 transition-all duration-300 ease-in-out">
              Kickstart my game
            </Button>
          </header>
          <div className="absolute right-1 md:right-0 bottom-0">
            <img
              src={"girl.png"}
              alt="girl using vr"
              className="md:w-[580px] md:h-[580px] animate__animated animate__fadeInUp"
            />
          </div>
        </div>
      </div>
      <Cards />
      <Ecosystem />
    </>
  );
}

export default Banner;
