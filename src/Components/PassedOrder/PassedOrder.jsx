import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import iconOrderConf from '../../../src/resources/home/checkout/icon-order-confirmation.svg'
import './PassedOrder.css'

function PassedOrder({dataArray, totalItems, totalPrice}) {

    const remainingItems = totalItems - 1
    const {itemImg, itemKey, itemPrice, itemQuantity} = Object.assign({}, dataArray[0])

    return(
        <div className='passed-order'>
            <img src={iconOrderConf} alt="Icon order confirmation" />
            <h2>THANK YOU <br />FOR YOUR ORDER</h2>
            <p>You will receive an email confrimation shortly.</p>
            <div className='details-wrapper'>
                <div className='first-ordered-item-wrapper'>
                    <div className='first-ordered-item'>
                        <div >
                            <img src={itemImg} alt={itemKey} />
                            <div>
                                <span className='upper-case'>{itemKey}</span>
                                <br />
                                <span className='grey-font'>$ {itemPrice}</span>
                            </div>
                        </div>
                        <span className='grey-font'> X {itemQuantity}</span>
                    </div>
                    <p className='grey-font'>and {remainingItems} other item(s)</p>                 
                </div>  
                <div className='grand-total'>
                    <h3>GRAND TOTAL</h3>
                    <span>$ {totalPrice}</span>
                </div>
            </div>
            <Link to="">
                <button>BACK TO HOME</button>
            </Link>
        </div>
    )
}

PassedOrder.propTypes = {
    dataArray: PropTypes.array.isRequired,
    totalItems: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
}

export default PassedOrder