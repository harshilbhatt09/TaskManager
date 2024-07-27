import React from "react";
import { BsListTask } from "react-icons/bs";
import {
  MdLabelImportant,
  MdOutlineDoneAll,
  MdRemoveDone,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      title: "All tasks",
      icon: <BsListTask />,
      link: "/"
    },
    {
      title: "Important tasks",
      icon: <MdLabelImportant />,
      link: "/imp"
    },
    {
      title: "Completed tasks",
      icon: <MdOutlineDoneAll />,
      link: "/completed"
    },
    {
      title: "Pending tasks",
      icon: <MdRemoveDone />,
      link: "/pending"
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">Harshil Bhatt</h2>
        <h4 className="mb-1 text-teal-400">harshilbhatt9503@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <Link to={items.link} key={i} className="my-2 flex items-center gap-3 hover:bg-teal-500 p-2 rounded cursor-pointer transition-all duration-300">
            {items.icon}
            <span className="text-lg">{items.title}</span>
          </Link>
        ))}
      </div>
      <div>
        <button className="w-full bg-teal-600 rounded p-2 hover:bg-red-800 transition-all duration-300">Log Out</button>
      </div>
    </>
  );
};

export default Sidebar;
