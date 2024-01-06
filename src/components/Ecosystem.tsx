import BuyToken from "./BuyToken";
import Partenership from "./Partenership";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

const data = [
  {
    title: "Platform for gamers",
    text: "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.",
  },
  {
    title: "Sdk for games",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Web3 social app",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Multi-chain launchpad",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Gaming Studio",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function Ecosystem() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  function handleToggle(index: number) {
    setOpenIndex((prevIdx) => (prevIdx === index ? null : index));
  }
  return (
    <div className="bg-[#0B0A0A] opacity-95 text-secondary-100 pt-20 h-auto relative">
      <div className="text-center">
        <h1 className="text-secondary-100 text-3xl md:text-6xl font-extrabold font-montSerrat mb-5">
          The unix ecosystem
        </h1>
        <p className="font-inter text-2xl px-2 md:w-[60%] mx-auto">
          wanted is a web3 social app created for discovery. you tell us what
          you’re interested in, and we help you find others to share your
          interests.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center md:px-20 xxl:px-80">
        <div className="relative">
          <div className="md:w-[500px] h-[300px] rounded-full bg-primary-100 blur-[100px] border-2 opacity-60 absolute top-[400px] left-32 "></div>

          <img
            src={"man.png"}
            className="md:w-[700px] md:h-[700px] object-cover rounded-full backdrop-brightness-100 "
          />
        </div>
        <div className="w-full pl-10 md:ml-0 md:w-[50%]">
          {data.map((item, i) => {
            return (
              <>
                <div
                  className={`flex font-inter text-3xl w-[70%] gap-8  p-5 mb-2 rounded-md cursor-pointer ${
                    openIndex === i
                      ? "border-l-[12px] border-l-primary-200 border-2 border-primary-100 mt-5"
                      : ""
                  }`}
                  onClick={() => handleToggle(i)}
                >
                  {openIndex === i ? (
                    <img
                      src={"arrow-tri-down.svg"}
                      alt="arrow-down"
                      className="w-7 cursor-pointer"
                    />
                  ) : (
                    <img
                      src={"arrow-tri-right.svg"}
                      alt="arrow-down"
                      className=" cursor-pointer"
                    />
                  )}
                  <h2>{data[i].title}</h2>{" "}
                </div>

                {openIndex === i && (
                  <>
                    <p className="w-[85%] font-inter text-2xl mb-5">
                      {item.text}
                    </p>
                  </>
                )}
                <div className="w-[85%] h-0.5 bg-[#ffffff36]"></div>
              </>
            );
          })}
        </div>
      </div>

      <BuyToken />
      <Partenership />
      <Form />
      <Footer />
    </div>
  );
}

export default Ecosystem;
