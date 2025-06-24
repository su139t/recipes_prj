import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { id } = useParams();
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();

  const recipe = data.find((recipe) => recipe.id === id);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const imageWatch = watch("image", recipe?.image); // watch image URL field

  useEffect(() => {
    if (recipe) reset(recipe);
  }, [recipe, reset]);

  const UpdateHandler = (formdata) => {
    const index = data.findIndex((r) => r.id === id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...formdata };
    localStorage.setItem("recipes", JSON.stringify(copydata));
    setdata(copydata);
    toast.success("Updated Successfully...");
    navigate("/recipes");
  };

  const DeleteHandler = () => {
    const updatedList = data.filter((r) => r.id !== id);
    localStorage.setItem("recipes", JSON.stringify(updatedList));
    localStorage.removeItem("fav")
    localStorage.setItem("fav", JSON.stringify(updatedList));
    setdata(updatedList);
    toast.success("Deleted Successfully...");
    navigate("/recipes");
  };

  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const UnFavHandler = () => {
    const favfilter = favorite.filter((f) => f.id !== recipe?.id);
    setfavorite(favfilter);
    localStorage.setItem("fav", JSON.stringify(favfilter));
  };

  const FavHandler = () => {
    const copyfav = [...favorite, recipe];
    setfavorite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  if (!recipe)
    return <p className="text-center text-red-500">Recipe not found.</p>;

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 p-5 md:p-10 border rounded-2xl">
      {/* Image and Title Section */}
      <div className="flex flex-col w-full lg:w-1/2 gap-6">
        <div className="flex items-center relative justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-400 break-words">
            {recipe.title}
          </h1>
          {favorite.find((f) => f.id === recipe?.id) ? (
            <i
              onClick={UnFavHandler}
              className="ri-heart-fill absolute text-3xl right-[5%] text-red-500 cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={FavHandler}
              className="ri-heart-line absolute text-3xl right-[5%] text-red-500 cursor-pointer"
            ></i>
          )}
        </div>

        {/* Dynamic Image Preview */}
        <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300 ease-in-out">
          <img
            src={imageWatch}
            alt={recipe.title}
            className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/400x250.png?text=Invalid+Image+URL";
            }}
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col w-full lg:w-1/2 space-y-4">
        <form className="space-y-4" onSubmit={handleSubmit(UpdateHandler)}>
          {/* Image URL */}
          <input
            className="border-0 border-b w-full pb-3 focus:outline-none"
            {...register("image", {
              required: "Image URL is required",
            })}
            type="url"
            placeholder="Recipe Image URL..."
          />
          {errors.image && (
            <small className="text-red-500">{errors.image.message}</small>
          )}

          {/* Title */}
          <input
            className="border-0 border-b w-full py-3 focus:outline-none"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
            })}
            type="text"
            placeholder="Recipe Title..."
          />
          {errors.title && (
            <small className="text-red-500">{errors.title.message}</small>
          )}

          {/* Description */}
          <textarea
            className="border-0 border-b w-full py-3 focus:outline-none"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
            })}
            placeholder="Description..."
          />
          {errors.description && (
            <small className="text-red-500">
              {errors.description.message}
            </small>
          )}

          {/* Ingredients */}
          <textarea
            className="border-0 border-b w-full pt-3 focus:outline-none"
            {...register("ingredient", {
              required: "Ingredients are required",
            })}
            placeholder="// write ingredients separated by comma"
          />
          {errors.ingredient && (
            <small className="text-red-500">
              {errors.ingredient.message}
            </small>
          )}

          {/* Category */}
          <select
            className="border-0 border-b w-full pt-3 focus:outline-none"
            {...register("category", {
              required: "Category is required",
            })}
          >
            <option value="">Select Category</option>
            <option value="soups">Soups</option>
            <option value="desserts">Desserts</option>
            <option value="breakfast">Breakfast</option>
            <option value="main-dishes">Main Dishes</option>
          </select>
          {errors.category && (
            <small className="text-red-500">{errors.category.message}</small>
          )}

          <div className="flex justify-end pt-4 gap-6">
            <button
              type="submit"
              className="bg-blue-900 text-white rounded-xl py-2 px-5 hover:bg-blue-700 transition"
            >
              Update Recipe
            </button>
            <button
              type="button"
              onClick={DeleteHandler}
              className="bg-red-900 text-white rounded-xl py-2 px-5 hover:bg-red-700 transition"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleRecipe;
