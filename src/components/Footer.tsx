function Footer() {
  return (
    <div className="flex flex-col justify-center items-center py-64">
      <div className="flex justify-start gap-2 w-80">
        <span className="h-24 w-24 text-secondary bg-gradient-to-r from-[#F20493] to-primary-100 text-5xl font-bold rounded-full grid place-items-center">
          U
        </span>
        <p className="text-secondary text-5xl text-wrap text-left font-bold leading-10 font-montSerrat w-12 tracking-wider	">
          unix gaming
        </p>
      </div>
      <div className="flex gap-7 py-10">
        <img
          src={"whatsapp.svg"}
          alt="whatsapp"
          className="border rounded-md border-primary-200 p-3 "
        />
        <img
          src={"instagram.svg"}
          alt="instagram"
          className="border rounded-md border-primary-200 p-3"
        />{" "}
        <img
          src={"facebook.svg"}
          alt="facebook"
          className="border rounded-md border-primary-200 p-3"
        />
      </div>
    </div>
  );
}

export default Footer;
