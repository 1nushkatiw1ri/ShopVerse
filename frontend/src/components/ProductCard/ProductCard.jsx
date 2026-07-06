import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ image, title, price, id }) {
  return (
    <div className="product-card">

      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>₹ {price}</p>

      <Link to={`/product/${id}`}>
        <button>View Product</button>
      </Link>

    </div>
  );
}

export default ProductCard;