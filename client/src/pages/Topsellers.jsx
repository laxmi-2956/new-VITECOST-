import React, { useEffect, useState, useRef } from "react";
import "../css/Topsellers.css"
import { Link } from "react-router-dom";

function TopSellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("https://vitecost-project-2.onrender.com/api/products/top-sellers")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
        setLoading(false);
      });
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="top-sellers-container">
      <h2>Top Sellers Across the World</h2>
      <div className="slider-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="slider" ref={sliderRef}>
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <p>₹ {product.price}</p>
                <p
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></p>
              </Link>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default TopSellers;
