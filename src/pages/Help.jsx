import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-[70vh] mx-auto relative">
      <Link
        to="/"
        className="block sm:hidden absolute top-1 right-1 h-4 w-4 cursor-pointer"
      >
        <img
          src="images/img_close.svg"
          alt="close"
          className=" h-4 w-4 cursor-pointer"
        />
      </Link>
      <div className="border-b w-full py-4 border-gray-300 block sm:hidden"></div>
      <h1 className="text-4xl">Help</h1>
      <p className="text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
        risus mauris.
      </p>
    </div>
  );
};

export default Help;
