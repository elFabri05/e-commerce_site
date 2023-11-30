// import { useState , useEffect, useMemo } from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './Layout/Layout'
import HomeLayout from './Layout/HomeLayout'

import Headphones from './Components/Category/Headphones/Headphones'
import Earphones from './Components/Category/Earphones/Earphones'
import Speakers from './Components/Category/Speakers/Speakers'

import Xx59 from './Components/ProductDetail/Xx59/Xx59'
import Xx99Mark1 from './Components/ProductDetail/Xx99Mark1/Xx99Mark1'
import Xx99mark2 from './Components/ProductDetail/Xx99Mark2/Xx99Mark2'
import Zx9 from './Components/ProductDetail/Zx9/Zx9'
import Zx7 from './Components/ProductDetail/Zx7/Zx7'
import Yx1 from './Components/ProductDetail/Yx1/Yx1'

// import Menu from './Components/Menu/Menu'
// import CartForm from './Components/CartForm/CartForm'
// import Cart from './Components/Cart/Cart'
// import PassedOrder  from './Components/PassedOrder/PassedOrder'

import './App.css'
import CartForm from './Components/CartForm/CartForm'

function App() {

    const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route  index element={<HomeLayout/>}/>
        <Route path="earphones" element={<Earphones/>}/>
          <Route path="earphones/yx1" element={<Yx1/>}/>  
        <Route path="headphones" element={<Headphones/>} />
          <Route path="headphones/xx59" element={<Xx59/>}/>
          <Route path="headphones/xx99mark1" element={<Xx99Mark1/>} />
          <Route path="headphones/xx99mark2" element={<Xx99mark2/>} /> 
        <Route path="speakers" element={<Speakers/>} />
          <Route path="speakers/zx7" element={<Zx7/>}/>
          <Route path="speakers/zx9" element={<Zx9/>}/>
        <Route path="cart-form" element={<CartForm/>}/>
      </Route>
    ))

   return (
    <>
       <RouterProvider router={router}/>
    </>
   )
}

export default App
