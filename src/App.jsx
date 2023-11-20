import { useState , useEffect, useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import useStore from './Store/store'

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
import PassedOrder  from './Components/PassedOrder/PassedOrder'

import './App.css'

function App() {
    const [dataArray, setDataArray] = useState([])
    const storeItems = useStore((state) => ({
        yx1: {id: state.products.yx1.id, 
                value: state.products.yx1.quantity},
        xx59: {id: state.products.xx59.id, 
                value: state.products.xx59.quantity},
        xx99mark1: {id: state.products.xx99mark1.id, 
                value: state.products.xx99mark1.quantity},
        xx99mark2: {id: state.products.xx99mark2.id, 
                value: state.products.xx99mark2.quantity},
        zx7: {id: state.products.zx7.id, 
                value: state.products.zx7.quantity},    
        zx9: {id: state.products.zx9.id, 
                value: state.products.zx9.quantity},
    }))

    const storeItemsString = JSON.stringify(storeItems)

    const itemSelection = useMemo(() => {
        const items = JSON.parse(storeItemsString)
        return Object.entries(items)
            .filter(([, item]) => item.value > 0)
            .map(([key, item]) => ({ ...item, key }))
    }, [storeItemsString])

    useEffect(()=> {
        fetch('./data.json')
            .then((resp) => resp.json())    
            .then((data) =>{
                const itemsRender = itemSelection.map(({id, value, key}) => {
                    return {
                        itemImg : data[id].cartImage,
                        itemPrice : data[id].price,
                        itemQuantity : value,
                        itemKey : key,
                    }
                })
                    setDataArray(itemsRender)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
        },[storeItemsString])

    function totalItemsFunc(cart){
        return cart.length
    }

    const totalItems = totalItemsFunc(dataArray)

    function totalPriceFunc(cart){
        return cart.reduce((total, item) => {
            return total + item.itemPrice*item.itemQuantity
        }, 0)
    }

    const totalPrice = totalPriceFunc(dataArray)

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
        <CartForm dataArray={dataArray} totalPrice={totalPrice}/>
        {/* <Cart dataArray={dataArray} totalItems={totalItems} totalPrice={totalPrice}/> */}
        <PassedOrder dataArray={dataArray} totalItems={totalItems} totalPrice={totalPrice}/>
        <FooterAnnexe />
        <Footer />
      
      </BrowserRouter>
    </>
  )
}

export default App
