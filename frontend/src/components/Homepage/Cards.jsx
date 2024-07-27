import React from "react";

const Cards = () => {
  const data = [
    {
      title: "PostmanAPI",
      des: "Learn APIs from PostmanAPI",
    },
    {
      title: "BAPS",
      des: "Sabha on Thursday",
    },
    {
      title: "React",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic inventore minus, voluptas est maxime cumque expedita officia, laudantium quibusdam atque perferendis deleniti, error molestiae ad minima temporibus odit nihil. Distinctio.",
    },
    {
      title: "LeetCode",
      des: "Solve LeetCode",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((items, i) => (
        <div className="border rounded p-4 bg-teal-950 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-xl">{items.title}</h3>
            <p className="my-2">{items.des}</p>
          </div>
          <div>
            <button className="bg-red-600 p-2 rounded">Pending</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
