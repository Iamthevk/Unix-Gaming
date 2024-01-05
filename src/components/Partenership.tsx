import P01 from "../assets/p01.png";
import P02 from "../assets/p02.png";
import P03 from "../assets/p03.png";
import P04 from "../assets/p04.png";
import P05 from "../assets/p05.png";
import P06 from "../assets/p06.png";
import P07 from "../assets/p07.png";
import P08 from "../assets/p08.png";
import P09 from "../assets/p09.png";

function Partenership() {
  const imageSrcList = [P01, P02, P03, P04, P05, P06, P07, P08, P09];
  return (
    <div className="text-center mb-40">
      <h1 className="text-secondary-100 text-4xl md:text-6xl font-extrabold font-montSerrat w-full">
        Partenerships
      </h1>
      <div className="flex justify-center items-center gap-7 md:px-12 xxl:px-96  flex-wrap py-7">
        {imageSrcList.map((imageSrc, i) => {
          return (
            <div className="w-32 md:w-60 h-24 p-5 border-2 border-primary-200 rounded-3xl flex justify-center items-center bg-secondary-200">
              <img src={imageSrc} alt={`image ${i}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Partenership;
