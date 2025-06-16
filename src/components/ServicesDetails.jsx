import { useNavigate, useParams } from "react-router-dom";

const ServicesDetails = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-800 min-h-screen text-white">
      <button
        className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        onClick={() => navigate(-1)} >  ← Go Back 
      </button>

      <h1 className="text-3xl font-bold mb-4">More Services</h1>
      <p className="text-xl mb-2">Price: ₹1,39,900</p>
    </div>
  );
};

export default ServicesDetails;
