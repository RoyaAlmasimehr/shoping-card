
import { useContext } from 'react';
import './ProductItemInCart.css'
import { RiDeleteBin5Line } from "react-icons/ri";
import { AppContext } from '../../context/appContext';

function ProductItemInCart({
  id,
  name,
  price,
  image,
  count,
  totalPrice,

}) {

const { addedToCart, setAddedToCart, addedProducts, setAddedProducts } =
  useContext (AppContext );


  const decreaseHandler = () => {
    const updateAddedProducts = [...addedProducts];
    updateAddedProducts.map((product) => {
      if (product.id == id) {
        product.count -= 1;
        product.totalPrice = product.count * product.price;
        setAddedProducts(updateAddedProducts);
      }
    });
  };

  const increaseHandler = () => {
    const updateAddedProducts = [...addedProducts];
    updateAddedProducts.map((product) => {
      if (product.id == id) {
        product.count += 1;
        product.totalPrice = product.count * product.price;
        setAddedProducts(updateAddedProducts);
      }
    });
  };

  const removeHandler = () => {
    const updateAddedProducts = addedProducts.filter(
      product => product.id !== id
    );
    setAddedProducts(updateAddedProducts);
    setAddedToCart(addedToCart-1)
  };

  return (
    <div>
      <div className="productItemInCart">
        <div className="cardLeft">
          <img src={image} />
        </div>

        <div className="cardMiddle">
          {count > 1 ? (
            <button onClick={decreaseHandler}>-</button>
          ) : (
            <button onClick={removeHandler}>
              <RiDeleteBin5Line />
            </button>
          )}
          <span>{count} </span>
          <button onClick={increaseHandler}>+</button>
        </div>

        <div className="cardRight">
          <h5>{name}</h5>
          <p>price :{totalPrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItemInCart ;