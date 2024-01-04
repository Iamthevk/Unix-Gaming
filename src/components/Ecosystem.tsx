import BuyToken from "./BuyToken";

function Ecosystem() {
  return (
    <div className="bg-[#0B0A0A] text-secondary pt-20 relative">
      <div>
        <h1 className="text-secondary text-6xl font-extrabold font-montSerrat mb-5">
          The unix ecosystem
        </h1>
        <p className="font-inter w-[50%] mx-auto">
          wanted is a web3 social app created for discovery. you tell us what
          you’re interested in, and we help you find others to share your
          interests.
        </p>
        <div className="flex justify-between items-center px-20">
          <div className="relative">
            <div className="w-[430px] h-[300px] rounded-full bg-primary blur-3xl border-2 opacity-50 absolute top-[400px] left-40 "></div>
            <img
              src={"man.png"}
              className="w-[700px] h-[700px] object-cover rounded-full backdrop-brightness-100 "
            />
          </div>
          <div>lorem10</div>
        </div>
      </div>
      <BuyToken />
      <div>
        <h1 className="text-secondary text-6xl font-extrabold font-montSerrat w-full">
          Partenerships
        </h1>
      </div>
    </div>
  );
}

export default Ecosystem;
