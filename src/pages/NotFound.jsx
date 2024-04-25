import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-[70vh] mx-auto">
      <h1 className="text-4xl">404 - Not Found</h1>
      <Link
        to="/"
        className="bg-blue-500 rounded-xl hover:cursor-pointer hover:opacity-20  py-2 px-4"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
