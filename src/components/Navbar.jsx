import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-10 font-medium py-6'>
        <NavLink to="/" className={(e)=> e.isActive ? "text-red-400" : ""}>Home</NavLink>
        <NavLink to="/recipies" className={(e)=> e.isActive ? "text-red-400" : ""}>Recipies</NavLink>
        <NavLink to="/about" className={(e)=> e.isActive ? "text-red-400" : ""}>About</NavLink>
    </div>
  )
}

export default Navbar