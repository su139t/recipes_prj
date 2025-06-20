import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { id } = useParams();
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();

  const recipe = data.find((recipe) => recipe.id == id);
 console.log(data ,id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Reset form when recipe is loaded/found
  useEffect(() => {
    if (recipe) reset(recipe);
  }, [recipe, reset]);

  const SubmitHandler = (formdata) => {
    const index = data.findIndex((r) => r.id === id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...formdata };
    setdata(copydata);
    toast.success("Updated Successfully...");
    navigate("/recipes");
  };

  const DeleteHandler = () => {
    const updatedList = data.filter((r) => r.id !== id);
    setdata(updatedList);
    toast.success("Deleted Successfully...");
    navigate("/recipes");
  };

  // Edge case: invalid ID
  if (!recipe) return <p className="text-center text-red-500">Recipe not found.</p>;

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 p-5 md:p-10 border rounded-2xl">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 h-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover rounded-2xl"
        />
        {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent rounded-b-2xl"></div> */}
      </div>

      {/* Form Section */}
      <div className="flex flex-col w-full lg:w-1/2 space-y-4">
        <form className="space-y-4" onSubmit={handleSubmit(SubmitHandler)}>
          <input
            className="border-0 border-b w-full pb-3 focus:outline-none"
            {...register("image", { required: "Image is required" })}
            type="url"
            placeholder="Recipe Image URL..."
          />
          <input
            className="border-0 border-b w-full py-3 focus:outline-none"
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Recipe Title..."
          />
          <textarea
            className="border-0 border-b w-full py-3 focus:outline-none"
            {...register("description", { required: "Description is required" })}
            placeholder="Description..."
          />
          <textarea
            className="border-0 border-b w-full pt-3 focus:outline-none"
            {...register("ingredient", { required: "Ingredients required" })}
            placeholder="//write ingredients separated by comma"
          />
          <select
            className="border-0 border-b w-full pt-3 focus:outline-none"
            {...register("category", { required: "Category required" })}
          >
            <option value="">Select Category</option>
            <option value="soups">Soups</option>
            <option value="desserts">Desserts</option>
            <option value="breakfast">Breakfast</option>
            <option value="main-dishes">Main Dishes</option>
          </select>

          <div className="flex justify-end pt-4 gap-6">
            <button type="submit" className="bg-blue-900 text-white rounded-xl py-2 px-5 hover:bg-blue-700 transition">
              Update Recipe
            </button>
            <button type="button" onClick={DeleteHandler} className="bg-red-900 text-white rounded-xl py-2 px-5 hover:bg-red-700 transition">
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleRecipe;
