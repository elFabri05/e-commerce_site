import { useState ,  useEffect, useMemo, createContext } from "react"
import Navbar from "../Components/Navbar/Navbar"
import FooterAnnexe from "../Components/FooterAnnexe/FooterAnnexe"
import Footer from "../Components/Footer/Footer"
import { Outlet } from "react-router-dom"
import useStore from "../Store/store"

export const CartContext = createContext()
export const StoreContext = createContext()

function Layout(){
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [dataArray, setDataArray] = useState([])

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

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

    console.log(storeItems)

    const storeItemsString = JSON.stringify(storeItems)

    const itemSelection = useMemo(() => {
        const items = JSON.parse(storeItemsString)
        return Object.entries(items)
            .filter(([, item]) => item.value > 0)
            .map(([key, item]) => ({ ...item, key }))
    }, [storeItemsString])

    useEffect(()=> {
        fetch('../data.json')
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

    function totalPriceFunc(cart){
        return cart.reduce((total, item) => {
            return total + item.itemPrice*item.itemQuantity
        }, 0)
    }

    const totalPrice = totalPriceFunc(dataArray)

    return(
        <StoreContext.Provider value={{dataArray, totalPrice}}>
            <CartContext.Provider value={{ toggleCart }}>
                <Navbar isCartOpen={isCartOpen}/>
                <Outlet/>
                <FooterAnnexe />
                <Footer />
            </CartContext.Provider>
        </StoreContext.Provider>
    )
}

export default Layout