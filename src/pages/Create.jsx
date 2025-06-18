import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../context/RecipeContext";

const Create = () => {
  // const datalist = []
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (formdata) => {
    console.log(formdata);
    formdata.id = nanoid();
    //  const copydata = [...data];
    //  copydata.push(formdata);
    // setdata(copydata);
    setdata([...data, formdata]);
    reset();
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 p-5 md:p-10 border rounded-2xl">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent rounded-b-2xl"></div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col w-full lg:w-1/2 space-y-4">
        <form className="space-y-4" onSubmit={handleSubmit(SubmitHandler)}>
          <input
            className="border-0 border-b w-full pb-3 focus:outline-none"
            {...register("image")}
            type="url"
            placeholder="Recipe Image URL..."
          />
          <small className="text-red-400">
            This is how error will be shown
          </small>

          <input
            className="border-0 border-b w-full py-3 focus:outline-none"
            {...register("title")}
            type="text"
            placeholder="Recipe Title..."
          />
          <small className="text-red-400">
            This is how error will be shown
          </small>

          <textarea
            className="border-0 border-b w-full py-3 focus:outline-none"
            {...register("description")}
            type="text"
            placeholder="Description..."
          />
          <small className="text-red-400">
            This is how error will be shown
          </small>

          <textarea
            className="border-0 border-b w-full pt-3 focus:outline-none"
            {...register("ingredient")}
            placeholder="//write ingredients separated by comma"
          />
          <small className="text-red-400">
            This is how error will be shown
          </small>

          <select
            className="border-0 border-b w-full pt-3 focus:outline-none"
            {...register("category")}
          >
            <option value="soups">soups</option>
            <option value="desserts">desserts</option>
            <option value="breakfast">breakfast</option>
            <option value="main-dishes">main-dishes</option>
          </select>
          <div className="flex justify-end pt-4">
            <button className="bg-gray-900 text-white rounded-xl py-2 px-5 hover:bg-gray-700 transition">
              Save Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
