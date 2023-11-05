import { Link } from "react-router-dom"
import faceSvg from '../../../src/resources/icon-facebook.svg'
import instaSvg from '../../../src/resources/icon-instagram.svg'
import twitterSvg from '../../../src/resources/icon-twitter.svg'
import './Footer.css'

function Footer() {

    return(

        <div className="footer">
            <h2>audiophile</h2>
            <div className='footer-menu'>
                    <Link to="/home" >HOME</Link>
                    <Link to="/headphones" >HEADPHONES</Link>
                    <Link to="/speakers" >SPEAKERS</Link>
                    <Link to="/earphones" >EARPHONES</Link>
            </div>
            <p>Audiophile is an all in one stop to fulfill your audio needs. 
                We’re a small team of music lovers and sound specialists who are devoted to helping 
                you get the most out of personal audio. Come and visit our demo facility - 
                we’re open 7 days a week.</p>
            <div className='baseline'>
                <p>Copyright 2021. All Rights Reserved</p>
                <div>
                    <img src={faceSvg} alt="Facebook icon" />
                    <img src={instaSvg} alt="Instagram icon" />
                    <img src={twitterSvg} alt="Twitter icon" />
                </div>
            </div>
       </div>
    )
        
}

export default Footer