import { BrowserRouter } from 'react-router-dom'
// import { MyContext } from './Context/Context'
// import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Menu from './Components/Menu/Menu'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import FooterAnnexe from './Components/FooterAnnexe/FooterAnnexe'
import Headphones from './Components/Category/Headphones/Headphones'
import Earphones from './Components/Category/Earphones/Earphones'
import Speakers from './Components/Category/Speakers/Speakers'
import Xx99Mark1 from './Components/Product detail/Xx99Mark1/Xx99Mark1'
import Zx9 from './Components/Product detail/Zx9/Zx9'
import Zx7 from './Components/Product detail/Zx7/Zx7'
import Yx1 from './Components/Product detail/Yx1/Yx1'

import CartForm from './Components/CartForm/CartForm'
import Cart from './Components/Cart/Cart'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Hero />  */}
        {/* <Home /> */}
        {/* <Headphones /> */}
        {/* <Speakers />  */}
        {/* <Earphones /> */}
        <Zx9 />
        {/* <Yx1 /> */}
        {/* <Menu /> */}
        {/* <Xx99Mark1 /> */}
        <CartForm />
        <Cart />
        <FooterAnnexe />
        <Footer />
      
      </BrowserRouter>
    </>
  )
}

export default App
