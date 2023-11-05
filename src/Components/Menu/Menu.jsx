import { Link } from 'react-router-dom'
import './Menu.css'
import headphonesImg from '../../../src/resources/image-category-thumbnail-headphones.png'
import speakerImg from '../../../src/resources/image-category-thumbnail-speakers.png'
import earphonesImg from '../../../src/resources/image-category-thumbnail-earphones.png'


function Menu() {

    return(
        <div className='menu'>
            <div className='menu-div'>
                    <img src={headphonesImg} className="option-image" alt="Image xx99 mark one headphones"/>
                <div className='option-div'>
                    <h3>HEADPHONES</h3>
                    <Link to="" className='shop-btn'>Shop <span className='arrow-span'>{'>'}</span></Link>
                </div>
            </div>
            <div className='menu-div'>
                    <img src={speakerImg} className="option-image" alt="Image zx7 speaker" />
                <div className='option-div'>
                    <h3>SPEAKERS</h3>
                    <Link to="" className='shop-btn'>Shop <span className='arrow-span'>{'>'}</span></Link>
                </div>
            </div>
            <div className='menu-div'>
                    <img src={earphonesImg} className="option-image" alt='Image thumbnail earphones' />
                <div className='option-div'>
                    <h3>EARPHONES</h3>
                    <Link to="" className='shop-btn'>Shop <span className='arrow-span'>{'>'}</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Menu