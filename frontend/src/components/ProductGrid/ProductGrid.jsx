import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import productImages from "../../assets/productImages";
import SearchBar from "../SearchBar/SearchBar";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import SortDropdown from "../SortDropdown/SortDropdown";

function ProductGrid() {

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

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
<div className="filters">

  <SearchBar
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
  />

  <CategoryFilter
    category={category}
    setCategory={setCategory}
  />

  <SortDropdown
    sortOption={sortOption}
    setSortOption={setSortOption}
  />

</div>

      <div className="product-grid">

        {products
  .filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((product) =>
    category === "All" ? true : product.category === category
  )
  .sort((a, b) => {
    if (sortOption === "low-high") {
      return a.price - b.price;
    }

    if (sortOption === "high-low") {
      return b.price - a.price;
    }

    return 0;
  })
  .map((product) => (

          <ProductCard
    key={product._id}
    id={product._id}
    image={productImages[product.image]} 
    title={product.name}
    price={product.price}
/>

        ))}

      </div>

    </section>

  );

}

export default ProductGrid;