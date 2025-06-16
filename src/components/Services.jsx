import { Outlet, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-5xl font-thin">Services</h1>
      <button
        className=" mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        onClick={() => navigate("/services/details")}
      >
        {" "}
        More Details
      </button>
      <hr className="my-10"/>
      <Outlet />
    </div>
  );
};

export default Services;
