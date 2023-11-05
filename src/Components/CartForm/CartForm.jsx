import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CartForm.css'

function CartForm() {
    const [inputs, setInputs] = useState({})

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

    return(
        <div className='cart-form'>
            <Link to="" className='go-back-btn'>Go back</Link>
            <br />
            <div className='cart-form-wrapper'>
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
                {/* LOGIC for selected items */}
                
            </div>
        </div>
    )
}

export default CartForm