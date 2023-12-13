import { useContext } from "react"
import { Link } from "react-router-dom"
import useStore from "../../Store/store"
import { CartContext, StoreContext } from "../../Layout/Layout"
import FadedComponent from "../FadedComponent/FadedComponent"
import "./Cart.css"

function Cart() {
    const {dataArray, totalPrice} = useContext(StoreContext)
    const { toggleCart } = useContext(CartContext)
    const {increment, decrement, removeAll} = useStore((state) => ({
        increment: state.increment,
        decrement: state.decrement,
        removeAll: state.removeAll,
    }))

    function totalItemsFunc(cart){
        return cart.length
    }

    const totalItems = totalItemsFunc(dataArray)

    const cartElements = dataArray.map((data, index) => 
                            <div key={data.itemKey + index}className='summary-item'>
                                <div>
                                    <img src={data.itemImg} alt={data.itemKey} />
                                    <div>
                                        <span>{data.itemKey}</span>
                                        <br />
                                        <span className='grey-font'>$ {data.itemPrice}</span>
                                    </div>
                                </div>
                                <div className='counter-wrapper'>
                                    <div className="counter">
                                        <button className="minus" onClick={() => decrement(data.itemKey)} 
                                                                    disabled={data.itemQuantity === 0}>-</button>
                                        <span className="count">{data.itemQuantity}</span>
                                        <button className="plus" onClick={() => increment(data.itemKey)}>+</button>
                                    </div>
                                </div>
                            </div>
                        )
    
    return(
        <div>
            <FadedComponent />
            <div className='cart-wrapper'>
                <div className="cart-options">
                    <h3>CART ({totalItems})</h3>
                    <div>
                        <span className='remove-all-span' onClick={removeAll}>Remove all</span>
                        <br />
                        <span className="continue-shopping-span" onClick={toggleCart}>Continue shopping</span>
                    </div>
                </div>       
                {cartElements}
                <div className='summary-price'>
                    <span className='grey-font'>TOTAL</span>
                    <span>$ {totalPrice}</span>
                </div>
                <Link to="cart-form">
                    <button className='checkout-button' type="button" onClick={toggleCart}>CHECKOUT</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart