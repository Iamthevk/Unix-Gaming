import Button from "../ui_components/Button";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="font-inter text-2xl font-thin text-secondary flex items-start gap-12">
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
      <Button className="w-[150] h-[55] border-2 border-[#EE0BD7] px-10 py-3 -mt-2 opacity-80">
        Login
      </Button>
    </>
  );
}

export default Navbar;
