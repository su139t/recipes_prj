import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="h-200 w-full bg-gray-800 text-white">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
