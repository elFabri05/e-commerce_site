import { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'

import useMediaQuery from '../../Hooks/useMediaQuery'
import './Navbar.css'
import cartSvg from '../../../src/resources/icon-cart.svg'

function Navbar(){      
    const [isOpen, setIsOpen] = useState(false)
    
    const isTablet = useMediaQuery(767)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }

    const openMenu = <div style={{display:'block' , 
                        position: 'absolute', 
                        zIndex: 1000, 
                        borderRadius: '5px', 
                        background: 'white', 
                        width: '100vw'}}>
                            <Menu /></div>

    const burgerBtn =   <button className="burger-button" onClick={toggleMenu}>
                            <div className="bar" />
                            <div className="bar" />
                            <div className="bar" />
                        </button>
    
    const navMenu =     <div className='nav-bar-menu'>
                            <Link to="/home" >HOME</Link>
                            <Link to="/headphones" >HEADPHONES</Link>
                            <Link to="/speakers" >SPEAKERS</Link>
                            <Link to="/earphones" >EARPHONES</Link>
                        </div>

    return (
        <div>
            <div className="nav-bar">
                {isTablet ? burgerBtn : navMenu}
                <h2>audiophile</h2>
                <img src={cartSvg} alt="Cart icon" />
            </div>
            {isOpen && (isTablet && openMenu)}
        </div>
    )

    }

export default Navbar