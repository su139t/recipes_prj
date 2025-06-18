import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center gap-20 font-medium py-6 border-1 border-amber-100 rounded-full bg-gray-900">
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
