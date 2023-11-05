import { useState  , useEffect} from "react"
import { Link , useLocation } from "react-router-dom"
import "./Cart.css"


function Cart() {
    // const [cartDispProd, setCartDispProd] = useState([])
    const [ordProdData, setOrdProdData] = useState([])
    const [count, setCount] = useState()
    const { state } = useLocation()   

    useEffect(() => {
        if (!state) {
            return
          }

        localStorage.setItem( state.name , JSON.stringify(state) )
        
        if (state.count === 0) {
            localStorage.removeItem(state.name)
        }
        
        const cartProdArray = Object.keys(localStorage).map((key) => {
             return JSON.parse(localStorage.getItem(key)) })

             setOrdProdData(cartProdArray)
    },[state])
        
    useEffect(() => {
        let fetchedDataArray = []

        fetch('./data.json', {mode : "cors"})
            .then((resp) => resp.json())
            .then((resp) => {
                resp.forEach((r) => {
                    const prodData = {
                                'cartImage' : r.cartImage,
                                'prodPrice' : r.price,
                                'prodName' : r.slug,
                            }
                            fetchedDataArray.push(prodData)
                        })
                        // setCartDispProd(fetchedDataArray)
                })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    },[])

    const removeAll = () => {
            localStorage.clear()
            setOrdProdData([])
        }   

    return(
        <div className="cart-wrapper">
            <div>
                <span>Cart()</span>
                <button onClick={removeAll}>Remove all</button>
            </div>
            <div>
                {ordProdData.map((prod, index) => (
                    <div key={index}>
                    
                        <div className="counter">
                            <button className="minus" onClick={() => count > 0 && (count - 1)}>-</button>
                            <span className="count">{prod.count}</span>
                            <button className="plus" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                    </div>))}
            </div>
            <div>
                <span>Total</span>
                <span>Value</span>
            </div>
            <Link to="">CHECKOUT</Link>
        </div>
    )
}

export default Cart