import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../css/InspiredProducts.css";
import { Link } from "react-router-dom";

const InspiredProducts = () => {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://vitecost-project-2-2.onrender.com/api/products/inspired"
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching inspired products:", error);
      }
    };
    fetchData();
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = 220; 
    if (direction === "left") {
      scrollRef.current.scrollLeft -= scrollAmount;
    } else {
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="inspired-container">
      <h2 className="inspired-title">Inspired By Your Shopping</h2>
      <div className="inspired-slider-wrapper">
        <button
          className="slider-btn left"
          onClick={() => handleScroll("left")}
        >
          &lt;
        </button>
        <div className="inspired-slider" ref={scrollRef}>
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={product.image} alt={product.title} />
                <button className="plus-btn">+</button>
                <p className="title">{product.title}</p>
                <p className="description">{product.description}</p>
                <div className="stars">⭐⭐⭐⭐☆</div>
                <p className="price">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
        <button
          className="slider-btn right"
          onClick={() => handleScroll("right")}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default InspiredProducts;
