import { Link } from "react-router-dom"
import useStore from "../../Store/store"
import PropTypes from 'prop-types'
import "./Cart.css"

function Cart({dataArray, totalItems, totalPrice}) {
    const {increment, decrement, removeAll} = useStore((state) => ({
        increment: state.increment,
        decrement: state.decrement,
        removeAll: state.removeAll,
    }))

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
             <div className='cart-wrapper'>
                <div className="cart-remove-all">
                    <h3>CART({totalItems})</h3>
                    <span className='remove-all-span'onClick={removeAll}>Remove all</span>
                </div>       
                {cartElements}
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

Cart.propTypes = {
    dataArray: PropTypes.array.isRequired,
    totalItems: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
}

export default Cart