import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useMediaQuery from '../../Hooks/useMediaQuery'
import PropTypes from 'prop-types'


function Category({path}) {
    const [catProd, setCatProd] = useState([])
    
    const isMobile = useMediaQuery(374)
    const isTablet = useMediaQuery(767)
  
        useEffect(() => {
            let fetchedDataArray = []

            fetch("./data.json")
                .then((resp) => resp.json())
                .then((resp) => {
                    path.forEach((p) => {
                        const catProdData = {
                            'imgMobile' : resp[p].categoryImage.mobile,
                            'imgTablet' : resp[p].categoryImage.tablet,
                            'imgDesktop' : resp[p].categoryImage.desktop,
                            'slug' : resp[p].slug,
                            'newProduct' : resp[p].new,
                            'prodName' : resp[p].name,
                            'prodDescription' : resp[p].description,
                            'category' : resp[p].category, 
                        }
                        fetchedDataArray.push(catProdData)
                    })
                    setCatProd(fetchedDataArray)
                })
                .catch((error) => console.error(error))
          }, [path])

          const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            }

    return (
        <div className='products-wrapper'>
            {catProd.map((prod, index)=> {
                const prodPath = `/${prod.category}/${prod.slug}`
                
                return (<div key={index} className='product'>
                    <img src={isMobile ? prod.imgMobile 
                        : (isTablet ? prod.imgTablet 
                        : prod.imgDesktop)} 
                        alt={prod.slug}/>
                    <div className='product-div'>
                        {prod.newProduct && <h4>New product</h4>}
                        <h2>{prod.prodName}</h2>
                        <p>{prod.prodDescription}</p>
                        <Link to={prodPath} onClick={scrollToTop}>
                            <button type="button">See product</button>
                        </Link>
                    </div>
                </div>)
            })}
        </div>
    )
}

Category.propTypes = {
    path: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Category