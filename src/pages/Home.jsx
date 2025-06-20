import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from '../../node_modules/axios/lib/axios';

const Home = () => {
  //   const dummyRecipes = [
  //   {
  //     id: "1",
  //     title: "Creamy Tomato Soup",
  //     description: "A rich and creamy tomato soup perfect for cozy evenings.",
  //     image: "https://imgs.search.brave.com/RxLCcbWW6TOcHlY33lpNjNyyXvweATJso3bvH3xyfTY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxscmVjaXBlcy5j/b20vdGhtYi9maHM1/YmliaDJ0aUlWalBp/STBTMUdZQ1ZFOWM9/LzgwMHg1MzMvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/YXItdGstbXVzdC1t/YWtlLXJlY2lwZXMt/dGhhdC10ZWxsLXRo/ZS1zdG9yeS1vZi1q/dW5ldGVlbnRoLTEx/NzQ3OTkyLVZBVC1q/dWxpYS1oYXJ0YmVj/ay0wMTMtNHgzLTQt/NWM0MjI5ODdkZjg0/NGFhMjhiYTE0OGI4/M2YxYTQwZTMuanBn",
  //   },
  //   {
  //     id: "2",
  //     title: "Chocolate Lava Cake",
  //     description: "Decadent dessert with a gooey molten chocolate center.",
  //     image: "https://imgs.search.brave.com/QyoHnRhwxvkt2UiI7tgJiN-_RmGhlOZbPnoti2gNAh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyMi8wNi9CYXJi/ZWN1ZS1yZWNpcGVz/LTczNWE5Y2MuanBn/P3F1YWxpdHk9OTAm/cmVzaXplPTU1Niw1/MDU",
  //   },
  //   {
  //     id: "3",
  //     title: "Avocado Toast with Egg",
  //     description: "Healthy and quick breakfast with creamy avocado and poached egg.",
  //     image: "https://imgs.search.brave.com/aOdkkIVMk-AZBtT0ShmmEmqSrYYVOBEmvAzJqTFvtKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lYXN5/ZmFtaWx5cmVjaXBl/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDUvTGF5/ZXJlZC1DaGlja2Vu/LUVuY2hpbGFkYS1D/YXNzZXJvbGUtUmVj/aXBlLmpwZw",
  //   },
  // ];

  const getrecipe = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/recipes");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen rounded-2xl bg-amber-50 px-6 md:px-16 py-10 space-y-20">
      {/* Animated Logo & Hero */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-red-500">
          🍽️ Tasty<span className="text-gray-900">Bites</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Your ultimate destination to explore, cook, and share mouth-watering
          recipes.
        </p>
        <Link to="/recipes">
          <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-xl text-lg transition">
            Browse Recipes
          </button>
        </Link>
      </motion.div>
      <button onClick={getrecipe} className="mt-6 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-xl text-lg transition">
        Get Recipes
      </button>
      {/* Featured Recipes Section */}
      {/* <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          🍲 Featured Recipes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-red-600">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {recipe.description.slice(0, 80)}...
                </p>
                <Link
                  to="/recipes"
                  className="text-blue-500 text-sm mt-3 inline-block hover:underline"
                >
                  View Recipe
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Home;
