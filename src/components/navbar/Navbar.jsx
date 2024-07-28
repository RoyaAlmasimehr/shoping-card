import { useState } from 'react';
import './Navbar.css'
import { TiShoppingCart } from "react-icons/ti";

function Navbar() {
    const[addedToCart,setAddedToCart]=useState(0)
    return (
      <nav>
        <p>
          <a href=" #">home</a>
        </p>
        <p className="bag">
          <a href="#">
            <TiShoppingCart color="white" size="30px" />
          </a>
          {addedToCart > 0 && <span>{addedToCart}</span>}
        </p>
      </nav>
    );
}

export default Navbar;