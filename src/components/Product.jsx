import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const NavigateHandler = ()=>{
    navigate("/product/details")
  }
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>

      {/* Product 1 */}
      <div className="flex justify-between items-center p-4 border rounded-lg mb-4 shadow-sm">
        <span className="text-lg font-medium">iPhone 15 Pro</span>
        <button onClick={NavigateHandler} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          See Detail
        </button>
      </div>

      {/* Product 2 */}
      <div className="flex justify-between items-center p-4 border rounded-lg mb-4 shadow-sm">
        <span className="text-lg font-medium">Samsung Galaxy S24</span>
        <button onClick={NavigateHandler} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          See Detail
        </button>
      </div>

      {/* Product 3 */}
      <div className="flex justify-between items-center p-4 border rounded-lg mb-4 shadow-sm">
        <span className="text-lg font-medium">OnePlus 12R</span>
        <button onClick={NavigateHandler} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          See Detail
        </button>
      </div>
    </div>
  );
};

export default Product;
