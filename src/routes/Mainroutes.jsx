import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Product from "../components/Product";
import Services from "../components/Services";
import About from "../components/About";
import ProductDetails from "../components/ProductDetails";
import ServicesDetails from "../components/ServicesDetails";
import ServicesUpdate from '../components/ServicesUpdate';

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/details/:name" element={<ProductDetails />}></Route>
      <Route path="/services" element={<Services />}>
        <Route path="/services/details" element={<ServicesDetails />}></Route>
        <Route path="/services/update" element={<ServicesUpdate />}></Route>
      </Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default Mainroutes;
