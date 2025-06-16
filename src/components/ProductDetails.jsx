import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div className="p-6 bg-gray-800 min-h-screen text-white">
      {/* Go Back Button */}
      {/* <button
        className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        onClick={() => window.history.back()}
      > */}
        <button
        className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        onClick={() => navigate(-1)}
      >
        ← Go Back
      </button>

      <h1 className="text-3xl font-bold mb-4">{params.name}</h1>

      <p className="text-xl mb-2">Price: ₹1,39,900</p>

      {/* <p className="mb-4">
        The iPhone 15 Pro features a strong titanium frame, A17 Pro chip, and a
        stunning 6.1-inch Super Retina XDR display. Designed for performance,
        durability, and photography.
      </p> */}

      <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>6.1-inch OLED Display</li>
        <li>A17 Pro Chip</li>
        <li>48MP Main Camera</li>
        <li>Titanium Body</li>
        <li>USB-C Port</li>
      </ul>
    </div>
  );
};

export default ProductDetails;
