import React from "react";
import { RxCross2 } from "react-icons/rx";

const InputData = ({ Inputdiv, setInputdiv }) => {
  return (
    <>
      <div
        className={`${Inputdiv} top-0 left-0 bg-teal-800 opacity-80 h-screen w-full`}
      ></div>
      <div
        className={`${Inputdiv} top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="bg-teal-950 w-2/6 p-4 rounded-xl">
          <div className="flex justify-end mb-4 text-xl">
            <button onClick={() => setInputdiv("hidden")}>
              <RxCross2 />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 w-full rounded bg-teal-700"
          />
          <textarea
            placeholder="Task Description"
            name="desc"
            rows={10}
            cols={30}
            className="px-3 py-2 w-full rounded bg-teal-700 my-2"
          ></textarea>
          <button
            className="px-3 py-2 bg-teal-800 rounded text-lg font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
