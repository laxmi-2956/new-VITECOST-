import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard"; 


const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("createdAt");
  const [order, setOrder] = useState("asc");

  const fetchFilteredProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products/getallproduct",  {
        params: {
          limit: 20,
          startIndex: 0,
          sort,
          order,
          search,
          category: category === "all" ? undefined : category,
        },
      });
      setProducts(res.data.product);
    } catch (err) {
      alert("Failed to fetch products");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, [search, category, sort, order]);

  return (
    <div className="products-page">
      <h2>Vitacost Products</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="deals">Deals</option>
          <option value="explore">Explore</option>
          <option value="fresh-finds">Fresh Finds</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="createdAt">Newest</option>
          <option value="price">Price</option>
        </select>

        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">⬆️ Ascending</option>
          <option value="desc">⬇️ Descending</option>
        </select>
      </div>

      <div className="products-grid">
        {products.length === 0 ? (
          <p>No products found.</p> 
        ) : (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
