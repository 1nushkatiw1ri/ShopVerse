import "./SortDropdown.css";

function SortDropdown({ sortOption, setSortOption }) {
  return (
    <div className="sort-dropdown">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>
    </div>
  );
}

export default SortDropdown;