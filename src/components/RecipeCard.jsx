import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const { id, title, description, image } = recipe;

  return (
    <Link
      to={`/recipe/detail/${id}`}
      className="bg-amber-50 text-black shadow-lg rounded-xl overflow-hidden transition hover:scale-105 duration-200 hover:shadow-2xl w-full max-w-sm mx-auto"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover px-2 py-3 rounded-2xl"
      />
      <div className="px-4 py-2">
        <h1 className="text-lg font-semibold text-red-400 truncate">{title}</h1>
        <p className="text-sm text-gray-700 break-words mt-2">
          {description.slice(0, 100)}...{" "}
          <small className="text-blue-400">more</small>
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
