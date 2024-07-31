
import { useContext } from 'react';
import './ProductItemInCart.css'
import { RiDeleteBin5Line } from "react-icons/ri";
import { AppContext } from '../../context/appContext';
import { useDispatch } from 'react-redux';

function ProductItemInCart({
  id,
  name,
  price,
  image,
  count,
  totalPrice,

}) {

const dispatch =
 useDispatch()


  const decreaseHandler = () => {
dispatch({ type: "DECREASE_IN_CART" ,id});




  };

  const increaseHandler = () => {

dispatch({ type: "INCREASE_IN_CART",id });



  
  };

  const removeHandler = () => {

dispatch({ type: "REMOVE_FROM_CART" ,id });






      
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