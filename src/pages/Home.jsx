import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const getrecipe = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/recipes");
      setRecipes(data.recipes.slice(0, 6)); // show only top 6
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    getrecipe();
  }, []);

  return (
    <div className="min-h-screen mb-10 bg-amber-50 px-6 md:px-16 py-10 space-y-20 rounded-2xl">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-5"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-red-500">
          🍽️ Tasty<span className="text-gray-900">Bites</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Discover, cook and enjoy recipes from around the world. Simple, delicious, and made with love!
        </p>
        <Link to="/recipes">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-xl text-lg transition"
          >
            Browse Recipes
          </motion.button>
        </Link>
      </motion.div>

      {/* Featured Recipes */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          🍲 Featured Recipes
        </h2>

        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, i) => (
              <motion.div
                key={recipe.id}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold text-red-600">{recipe.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {recipe.instructions.slice(0, 100)}...
                  </p>
                  <Link
                    to="/recipes"
                    className="text-blue-500 text-sm inline-block hover:underline"
                  >
                    View Recipe →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading recipes...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
