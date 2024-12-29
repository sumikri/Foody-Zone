import React from "react";

function Navbar() {
  const buttonLabels = ["All", "Breakfast", "Lunch", "Dinner"];

  return (
    <div className="bg-gray-700 h-[241px] flex justify-center items-center px-4 ">
      <nav className="pt-[80px] pl-[120px] pr-[120px] flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl text-black-700">
          F<span className="text-red-700">oo</span>dy Z
          <span className="text-red-700">o</span>ne
        </h1>

        {/* Search Input */}
        <input
          type="text"
          className="bg-transparent border-2 border-red-700 text-white w-[285px] h-[40px] px-4"
          placeholder="Search..."
        />

        {/* Buttons */}
        <div className="space-x-4 flex pl-4  ">
          {buttonLabels.map((label, index) => (
            <button
              key={index}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 "
            >
              {label}
            </button>
          ))}
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;
