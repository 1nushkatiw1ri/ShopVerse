import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">ShopVerse</Link>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      <div className="nav-links">

        <Link to="/login">
          <button>Login</button>
        </Link>

        <button>Wishlist</button>

        <Link to="/cart">
          <button>Cart</button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;