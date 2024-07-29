import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import ProductsList from '../../components/products/ProductsList';


import './HomePage.css'

function HomePage({
  addedToCart,
  setAddedToCart,
  addedProducts,
  setAddedProducts,
}) {
  return (
    <div>
      <Navbar addedToCart={addedToCart} setAddedToCart={setAddedToCart} />

      <ProductsList
        addedToCart={addedToCart}
        setAddedToCart={setAddedToCart}
        addedProducts={addedProducts}
        setAddedProducts={setAddedProducts}
      />
      <Footer />
 
    </div>
  );
}

export default HomePage;