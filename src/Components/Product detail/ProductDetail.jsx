import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import useMediaQuery from '../../Hooks/useMediaQuery'
import './ProductDetail.css'
import useStore from '../../Store/store'

function ProductDetail({ path }) {
    
    const [slug, setSlug] = useState("")
    const [dataLoaded, setDataLoaded] = useState(false)
    const [productImg, setProductImg] = useState(null)
    const [newProduct, setNewProduct] = useState(null)
    const [name, setName] = useState("")
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [features, setFeatures] =useState(null)
    const [items, setItems] = useState([])
    const [mobGallery, setMobGallery] = useState([])
    const [tabGallery, setTabGallery] = useState([])
    const [deskGallery, setDeskGallery] = useState([])
    const [otherProducts, setOtherProducts] = useState([])

    useEffect(() => {
        fetch('./data.json')
        .then((resp) => resp.json())
        .then((resp) => {
            
            setSlug(resp[path].slug)
            setProductImg(resp[path])
            setNewProduct(resp[path].new)
            setName(resp[path].name)
            setDescription(resp[path].description)
            setPrice(resp[path].price)
            setFeatures(resp[path].features)
            setItems(resp[path].includes)

            const mobGalleryImg = [
                resp[path].gallery.first.mobile,
                resp[path].gallery.second.mobile,
                resp[path].gallery.third.mobile,
            ]
            const tabGalleryImg = [
                resp[path].gallery.first.tablet,
                resp[path].gallery.second.tablet,
                resp[path].gallery.third.tablet,
            ]
            const deskGalleryImg = [
                resp[path].gallery.first.desktop,
                resp[path].gallery.second.desktop,
                resp[path].gallery.third.desktop,
            ]
            
            setMobGallery(mobGalleryImg)
            setTabGallery(tabGalleryImg)
            setDeskGallery(deskGalleryImg)
            setOtherProducts(resp[path].others)
            
            setDataLoaded(true)
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
        })
    }, [path])
    
    const { yx1, xx59, xx99mark1, xx99mark2, zx7, zx9, increment, decrement } = useStore((state) => ({
        yx1: state.products.yx1.quantity,
        xx59: state.products.xx59.quantity,
        xx99mark1: state.products.xx99mark1.quantity,
        xx99mark2: state.products.xx99mark2.quantity,
        zx7: state.products.zx7.quantity,
        zx9: state.products.zx9.quantity,
        increment: state.increment,
        decrement: state.decrement,
    }))
    
    function selectItemStore(selectedSlug){
        switch (selectedSlug) {
            case 'yx1' :
                return yx1
            case 'xx59' :
                return xx59
            case 'xx99mark1' :
                return xx99mark1
            case 'xx99mark2' :
                return xx99mark2
            case 'zx7' :
                return zx7
            case 'zx9' :
                return zx9
        }
    }

    const itemStore = selectItemStore(slug)

    const isMobile = useMediaQuery(374)
    const isTablet = useMediaQuery(767)
    
    if(!dataLoaded){
        return <div style={{color: '#D87D4A'}}>Loading...</div>
    }

    const galleryElements = (isMobile
                            ? mobGallery
                            : isTablet
                            ? tabGallery
                            : deskGallery)
                                .map((path, index) => (
                                    <img key={index} 
                                        src={path} 
                                        className={`gallery-img-${index + 1}`} 
                                        alt={`Gallery Image ${index + 1}`}/>)
                            )

    function getImageSource(prod, isMobile, isTablet) {
        var img = prod.image
        return isMobile ? img.mobile : isTablet ? img.tablet : img.desktop
        }

    const otherProductsElements = otherProducts.map((prod, index) => 
                                    (<div className='other-product' key={index}>
                                        <img src={getImageSource(prod, isMobile, isTablet)} 
                                            alt={prod.slug} />
                                        <h3>{prod.name}</h3>
                                        <Link to="">
                                            <button type="button">See product</button>
                                        </Link>
                                    </div>)
                                )

    return(      
         <div className='product-component'>
            <Link to="" className='go-back-btn'>Go back</Link>
            <br />
            <div className='product-wrapper'>
                <img src={getImageSource(productImg, isMobile, isTablet)} 
                    alt={`${name} image`}/>
                <div>
                    {newProduct && <h4>New product</h4>}
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className='price'>$ {price}
                    </div>
                    <div className='counter-wrapper'>
                        <div className="counter">
                            <button className="minus" onClick={() => decrement(slug)} disabled={itemStore === 0}>-</button>
                            <span className="count">{itemStore}</span>
                            <button className="plus" onClick={() => increment(slug)}>+</button>
                        </div>
                        <Link to=''>
                            <button className='add-to-cart' type='button'>Add to cart</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='description-wrapper'>
                <div className='features-div'>
                    <h3>Features</h3>
                    <p>{features}</p>
                </div>
                <div className='in-the-box'>
                    <h3>In the box</h3>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}><span>x{item.quantity}</span>{item.item}</li>))
                        }
                    </ul>
                </div>
            </div>
            <div className='gallery'>
                {galleryElements}
            </div>
            <div className='other-products-wrapper'>
                <h3>You may also like</h3> 
                <div>
                    {otherProductsElements}
                </div>
            </div>
        </div> 
    )
}

    ProductDetail.propTypes = {
        path: PropTypes.number.isRequired,
    }

export default ProductDetail