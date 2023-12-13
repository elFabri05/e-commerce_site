import { Link } from 'react-router-dom'
import './Hero.css'
import useMediaQuery from '../../Hooks/useMediaQuery'
import bgMobImg from '../../../public/assets/home/mobile/image-header.jpg'
import bgTabImg from '../../../public/assets/home/tablet/image-header.jpg'
import bgDeskImg from '../../../public/assets/home/desktop/image-hero.jpg'

function Hero() {
    const isMobile = useMediaQuery(374)
    const isTablet = useMediaQuery(767)

    return(
        <div className='hero-container' style={{ backgroundImage:`url(${isMobile ? bgMobImg 
                                                                : (isTablet ? bgTabImg : bgDeskImg)})` }}>
            <div className='hero'>
                <h3>NEW PRODUCT</h3>
                <h1>XX99 MARK II HEADPHONES</h1>
                <p>Experience natural, life like audio and exceptional build quality made 
                    for the passionate music enthusiast.</p>
                    <Link to='/headphones/xx99mark2'>
                        <button type="button">See product</button>
                    </Link>
            
            </div>
        </div>

    )
}

export default Hero