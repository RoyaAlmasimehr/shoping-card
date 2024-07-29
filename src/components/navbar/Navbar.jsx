
import { useContext } from 'react';
import './Navbar.css'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
function Navbar() {

  const { addedToCart } = useContext(AppContext);

   
    return (
      <nav>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p className="bag">
          <Link to="/cart ">
            <TiShoppingCart color="white" size="30px" /> 
          </Link>
          {addedToCart > 0 && <span>{addedToCart}</span>}
        </p>
      </nav>
    );
}

export default Navbar;