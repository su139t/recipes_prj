import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext.jsx";
import RecipeCard from "../components/RecipeCard.jsx";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderrecipe = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-10">
      {data.length > 0 ? renderrecipe : <p className="text-gray-500">No Data Found</p>}
    </div>
  );
};

export default Recipes;
