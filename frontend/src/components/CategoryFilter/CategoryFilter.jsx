import "./CategoryFilter.css";

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="category-filter">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Mobiles">Mobiles</option>
        <option value="Laptops">Laptops</option>
        <option value="Audio">Audio</option>
        <option value="Smart Watches">Smart Watches</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>
  );
}

export default CategoryFilter;