import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full absolute top-3 ">
      <nav className="bg-[#5500ff] font-mono flex justify-center w-1/12 mx-auto p-5 rounded-3xl">
        <h1 className="text-white font-bold text-3xl">QUIZ</h1>
      </nav>
    </div>
  );
};

export default Navbar;
