import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex justify-center gap-10 p-5">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Nav