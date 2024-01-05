import SocialIcon from "../ui_components/SocialIcon";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center py-28 md:py-64">
      <div className="flex justify-start gap-2 md:w-80">
        <span className="w-12 h-12 md:h-24 md:w-24 text-secondary-100 bg-gradient-to-r from-[#F20493] to-primary-100 text-2xl md:text-5xl font-bold rounded-full grid place-items-center">
          U
        </span>
        <p className="text-secondary-100 text-xl md:text-5xl text-wrap text-left font-bold md:leading-10 font-montSerrat w-12 tracking-wider	">
          unix gaming
        </p>
      </div>
      <div className="flex gap-7 xxl:gap-16 py-10">
        <SocialIcon src={"whatsapp.svg"} alt="whatsapp" />
        <SocialIcon src={"instagram.svg"} alt="instagram" />
        <SocialIcon src={"facebook.svg"} alt="facebook" />
      </div>
    </div>
  );
}

export default Footer;
