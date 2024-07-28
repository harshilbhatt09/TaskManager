import React, { useState } from "react";
import Cards from "../components/Homepage/Cards";
import { IoMdAddCircle } from "react-icons/io";
import InputData from "../components/Homepage/InputData";

const Alltasks = () => {
  const [Inputdiv, setInputdiv] = useState("hidden");
  return (
    <>
      <div>
        <div className="w-full flex justify-end">
          <button onClick={() => setInputdiv("fixed")}>
            <IoMdAddCircle className="text-4xl mb-4 text-teal-400 hover:text-teal-200 hover:scale-105 transition-all duration-150" />
          </button>
        </div>
        <Cards home={"true"} setInputdiv={setInputdiv}/>
        <InputData Inputdiv={Inputdiv} setInputdiv={setInputdiv} />
      </div>
    </>
  );
};

export default Alltasks;
