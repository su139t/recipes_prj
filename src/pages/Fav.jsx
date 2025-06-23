import React from "react";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const favdata = JSON.parse(localStorage.getItem("fav"));
  console.log("fav recipe", favdata);
  const renderrecipe = favdata.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-10">
      {favdata.length > 0 ? (
        renderrecipe
      ) : (
        <p className="text-gray-500">No Data Found</p>
      )}
    </div>
  );
};

export default Fav;
