import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { CartContext } from '../../Layout/Layout';
import useStore from '../../Store/store';
import './ProductDetail.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductDetail({ path }) {
  const { data, error } = useSWR('/data.json', fetcher);
  
  const { toggleCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const isMobile = useMediaQuery(374);
  const isTablet = useMediaQuery(767);

  const {
    yx1,
    xx59,
    xx99mark1,
    xx99mark2,
    zx7,
    zx9,
    increment,
    decrement
  } = useStore((state) => ({
    yx1: state.products.yx1.quantity,
    xx59: state.products.xx59.quantity,
    xx99mark1: state.products.xx99mark1.quantity,
    xx99mark2: state.products.xx99mark2.quantity,
    zx7: state.products.zx7.quantity,
    zx9: state.products.zx9.quantity,
    increment: state.increment,
    decrement: state.decrement,
  }));

  const selectItemStore = (selectedSlug) => {
    switch (selectedSlug) {
      case 'yx1':
        return yx1;
      case 'xx59':
        return xx59;
      case 'xx99mark1':
        return xx99mark1;
      case 'xx99mark2':
        return xx99mark2;
      case 'zx7':
        return zx7;
      case 'zx9':
        return zx9;
      default:
        return 0;
    }
  };

  if (error) return <div style={{ color: '#D87D4A' }}>Error loading data</div>;
  if (!data) return <div style={{ color: '#D87D4A' }}>Loading...</div>;

  const product = data[path];
  const itemStore = selectItemStore(product.slug);

  const mobGallery = [
    product.gallery.first.mobile,
    product.gallery.second.mobile,
    product.gallery.third.mobile,
  ];
  const tabGallery = [
    product.gallery.first.tablet,
    product.gallery.second.tablet,
    product.gallery.third.tablet,
  ];
  const deskGallery = [
    product.gallery.first.desktop,
    product.gallery.second.desktop,
    product.gallery.third.desktop,
  ];

  const galleryElements = (isMobile ? mobGallery : isTablet ? tabGallery : deskGallery).map((path, index) => (
    <img key={index} src={path} className={`gallery-img-${index + 1}`} alt={`Gallery Image ${index + 1}`} />
  ));

  const getImageSource = (prod, isMobile, isTablet) => {
    const img = prod.image;
    return isMobile ? img.mobile : isTablet ? img.tablet : img.desktop;
  };

  const otherProductsElements = product.others.map((prod, index) => {
    const prodPath = `/${prod.category}/${prod.slug}`;
    return (
      <div className="other-product" key={index}>
        <img src={getImageSource(prod, isMobile, isTablet)} alt={prod.slug} />
        <h3>{prod.name}</h3>
        <Link to={prodPath}>
          <button type="button">See product</button>
        </Link>
      </div>
    );
  });

  const NavScrollToTop = () => {
    navigate(-1);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  return (
    <div className="product-component">
      <button className="go-back-btn" onClick={NavScrollToTop}>Go back</button>
      <br />
      <div className="product-wrapper">
        <img src={getImageSource(product, isMobile, isTablet)} alt={`${product.name} image`} />
        <div>
          {product.new && <h4>New product</h4>}
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="price">$ {product.price}</div>
          <div className="counter-wrapper">
            <div className="counter">
              <button className="minus" onClick={() => decrement(product.slug)} disabled={itemStore === 0}>-</button>
              <span className="count">{itemStore}</span>
              <button className="plus" onClick={() => increment(product.slug)}>+</button>
            </div>
            <button className="add-to-cart" type="button" onClick={toggleCart}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="description-wrapper">
        <div className="features-div">
          <h3>Features</h3>
          <p>{product.features}</p>
        </div>
        <div className="in-the-box">
          <h3>In the box</h3>
          <ul>
            {product.includes.map((item, index) => (
              <li key={index}><span>x{item.quantity}</span>{item.item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="gallery">
        {galleryElements}
      </div>
      <div className="other-products-wrapper">
        <h3>You may also like</h3>
        <div>
          {otherProductsElements}
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  path: PropTypes.number.isRequired,
};

export default ProductDetail;