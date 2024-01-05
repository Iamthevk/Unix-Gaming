function Form() {
  return (
    <div className="md:h-[600px] border-8 border-primary-100 bg-secondary-200 md:w-[80%] mx-2 md:mx-auto  relative rounded-[40px] px-4 md:px-16 flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="py-10 md:py-28 text-left">
        <h1 className="text-secondary-100 text-4xl md:text-6xl font-extrabold font-montSerrat ">
          Get unix gaming updates.
        </h1>
        <p className="font-inter md:text-2xl py-12 mb-5 md:mb-0">
          when it comes to partnering new blockchain games, we only want to
          partner with project of class,continue to drive the future evolution
          of blockchaining games.
        </p>
        <form className="border-2 border-primary-100 relative py-2 rounded-full font-inter">
          <input
            type="text"
            placeholder="Your email here"
            className="outline-none md:w-96 md:text-2xl border-none bg-transparent py-4 pl-10 md:placeholder:text-3xl"
          />
          <button
            type="submit"
            className="border-2 md:text-3xl border-primary-100 rounded-full absolute right-0 h-full bottom-0 px-8 md:px-12"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="md:w-full">
        <img src={"join.png"} alt="join-image" />
      </div>
    </div>
  );
}

export default Form;
