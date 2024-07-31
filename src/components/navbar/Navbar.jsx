
import './Navbar.css'
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
 

  const addedToCart =useSelector(function(store){
    return store.addedToCart
  })

console.log(addedToCart);
  return (
    <nav>
      <p>
        <Link to="/">home</Link>
      </p>
      <p className="bag">
        <Link to="/cart">
          <TiShoppingCart color="white" size="30px" />
        </Link>
        {addedToCart > 0 && <span>{addedToCart}</span>}
      </p>
    </nav>
  );
}

export default Navbar;
