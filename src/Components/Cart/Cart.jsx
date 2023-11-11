import { useState , useEffect, useMemo } from "react"
import { Link } from "react-router-dom"
import useStore from "../../Store/store"
import "./Cart.css"

function Cart() {
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
    const {increment, decrement, removeAll} = useStore((state) => ({
        increment: state.increment,
        decrement: state.decrement,
        removeAll: state.removeAll,
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

    return(
        <div>
             <div className='cart-wrapper'>
                <div className="cart-remove-all">
                    <h3>CART({totalItems})</h3>
                    <span className='remove-all-span'onClick={removeAll}>Remove all</span>
                </div>       
                {dataArray.map((data, index) => 
                    <div key={data.itemKey + index}className='summary-item'>
                        <div>
                            <img src={data.itemImg} alt={data.itemKey} />
                            <div>
                                <span>{data.itemKey}</span>
                                <br />
                                <span className='grey-font'>$ {data.itemPrice}</span>
                            </div>
                        </div>
                        {/* counter from ProductDetail */}
                        <div className='counter-wrapper'>
                            <div className="counter">
                                <button className="minus" onClick={() => decrement(data.itemKey)} disabled={data.itemQuantity === 0}>-</button>
                                <span className="count">{data.itemQuantity}</span>
                                <button className="plus" onClick={() => increment(data.itemKey)}>+</button>
                            </div>
                        </div>
                    </div>
                )}
                <div className='summary-price'>
                    <span className='grey-font'>TOTAL</span>
                    <span>$ {totalPrice}</span>
                </div>
                <Link to="">
                    <button className='checkout-button' type="button">CHECKOUT</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart