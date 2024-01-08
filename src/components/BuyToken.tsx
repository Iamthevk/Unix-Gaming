import Button from "../ui_components/Button";
function BuyToken() {
  return (
    <div className="flex flex-col gap-16 md:gap-0 md:flex-row md:justify-between items-center pt-5 mx-5 md:px-36 md:pt-14 xxl:px-80 text-start mb-24 md:mb-52 relative">
      <div>
        <h1 className="text-secondary-100 text-3xl md:text-6xl font-extrabold font-montSerrat md:w-[80%] md:mt-0">
          Product, defined by it’s customer
        </h1>
        <p className="font-inter text-2xl md:w-[80%] md:py-5">
          wanted is a web3 social app created for discovery. you tell us what
          you’re interested in, and we help you find others to share your
          interests.
        </p>
        <Button className="border-2 border-primary-200 px-5 py-2 mt-5 hover:scale-110 transition-all duration-300 ease-in-out">
          <div className="flex gap-2 md:px-7">
            <img src={"cart.svg"} />
            <span className="bg-gradient-to-r  from-primary-200 to-primary-100 md:text-2xl bg-clip-text text-transparent">
              Buy unix token
            </span>
          </div>
        </Button>
      </div>
      <div className="hidden md:block md:w-[500px] md:h-[500px] rounded-full bg-primary-100 blur-[100px] border-2 opacity-40 absolute top-[350px] left-0 -z-10"></div>
      <div className="hidden md:block md:w-[500px] md:h-[500px] rounded-full bg-primary-100 blur-[100px] border-2 opacity-40 absolute top-[100px] right-0 "></div>
      <div>
        <img
          src={"bond.png"}
          className="md:w-full md:h-[480px] overflow-visible object-cover rounded-full backdrop-brightness-100 animate__animated animate__pulse"
        />
      </div>
    </div>
  );
}

export default BuyToken;
