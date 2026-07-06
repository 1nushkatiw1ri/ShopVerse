import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const response = await fetch(`http://localhost:5000/api/products/${id}`);

        const data = await response.json();

        setProduct(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProduct();

  }, [id]);

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
  }

  return (

    <div
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        display: "flex",
        gap: "40px",
        alignItems: "center",
      }}
    >

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "350px",
          borderRadius: "12px",
        }}
      />

      <div>

        <h1>{product.name}</h1>

        <h2 style={{ color: "#2563eb" }}>
          ₹ {product.price}
        </h2>

        <p style={{ margin: "20px 0" }}>
          {product.description}
        </p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>

      </div>

    </div>

  );
}

export default Product;