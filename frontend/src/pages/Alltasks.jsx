import React from "react";
import Cards from "../components/Homepage/Cards";
import { IoMdAddCircle } from "react-icons/io";

const Alltasks = () => {
  return (
    <div>
      <div className="w-full flex justify-end">
        <button>
          <IoMdAddCircle className="text-4xl mb-4 text-teal-400 hover:text-teal-200 hover:scale-105 transition-all duration-150" />
        </button>
      </div>
      <Cards home={"true"} />
    </div>
  );
};

export default Alltasks;
