import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 py-12  md:px-16 lg:px-32 rounded-2xl bg-amber-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About <span className="text-red-500">TastyBites</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover, share, and create mouth-watering recipes that bring joy to
          your kitchen.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
          alt="Cooking Together"
          className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover h-[300px] md:h-[400px]"
        />

        {/* Text */}
        <div className="w-full lg:w-1/2 text-gray-800 space-y-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Why We Started TastyBites
          </h2>
          <p>
            TastyBites was born from the love of home-cooked meals and the
            desire to share easy, delicious recipes with the world. Whether
            you're a beginner or a pro, we’re here to inspire your next dish.
          </p>
          <p>
            From family favorites to trending TikTok snacks, our goal is to make
            cooking fun, simple, and accessible for everyone.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Over 500+ curated recipes</li>
            <li>Community-driven content</li>
            <li>Easy-to-follow steps & ingredients</li>
            <li>Submit and share your own creations</li>
          </ul>
          <button onClick={() => navigate("/recipes")} className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Explore Recipes
          </button>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="mt-20 text-center italic text-gray-600 text-lg">
        "Cooking is an art, and every recipe is a masterpiece waiting to
        happen."
      </div>
    </div>
  );
};

export default About;
