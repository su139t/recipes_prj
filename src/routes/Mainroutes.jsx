import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipies from '../pages/Recipies'
import About from '../pages/About'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/recipies' element={<Recipies/>}></Route>
    </Routes>
  )
}

export default Mainroutes