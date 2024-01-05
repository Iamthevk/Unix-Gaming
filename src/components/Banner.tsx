import Button from "../ui_components/Button";
import Cards from "./Cards";
import Ecosystem from "./Ecosystem";
import Navbar from "./Navbar";

function Banner() {
  return (
    <>
      <div className="banner-bg h-[1000px] md:h-[736px] md:w-full pt-12 md:px-36">
        <div className="flex justify-between items-start mb-24">
          <div className="flex gap-2 items-center">
            <span className="h-12 w-12 text-secondary bg-gradient-to-r from-[#F20493] to-primary-100 text-2xl font-bold rounded-full grid place-items-center">
              U
            </span>
            <p className="text-secondary text-lg text-wrap text-left font-bold leading-5 font-montSerrat w-12 tracking-wider	">
              unix gaming
            </p>
          </div>

          <Navbar />
        </div>
        <div className="relative">
          <header className="text-secondary w-full md:w-[70%] text-start">
            <p className="text-secondary text-xl md:text-8xl font-montSerrat font-bold mb-3">
              Kickstart your web3 game
            </p>
            <p className="font-inter font-light text-2xl md:w-[80%] mb-14">
              unix gaming provides what all games need to succed: gamers,
              technology & funding{" "}
            </p>
            <Button className="px-10 py-5 bg-gradient-to-r from-[#F20493] to-primary-100 font-inter text-3xl ">
              Kickstart my game
            </Button>
          </header>
          <div className="absolute -right-36 md:-bottom-36 xl:-top-1">
            <img src={"girl.png"} alt="girl using vr" />
          </div>
        </div>
      </div>

      <Cards />

      <Ecosystem />
    </>
  );
}

export default Banner;
