import React from "react";

const Navbar = () => {
  return (
    <div className="main flex items-center content-center justify-between px-5 py-4 shadow-lg shadow-black sticky absolute top-0 right-0 bg-white">
      <div className="menu__links flex items-center content-center">
        <p className="mx-2 text-gray-700 font-semibold hover:text-purple-500 cursor-pointer">
          Home
        </p>
        <p className="mx-2 text-gray-700 font-semibold hover:text-purple-500 cursor-pointer">
          Notes
        </p>
        <p className="mx-2 text-gray-700 font-semibold hover:text-purple-500 cursor-pointer">
          About
        </p>
        <p className="mx-2 text-gray-700 font-semibold hover:text-purple-500 cursor-pointer">
          Contact Us
        </p>
      </div>
      <button className=" bg-purple-500 ml-5 px-5 py-1 rounded-2xl text-white hover:bg-purple-400">
        Login
      </button>
    </div>
  );
};

export default Navbar;
