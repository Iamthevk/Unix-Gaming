import Button from "../ui_components/Button";
import Cards from "./CardContainer";
import Ecosystem from "./Ecosystem";
import Navbar from "./Navbar";

function Banner() {
  return (
    <>
      <div className="banner-bg h-[980px] md:h-[840px] md:w-full pt-12 px-8 md:px-36 relative">
        <div className="flex justify-between items-start mb-24">
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
        <div className="">
          <header className="text-secondary-100 w-full md:w-[70%] text-start">
            <p className="text-center md:text-left text-secondary-100 text-2xl md:text-8xl font-montSerrat font-bold mb-3">
              Kickstart your web3 game
            </p>
            <p className="px-10 md:px-0 text-center md:text-left font-inter font-light md:text-2xl md:w-[80%] mb-14">
              unix gaming provides what all games need to succed: gamers,
              technology & funding{" "}
            </p>
            <Button className="mx-5 md:mx-0 px-10 py-5 bg-gradient-to-r from-[#F20493] to-primary-100 font-inter text-3xl">
              Kickstart my game
            </Button>
          </header>
          <div className="absolute md:right-0 md:bottom-0">
            <img
              src={"girl.png"}
              alt="girl using vr"
              className="w-[580px] h-[580px] "
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
