//  
import { useSelector } from 'react-redux';
import './Cart.css'
import ProductItemInCart from './ProductItemInCart';
// import { AppContext } from '../../context/appContext';

function Cart() {

// const { addedToCart,  addedProducts,  } =
//   useContext(AppContext).state 
  

    const { addedToCart, addedProducts } = useSelector((store) => store);
  

  return (
    <div className="cartContainer">
      {addedToCart > 0 ? (
        <>
          {addedProducts.map((product) => (
            <ProductItemInCart
              key={product.id}
              {...product}
      
            />
          ))}
        </>
      ) : (
        <p>The shopping cart is empty</p>
      )}
    </div>
  );
}

export default Cart;