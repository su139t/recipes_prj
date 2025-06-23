import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../context/RecipeContext";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (formdata) => {
    formdata.id = nanoid();
    const copydata = [...data];
    copydata.push(formdata)
    setdata(copydata)
    localStorage.setItem("recipes",JSON.stringify(copydata))
    // setdata([...data, formdata]);
    toast.success("Created Successfully...")
    reset();
    navigate("/recipes")
  };

  return (
    <div className="flex  bg-amber-50 flex-col lg:flex-row justify-between gap-10 p-5 md:p-10 border rounded-2xl text-black">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-amber-50 to-transparent rounded-b-2xl"></div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col w-full lg:w-1/2 space-y-4">
        <form className="space-y-4" onSubmit={handleSubmit(SubmitHandler)}>
          {/* Image URL */}
          <input
            className="border-0 border-b w-full pb-3 focus:outline-none"
            {...register(
              "image"
              //, {
              // required: "Image URL is required",
              // pattern: {
              //   value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif|svg))$/i,
              //   message: "Enter a valid image URL",
              // },
              // }
            )}
            type="url"
            placeholder="Recipe Image URL..."
          />
          {/* {errors.image && (
            <small className="text-red-400">{errors.image.message}</small>
          )} */}

          {/* Title */}
          <input
            className="border-0 border-b w-full py-3 focus:outline-none"
            {...register(
              "title"
              //   , {
              //   required: "Title is required",
              //   minLength: {
              //     value: 3,
              //     message: "Title must be at least 3 characters",
              //   },
              // }
            )}
            type="text"
            placeholder="Recipe Title..."
          />
          {/* {errors.title && (
            <small className="text-red-400">{errors.title.message}</small>
          )} */}

          {/* Description */}
          <textarea
            className="border-0 border-b w-full py-3 focus:outline-none"
            {...register(
              "description"
              //   , {
              //   required: "Description is required",
              //   minLength: {
              //     value: 10,
              //     message: "Description must be at least 10 characters",
              //   },
              // }
            )}
            placeholder="Description..."
          />
          {/* {errors.description && (
            <small className="text-red-400">
              {errors.description.message}
            </small>
          )} */}

          {/* Ingredients */}
          <textarea
            className="border-0 border-b w-full pt-3 focus:outline-none"
            {...register(
              "ingredient"
              //   , {
              //   required: "Ingredients are required",
              // }
            )}
            placeholder="//write ingredients separated by comma"
          />
          {/* {errors.ingredient && (
            <small className="text-red-400">
              {errors.ingredient.message}
            </small>
          )} */}

          {/* Category */}
          <select
            className="border-0 border-b w-full pt-3 focus:outline-none"
            {...register(
              "category"
              //   , {
              //   required: "Category is required",
              // }
            )}
          >
            <option value="">Select Category</option>
            <option value="soups">Soups</option>
            <option value="desserts">Desserts</option>
            <option value="breakfast">Breakfast</option>
            <option value="main-dishes">Main Dishes</option>
          </select>
          {/* {errors.category && (
            <small className="text-red-400">
              {errors.category.message}
            </small>
          )} */}

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
