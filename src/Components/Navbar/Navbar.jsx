import { useState , useContext } from 'react'
import { Link , useLocation } from 'react-router-dom'
import { CartContext} from '../../Layout/Layout'
import Menu from '../Menu/Menu'
import FadedComponent from '../FadedComponent/FadedComponent'
import Cart from '../Cart/Cart'

import useMediaQuery from '../../Hooks/useMediaQuery'
import './Navbar.css'
import cartSvg from '../../../src/resources/icon-cart.svg'

function Navbar(){      
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const { toggleCart, isCartOpen } = useContext(CartContext)

    const location = useLocation()
    const isTablet = useMediaQuery(767)
    
    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    if (isCartOpen){
        menuIsOpen == false
    }

    const openMenu = <div>
                        <FadedComponent />
                        <div style={{display:'block' , 
                            position: 'absolute', 
                            zIndex: 1000, 
                            borderRadius: '5px', 
                            background: 'white', 
                            width: '100vw'}}>
                            <Menu toggleMenu={toggleMenu}/>
                        </div>
                    </div>

    const burgerBtn =   <button className="burger-button" onClick={toggleMenu}>
                            <div className="bar" />
                            <div className="bar" />
                            <div className="bar" />
                        </button>
    
    const navMenu =     <div className='nav-bar-menu'>
                            <Link to="/" >HOME</Link>
                            <Link to="headphones" >HEADPHONES</Link>
                            <Link to="speakers" >SPEAKERS</Link>
                            <Link to="earphones" >EARPHONES</Link>
                        </div>

    return (
        <nav>
            <div className="nav-bar">
                {isTablet ? burgerBtn : navMenu}
                <Link to="/" className='title' onClick={() => menuIsOpen && toggleMenu()}>audiophile</Link>
                <Link to={location.pathname} onClick={toggleCart}><img src={cartSvg} alt="Cart icon" /></Link>
            </div>
            {menuIsOpen && (isTablet && openMenu)}
            {isCartOpen && <Cart />}
        </nav>
    )
}
// 
// Navbar.propTypes = {
//     cartIsOpen: PropTypes.bool.isRequired,
//     toggleCart: PropTypes.func.isRequired,
// }

export default Navbar