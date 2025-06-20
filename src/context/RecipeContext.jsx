import React, { createContext } from "react";
import { useState } from "react";
import { set } from "react-hook-form";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([{
    id: 1,
    title: "Spaghetti Bolognese",
    image: "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg",
    ingredient:
      "200g spaghetti, 100g minced beef, 1 onion, 2 garlic cloves, 400g canned tomatoes, Salt & pepper, Olive oil",
    description:
      "A classic Italian pasta dish made with rich tomato and meat sauce, perfect for weeknight dinners.",
    category: "soups",
  }]);
  // setdata(recipe);
  console.log(data);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
