import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './CartForm.css'

function CartForm({dataArray, totalPrice}) {
    const [inputs, setInputs] = useState({})

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

    return(
        <div className='cart-form-wrapper'>
            <Link to="" className='go-back-btn'>Go back</Link>
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
                            />
                        </label>
                        <h5>Payment Method</h5>
                        <div className='radio-wrapper'>
                            <input className='radio-input'
                                type="radio" 
                                id="eMoney"
                                name="paymentMethod"
                            />
                            <label className='radio-label' htmlFor="eMoney">e-Money</label>
                        </div>
                        <div className='radio-wrapper'>
                            <input className='radio-input'
                                type="radio" 
                                id="cash"
                                name="paymentMethod"
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
                    <Link to="">
                        <button type="button">CONTINUE & PAY</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

CartForm.propTypes = {
    dataArray: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,
}

export default CartForm