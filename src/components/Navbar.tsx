import Button from "../ui_components/Button";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="hidden md:flex font-inter text-2xl font-thin text-secondary-100  items-start gap-12">
          <li>Home</li>
          <li className="flex items-baseline gap-2">
            Products{" "}
            <span>
              <img src={"arrow-down.svg"} alt="arrow-down" />
            </span>
          </li>

          <li className="flex items-baseline gap-2">
            Buy unix token
            <span>
              <img src={"arrow-down.svg"} alt="arrow-down" />
            </span>
          </li>
          <li className="flex items-baseline gap-2">
            Community
            <span>
              <img src={"arrow-down.svg"} alt="arrow-down" />
            </span>
          </li>
        </ul>
      </nav>
      <Button className="md:w-[150] md:text-2xl h-[55] border-2 border-primary-200 px-10 py-3 -mt-2 opacity-80">
        Login
      </Button>
    </>
  );
}

export default Navbar;
