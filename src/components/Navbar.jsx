import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 font-medium py-4 border border-amber-100 rounded-full bg-gray-900 text-white text-sm sm:text-base">
        <NavLink to="/" className={(e) => (e.isActive ? "text-red-300" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          className={(e) => (e.isActive ? "text-red-300" : "")}
        >
          Recipes
        </NavLink>
        <NavLink
          to="/createrecipe"
          className={(e) => (e.isActive ? "text-red-300" : "")}
        >
          Create Recipes
        </NavLink>
        <NavLink
          to="/about"
          className={(e) => (e.isActive ? "text-red-300" : "")}
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
