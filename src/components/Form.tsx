import { useState } from "react";
import Button from "../ui_components/Button";
import { useInView } from "react-intersection-observer";

function Form() {
  const [input, setInput] = useState<string>("");
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.length > 1) {
      alert(`Hi visitor, your email id ${input} is submitted successfully.`);
    } else {
      alert("Please enter your email id");
    }
    setInput("");
  }

  return (
    <div
      className={`md:h-[600px] border-8 border-primary-100 bg-secondary-200 md:w-[80%]  mx-2 md:mx-auto  relative rounded-[40px] px-4 md:px-16 flex flex-col md:flex-row justify-center items-center gap-10 xxl:gap-[500px] ${
        inView ? "animate__animated animate__fadeIn" : ""
      }`}
      ref={ref}
    >
      <div className="py-10 md:py-28 text-left">
        <h1 className="text-secondary-100 text-4xl md:text-6xl font-extrabold font-montSerrat ">
          Get unix gaming updates.
        </h1>
        <p className="font-inter md:text-2xl pt-5 pb-10 mb-5 md:mb-0">
          when it comes to partnering new blockchain games, we only want to
          partner with project of class,continue to drive the future evolution
          of blockchaining games.
        </p>
        <form
          className="border-2 border-primary-100 relative py-2 rounded-full font-inter bg-secondary-200"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your email here"
            className="outline-none md:w-96 md:text-2xl border-none bg-transparent py-4 pl-3 md:pl-10 md:placeholder:text-3xl placeholder:text-secondary-100"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
          <Button className="border-2 md:text-3xl border-primary-100 rounded-full absolute right-0 h-full bottom-0 px-8 md:px-12 hover:bg-secondary-100 hover:text-primary-100">
            Submit
          </Button>
        </form>
      </div>
      <div className="hidden md:block md:w-[480px] md:h-[420px] rounded-full bg-primary-100 blur-3xl border-2 opacity-30 absolute -top-40 -right-28 "></div>
      <div className="md:w-full">
        <img
          src={"join.png"}
          alt="join-image"
          className="w-72 h-72 xxl:w-[450px] xxl:h-[450px]"
        />
      </div>
    </div>
  );
}

export default Form;
