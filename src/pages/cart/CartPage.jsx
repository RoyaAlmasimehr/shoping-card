import './CartPage.css'
import Navbar from "../../components/navbar/Navbar";
import Cart from '../../components/cart/Cart';

function CartPage({
  addedToCart,
  setAddedToCart,
  addedProducts,
  setAddedProducts,
}) {
  return (
    <div>
      <Navbar addedToCart={addedToCart} />
      <Cart
        addedToCart={addedToCart}
        setAddedToCart={setAddedToCart}
        addedProducts={addedProducts}
        setAddedProducts={setAddedProducts}
      />

    </div>
  );
}

export default CartPage;