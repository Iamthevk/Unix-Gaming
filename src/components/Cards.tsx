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
    <div className="flex gap-16 text-secondary ">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="border-2 border-[#F204DA] w-60 h-60 rounded-[20px] flex justify-center items-center flex-col"
          >
            <div>{item.count}</div>
            <img src={item.image} alt={item.title} className="h-40 -my-3" />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
