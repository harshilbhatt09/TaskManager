import React from "react";
import { FaRegHeart, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const Cards = ({ home, setInputdiv }) => {
  const data = [
    {
      title: "PostmanAPI",
      des: "Learn APIs from PostmanAPI",
      status: "Pending",
    },
    {
      title: "BAPS",
      des: "Sabha on Thursday",
      status: "Complete",
    },
    {
      title: "React",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic inventore minus, voluptas est maxime cumque expedita officia, laudantium quibusdam atque perferendis deleniti, error molestiae ad minima temporibus odit nihil. Distinctio.",
      status: "Pending",
    },
    {
      title: "LeetCode",
      des: "Solve LeetCode",
      status: "Pending",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((items, i) => (
        <div key={i} className="border rounded p-4 bg-teal-950 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-xl">{items.title}</h3>
            <p className="my-2">{items.des}</p>
          </div>
          <div className="flex items-center mt-2">
            <button
              className={`${
                items.status === "Pending" ? "bg-red-600" : "bg-green-600"
              } p-2 rounded w-1/2`}
            >
              {items.status}
            </button>
            <div className="w-1/2 p-2 flex justify-around text-xl">
              <button>
                <FaRegHeart />
              </button>
              <button>
                <FaEdit />
              </button>
              <button>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
      {home === "true" && (
        <button onClick={() => setInputdiv("fixed")} className="border rounded p-4 bg-teal-950 flex flex-col justify-center items-center hover:cursor-pointer hover:scale-105 transition-all duration-200">
          <IoMdAddCircle className="text-5xl mb-4" />
          <div className="text-2xl">Add Task</div>
        </button>
      )}
    </div>
  );
};

export default Cards;
