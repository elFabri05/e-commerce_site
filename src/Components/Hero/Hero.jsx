import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Hero.css'
import useMediaQuery from '../../Hooks/useMediaQuery'
import bgMobImg from '../../../src/resources/home/mobile/image-header.jpg'
import bgTabImg from '../../../src/resources/home/tablet/image-header.jpg'
import bgDeskImg from '../../../src/resources/home/desktop/image-hero.jpg'


function Hero() {
    const isMobile = useMediaQuery(374)
    const isTablet = useMediaQuery(767)

    return(
        <div className='hero-container' style={{ backgroundImage:`url(${isMobile ? bgMobImg 
                                                                : (isTablet ? bgTabImg : bgDeskImg)})` }}>
            <Navbar />
            <div className='hero'>
                <h3>NEW PRODUCT</h3>
                <h1>XX99 MARK II HEADPHONES</h1>
                <p>Experience natural, life like audio and exceptional build quality made 
                    for the passionate music enthusiast.</p>
                    <Link to='#'>
                        <button type="button">See product</button>
                    </Link>
            
            </div>
        </div>

    )
}

export default Hero