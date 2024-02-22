import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarState = useSelector((store) => store.app.SidebarToggle);

  return (
    sidebarState && (
      <div className="h-screen  col-span-2 m-2 px-4 py-2 shadow-lg">
        <div className="m-3 px-2 py-3 text-lg border-b-2 border-black">
          <ul>
            <li className="p-2 cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="p-2 cursor-pointer">Shorts</li>
            <li className="p-2 cursor-pointer">Subscriptions</li>
          </ul>
        </div>
        <div className="m-3 px-2 py-3 text-lg border-b-2 border-black">
          <ul>
            <li className="p-2 cursor-pointer">You</li>
            <li className="p-2 cursor-pointer">History</li>
          </ul>
        </div>
        <div className="m-3 px-2 py-3 text-lg border-b-2 border-black">
          <h3 className="text-xl">Explore</h3>
          <ul>
            <li className="p-2 cursor-pointer">Trending</li>
            <li className="p-2 cursor-pointer">Music</li>
            <li className="p-2 cursor-pointer">Sports</li>
            <li className="p-2 cursor-pointer">Gaming</li>
            <li className="p-2 cursor-pointer">News</li>
            <li className="p-2 cursor-pointer">Live</li>
          </ul>
        </div>
        <div className="m-3 px-2 py-3 text-sm ">
          <p>&copy; Made by Alok Raturi</p>
        </div>
      </div>
    )
  );
};

export default Sidebar;
