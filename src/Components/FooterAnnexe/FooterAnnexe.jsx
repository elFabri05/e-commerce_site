import './FooterAnnexe.css'
import useMediaQuery from '../../Hooks/useMediaQuery'
import bestgearImg from '/assets/image-best-gear.jpg'
import bestgearImgTablet from '/assets/image-best-gear-tablet.jpg'


function FooterAnnexe() {
    const isMobile = useMediaQuery(374)
    const isTablet = useMediaQuery(767)
    
    return(
        <div className='footer-annexe'>
            <div>
                <img src={isMobile ? bestgearImg : (isTablet ? bestgearImgTablet : bestgearImg)} className="best-gear-img" alt="Best gear image" />
            </div>
            <div className='footer-description'>
                <h2>Bringing you the <span className='highlight'>best</span> audio gear </h2>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                    earphones, speakers, and audio accessories. We have a large showroom and 
                    luxury demonstration rooms available for you to browse and experience
                    a wide range of our products. Stop by our store to meet some of the fantastic people 
                    who make Audiophile the best place to buy your portable audio equipment</p>
            </div>
        </div>
    )
}

export default FooterAnnexe