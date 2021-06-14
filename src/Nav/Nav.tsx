import React from "react";
import "./Nav.scss";

export const Nav: React.FC = () => {
  return (
    <div className="h-14 w-full flex items-center justify-between px-10 mt-2 shadow-xl">
      <input
        placeholder="Search..."
        className="shadow-md bg-gray-100 px-3 py-1 rounded-full w-64 text-lg text-gray-900 focus:outline-none"
      />
      <i className="fas fa-search cursor-pointer"></i>
      <h1 className="text-gray-500 text-4xl cursor-pointer">PokéDex</h1>
    </div>
  );
};
