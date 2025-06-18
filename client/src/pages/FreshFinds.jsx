import React, { useEffect, useState } from "react";
import "../css/FreshFinds.css";
import { Link } from "react-router-dom";

const FreshFinds = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://vitecost-project-2.onrender.com/api/products/fresh-finds")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched fresh finds:", data);
        setItems(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.log("Failed to fetch fresh finds:", error);
      });
  }, []);

  return (
    <div className="fresh-finds-container">
      <h2 className="fresh-title">Fresh Finds</h2>
      <div className="fresh-grid">
        {items.map((item, index) => (
          <div className="fresh-item" key={item._id || index}>
            <div className="fresh-image-wrapper">
             <Link to={`/product/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                src={item.image}
                alt={item.title || "Item"}
                className="fresh-image"
              />
                     <h3 className="fresh-name">{item.name}</h3>
            <p className="fresh-desc">{item.description}</p>
             </Link>
            </div>
     
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreshFinds;
