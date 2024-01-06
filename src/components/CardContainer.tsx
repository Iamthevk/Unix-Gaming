type Data = {
  id: number;
  title: string;
  image: string;
  count: string;
}[];

const data: Data = [
  { id: 1, title: "Artwork", image: "card01.png", count: "11.2K" },
  { id: 1, title: "Designs", image: "card02.png", count: "11.2K" },
  { id: 1, title: "Development", image: "card03.png", count: "11.2K" },
  { id: 1, title: "Marketing", image: "card04.png", count: "11.2K" },
];
function Cards() {
  return (
    <div className="category-bg h-full md:h-[400px] grid place-items-center pb-8">
      <div className="flex flex-col mt-10 md:mt-0  md:flex-row  gap-16 text-secondary-100 xxl:gap-36">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="border-2 border-[#F204DA] bg-secondary-200 w-40 h-40 md:w-60 md:h-60 rounded-[20px] flex justify-center items-center flex-col relative animate__animated animate__pulse"
            >
              <div className="absolute right-10 top-4 md:top-5 bg-gradient-to-r from-[#F204DA] to-primary-100 rounded-md w-16 text-center">
                {item.count}
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-24 md:h-32 mt-5 md:w-40 md:-my-3"
              />
              <p className="text-xl md:text-3xl">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
