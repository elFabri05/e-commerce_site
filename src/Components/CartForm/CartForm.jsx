import { useState, useContext } from 'react'
import { StoreContext } from "../../Layout/Layout"
import { useNavigate } from 'react-router-dom'
import './CartForm.css'
import PassedOrder from '../PassedOrder/PassedOrder'

function CartForm() {
    const [inputs, setInputs] = useState({})
    const [passedOrder, setPassedOrder] = useState(false)
    const {dataArray, totalItems, totalPrice} = useContext(StoreContext)

    const navigate = useNavigate()

    function vatFunc(value){
        return value*20/100
    }

    const vat = vatFunc(totalPrice)

    function grandTotalFunc(value){
        return value + 50
    }

    const grandTotal = grandTotalFunc(totalPrice)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setInputs(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "radio" ? checked : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(inputs)
        // Setting data to the backend logic 
      }

    const selectedItemsElements = dataArray.map((data, index) => 
                                    <div key={data.itemKey + index} className='summary-item'>
                                        <div>
                                            <img src={data.itemImg} alt={data.itemKey} />
                                            <div>
                                                <span className='upper-case'>{data.itemKey}</span>
                                                <br />
                                                <span className='grey-font'>$ {data.itemPrice}</span>
                                            </div>
                                        </div>
                                        <span className='grey-font'> X {data.itemQuantity}</span>
                                    </div>
                                )

        const NavScrollToTop = () => {
            navigate(-1)

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            }

    const togglePassedOrder = ()=> {
        setPassedOrder(!passedOrder)
    }
    return(
        <div className='cart-form-wrapper'>
            <button className='go-back-btn' onClick={NavScrollToTop}>Go back</button>
            <br />
            <div className='form-summary'>
                <div className='cart-form'>
                    <h2>CHECKOUT</h2>
                    <form onSubmit={handleSubmit}>
                        <h5>BILLING DETAILS</h5>
                        <label>Name <br />
                            <input 
                            type="text" 
                            name="name"
                            placeholder="Alexei Weird"
                            value={inputs.name}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <br />
                        <label>Email Address <br />
                            <input 
                            type="email" 
                            name="email"
                            placeholder="alexeiweird@gmail.com"
                            value={inputs.email}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <br />
                        <label>Phone Number <br />
                            <input 
                            type="text" 
                            name="phoneNumber"
                            placeholder="+1 202-555-0136"
                            value={inputs.phoneNumber}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <h5>SHIPPING INFO</h5>
                        <label>Your Address <br />
                            <input 
                            type="text" 
                            name="address"
                            placeholder="1137 Williams Avenue"
                            value={inputs.address}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <br />
                        <label>ZIP Code <br />
                            <input 
                            type="text" 
                            name="zipCode"
                            placeholder="10001"
                            value={inputs.zipCode}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <br />
                        <label>City <br />
                            <input 
                            type="text" 
                            name="city"
                            placeholder="New York"
                            value={inputs.city}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <br />
                        <label>Country <br />
                            <input 
                            type="text" 
                            name="country"
                            placeholder="United States"
                            value={inputs.country}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <h5>Payment Method</h5>
                        <div className='radio-wrapper'>
                            <input className='radio-input'
                                type="radio" 
                                id="eMoney"
                                name="paymentMethod"
                                required
                            />
                            <label className='radio-label' htmlFor="eMoney">e-Money</label>
                        </div>
                        <div className='radio-wrapper'>
                            <input className='radio-input'
                                type="radio" 
                                id="cash"
                                name="paymentMethod"
                                required
                            />
                            <label className='radio-label' htmlFor="cash">Cash on Delivery</label>
                        </div>
                    </form>
                </div>
                <div className='summary-wrapper'>
                    <h3>SUMMARY</h3>
                    {selectedItemsElements}
                    <div className='summary-price'>
                        <span className='grey-font'>TOTAL</span>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='summary-price'>
                        <span className='grey-font'>SHIPPING</span>
                        <span>$ 50</span>
                    </div>
                    <div className='summary-price'>
                        <span className='grey-font'>VAT (INCLUDED)</span>
                        <span>$ {vat}</span>
                    </div>
                    <div className='summary-price'>
                        <span className='grey-font'>GRAND TOTAL</span>
                        <span className='orange-font'>$ {grandTotal}</span>
                    </div>
                    <button type="button" onClick={togglePassedOrder}>CONTINUE & PAY</button>
                </div>

            </div>
            {passedOrder && <PassedOrder />}
        </div>
    )
}

export default CartForm