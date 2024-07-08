import { Link } from 'react-router-dom';
import useSWR from 'swr';
import useMediaQuery from '../../Hooks/useMediaQuery';
import PropTypes from 'prop-types';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Category({ path }) {
  const { data, error } = useSWR('/data.json', fetcher);
  
  const isMobile = useMediaQuery(374);
  const isTablet = useMediaQuery(767);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  const catProd = path.map((p) => {
    const product = data[p];
    return {
      imgMobile: product.categoryImage.mobile,
      imgTablet: product.categoryImage.tablet,
      imgDesktop: product.categoryImage.desktop,
      slug: product.slug,
      newProduct: product.new,
      prodName: product.name,
      prodDescription: product.description,
      category: product.category,
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='products-wrapper'>
      {catProd.map((prod, index) => {
        const prodPath = `/${prod.category}/${prod.slug}`;

        return (
          <div key={index} className='product'>
            <img
              src={isMobile ? prod.imgMobile : isTablet ? prod.imgTablet : prod.imgDesktop}
              alt={prod.slug}
            />
            <div className='product-div'>
              {prod.newProduct && <h4>New product</h4>}
              <h2>{prod.prodName}</h2>
              <p>{prod.prodDescription}</p>
              <Link to={prodPath} onClick={scrollToTop}>
                <button type='button'>See product</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Category.propTypes = {
  path: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Category;
