import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

function ProductGrid() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await fetch("https://shopverse-uk0y.onrender.com/api/products");

        const data = await response.json();

        setProducts(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);

  return (

    <section className="products">

      <h2>Featured Products</h2>

      <div className="product-grid">

        {products.map((product) => (

          <ProductCard
    key={product._id}
    id={product._id}
    image={product.image}
    title={product.name}
    price={product.price}
/>

        ))}

      </div>

    </section>

  );

}

export default ProductGrid;