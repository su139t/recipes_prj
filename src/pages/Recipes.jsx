import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext.jsx";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderrecipe = data.map((recipe) => (
    <div
      key={recipe.id}
      className="bg-amber-50 shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl "
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{recipe.title}</h2>
      </div>
    </div>
  ));
  // <div key={recipe.id}>
  //   <h1>{recipe.title}</h1>
  // </div>
  return  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {renderrecipe}
    </div>;
};

export default Recipes;
