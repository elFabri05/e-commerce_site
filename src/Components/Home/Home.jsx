import { Link } from 'react-router-dom'
import './Home.css'
import useMediaQuery from '../../Hooks/useMediaQuery'
import yx1EarImgMob from '/assets/home/mobile/image-earphones-yx1.jpg'
import zx7SpeaImgMob from '/assets/home/mobile/image-speaker-zx7.jpg'
import zx9SpeaImgMob from '/assets/home/mobile/image-speaker-zx9.png'
import yx1EarImgDesk from '/assets/home/desktop/image-earphones-yx1.jpg'
import zx7SpeaImgDesk from '/assets/home/desktop/image-speaker-zx7.jpg'
import zx9SpeaImgDesk from '/assets/home/desktop/image-speaker-zx9.png'
import yx1EarImgTab from '/assets/home/tablet/image-earphones-yx1.jpg'
import zx7SpeaImgTab from '/assets/home/tablet/image-speaker-zx7.jpg'
import zx9SpeaImgTab from '/assets/home/tablet/image-speaker-zx9.png'

import patternCircles from '/assets/home/pattern-circles.svg'

function Home() {

    const isMobile = useMediaQuery(374)
    const isTablet = useMediaQuery(767)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        }

    return(
        <div className='home'>
            <div className='zx9-speaker' style={{ backgroundImage:`url(${patternCircles})` }}>
                <img src={isMobile ? zx9SpeaImgMob : ( isTablet ? zx9SpeaImgTab : zx9SpeaImgDesk)} 
                    className='zx9-speaker-img' alt="ZX9 speaker mobile image" />
                <h2>ZX9 SPEAKER</h2>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to='/speakers/zx9' onClick={scrollToTop}>SEE PRODUCT</Link>
            </div>
            <div className='zx7-speaker' style={{ backgroundImage:`url(${isMobile ? zx7SpeaImgMob 
                : (isTablet ? zx7SpeaImgTab : zx7SpeaImgDesk)})` }}>
                <h2>ZX7 SPEAKER</h2>
                    <Link to='/speakers/zx7' onClick={scrollToTop}>SEE PRODUCT</Link>
            </div>
            <div className='yx1-earphones' >
                <img src={isMobile ? yx1EarImgMob : (isTablet ? yx1EarImgTab : yx1EarImgDesk)} 
                    className='yx1-earphones-img' alt="YX1 earphones mobile image" />
                <div>
                    <h2>YX1 EARPHONES</h2>
                        <Link to='/earphones/yx1' onClick={scrollToTop}>SEE PRODUCT</Link>
                </div>
            </div>
        </div>
    )
}

export default Home