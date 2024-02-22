import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <div className="app">
        <Header />
      </div>
      <div className="grid  grid-flow-col grid-cols-12">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
