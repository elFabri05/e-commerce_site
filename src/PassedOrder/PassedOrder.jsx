import { Link } from 'react-router-dom'
import iconOrderConf from '../../../src/resources/home/checkout/icon-order-confirmation.svg'

function PassedOrder() {

    return(
        <div>
            <img src={iconOrderConf} alt="Icon order confirmation" />
            <h2>THANK YOU FOR YOUR ORDER</h2>
            <p>You will receive an email confrimation shortly.</p>
            <div>

            </div>
            <Link to="">BACK TO HOME</Link>
        </div>
    )
}

export default PassedOrder