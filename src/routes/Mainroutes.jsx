import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'
import SingleRecipe from '../components/SingleRecipe'
import Fav from '../pages/Fav'
import PageNotFound from '../pages/PageNotFound'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/createrecipe' element={<Create/>}></Route>
        <Route path='/recipe/detail/:id' element={<SingleRecipe/>}></Route>
        <Route path='/recipes' element={<Recipes/>}></Route>
        <Route path='/fav' element={<Fav/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
  )
}

export default Mainroutes