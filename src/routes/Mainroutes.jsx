import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Product from "../components/Product";
import Services from "../components/Services";
import About from "../components/About";
import ProductDetails from "../components/ProductDetails";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/details/:name" element={<ProductDetails />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default Mainroutes;
