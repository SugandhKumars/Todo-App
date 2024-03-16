import React, { useState } from "react";
import Taskform from "./Taskform";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-xl bg-blue-300  h-14 shadow-sm   m-auto">
        <div className="h-full flex justify-center items-center ">
          <p className="font-extrabold text-blue-500 font-['satoshi_variable'] text-2xl">
            Todo List
          </p>
        </div>
        <div className="w-full">
          <Taskform />
        </div>
      </div>
    </>
  );
};

export default Navbar;
