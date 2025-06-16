import { useNavigate, useParams } from "react-router-dom";

const ServicesUpdate = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-800 min-h-screen text-white">
      <button
        className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        onClick={() => navigate(-1)} >  ← Go Back 
      </button>

      <h1 className="text-3xl font-bold mb-4"> Services Update</h1>
      <p className="text-xl mb-2">update...</p>
    </div>
  );
};

export default ServicesUpdate;
