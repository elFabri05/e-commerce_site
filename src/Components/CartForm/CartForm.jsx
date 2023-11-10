import { useState , useEffect , useMemo } from 'react'
import { Link } from 'react-router-dom'
import useStore from '../../Store/store'
import './CartForm.css'

function CartForm() {
    const [inputs, setInputs] = useState({})
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

    console.log(storeItems)
    const storeItemsString = JSON.stringify(storeItems);

    const itemSelection = useMemo(() => {
        const items = JSON.parse(storeItemsString);
        return Object.entries(items)
            .filter(([, item]) => item.value > 0)
            .map(([key, item]) => ({ ...item, key }));
    }, [storeItemsString]);
    console.log(itemSelection)


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
                console.error('Error fetching data:', error);
            })
        },[storeItemsString])
        console.log(dataArray)

    function totalPriceFunc(cart){
        return cart.reduce((total, item) => {
            return total + item.itemPrice*item.itemQuantity
        }, 0)
    }
    const totalPrice = totalPriceFunc(dataArray)

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
                        <span className='grey-font'> X {data.itemQuantity}</span>
                    </div>
                )}
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
    )
}

export default CartForm