import { useInView } from "react-intersection-observer";

type Data = {
  id: number;
  title: string;
  image: string;
  count: string;
}[];

const data: Data = [
  { id: 1, title: "Artwork", image: "card01.png", count: "11.2K" },
  { id: 2, title: "Designs", image: "card02.png", count: "11.2K" },
  { id: 3, title: "Development", image: "card03.png", count: "11.2K" },
  { id: 4, title: "Marketing", image: "card04.png", count: "11.2K" },
];
function Cards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div
      className={`category-bg h-full md:h-[400px] grid place-items-center pb-8 ${
        inView ? "animate__animated animate__pulse" : ""
      }`}
    >
      <div className="flex flex-col mt-10 md:mt-0  md:flex-row  gap-16 text-secondary-100 xxl:gap-36">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              ref={ref}
              className={`border-2 border-[#F204DA] bg-secondary-200 w-44 h-44 md:w-60 md:h-60 rounded-[20px] flex justify-center items-center flex-col relative `}
            >
              <div className="absolute right-10 top-4 md:top-5 bg-gradient-to-r from-[#F204DA] to-primary-100 rounded-md w-20 py-1.5 text-center">
                {item.count}
              </div>
              <img
                src={item.image}
                alt={item.title}
                className={`h-20 w-24  mt-5 md:mt-1 ${
                  item.id === 3 || item.id === 4
                    ? "md:w-40 md:h-32"
                    : "md:w-48 md:h-40"
                }`}
              />
              <p className="absolute bottom-5 text-xl md:text-3xl">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
