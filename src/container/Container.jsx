import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import { Link, useLocation } from "react-router-dom";

const Container = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const renderDot = (active) => {
    return active ? (
      <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0 -mt-1.5 -mr-3.5"></div>
    ) : null;
  };

  return (
    <div className="w-full  h-full min-h-[70vh] flex ">
      <div className="hidden sm:block w-[6%] border-r">
        <div className="flex flex-col items-center justify-between gap-32 max-h-screen">
          <Link
            to="/logout"
            className="flex flex-col items-center w-[2px] h-[50%] my-6 relative"
          >
            <ExitToAppIcon className="" />
            {renderDot(isActive("/logout"))}
          </Link>
          <div className="flex flex-col items-center gap-10 w-[2px] h-[50%]">
            <Link
              to="/"
              className="flex flex-col items-center w-[2px] h-[50%] relative"
            >
              <CollectionsOutlinedIcon className="" />
              {renderDot(isActive("/"))}
            </Link>
            <Link
              to="/search"
              className="flex flex-col items-center w-[2px] h-[50%]  relative"
            >
              <LiveTvOutlinedIcon className="" />
              {renderDot(isActive("/search"))}
            </Link>
            <Link
              to="/help"
              className="flex flex-col items-center w-[2px] h-[50%]  relative"
            >
              <HelpOutlineOutlinedIcon className="" />
              {renderDot(isActive("/help"))}
            </Link>
          </div>
          <Link
            to="/contact"
            className={`flex flex-col items-center w-[2px] relative rounded-full px-4 py-1.5 ${
              isActive("/contact")
                ? "bg-black text-white"
                : " bg-white text-black"
            }`}
          >
            <SmsOutlinedIcon className="" />
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-[90%] mx-auto mb-4 h-full ">{children}</div>
    </div>
  );
};

export default Container;
