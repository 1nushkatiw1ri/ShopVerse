import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ image, title, price, id }) {

  const addToCart = () => {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  console.log("Cart before:", cart);

  const existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id,
      title,
      image,
      price,
      quantity: 1,
    });
  }

  console.log("Cart after:", cart);

  localStorage.setItem("cart", JSON.stringify(cart));

  console.log("Saved:", localStorage.getItem("cart"));

  alert("Product added to cart!");
};

  return (
    <div className="product-card">

      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>₹ {price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>

      <Link to={`/product/${id}`}>
        <button>View Product</button>
      </Link>

    </div>
  );
}

export default ProductCard;