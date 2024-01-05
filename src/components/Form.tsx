function Form() {
  return (
    <div className="border-8 border-primary-200 w-[80%] mx-auto relative rounded-[40px] px-16 flex justify-center items-center">
      <div className="py-28 text-left">
        <h1 className="text-secondary text-6xl font-extrabold font-montSerrat w-full">
          Get unix gaming updates.
        </h1>
        <p className="font-inter w-2/3">
          when it comes to partnering new blockchain games, we only want to
          partner with project of class,continue to drive the future evolution
          of blockchaining games.
        </p>
        <form className="border-2 border-primary-200 w-[400px] relative py-2 rounded-full font-inter">
          <input
            type="text"
            placeholder="Your email here"
            className="outline-none	border-none bg-transparent py-4 pl-5"
          />
          <button
            type="submit"
            className="border-2 border-primary-200 rounded-full absolute right-0 h-full bottom-0 px-12"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <img src={"join.png"} alt="join image" />
      </div>
    </div>
  );
}

export default Form;
