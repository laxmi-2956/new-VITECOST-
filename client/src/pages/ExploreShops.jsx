// import React, { useEffect, useState } from "react";
// import "./ExploreShops.css";

// const ExploreShops = () => {
//   const [shops, setShops] = useState([]);

//   useEffect(() => {
//     const fetchShops = async () => {
//       try {
//         const response = await fetch("https://vitecost-project-2.onrender.com/api/products/explore-shops");
//         const data = await response.json();
//         console.log("Fetched shops data:", data);
//         setShops(data);
//       } catch (error) {
//         console.error("Failed to fetch shops:", error);
//       }
//     };

//     fetchShops();
//   }, []);

//   return (
//     <div className="explore-shops-container">
//       <h2>Explore Our Shops</h2>
//       <div className="shops-grid">
//         {shops.map((shop) => (
//           <div className="shop-card" key={shop._id}>
//             <img src={shop.image} alt={shop.title} />
//             <div className="shop-title">{shop.title}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default ExploreShops;
// import React, { useEffect, useState } from "react";
// import "./ExploreShops.css";

// const ExploreShops = () => {
//   const [shops, setShops] = useState([]);

//   useEffect(() => {
//     fetch("https://vitecost-project-2.onrender.com/api/products/explore-shops")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched shops:", data);  // Debug here
//         setShops(Array.isArray(data) ? data : []);
//       })
//       .catch((error) => {
//         console.error("Failed to fetch shops:", error);
//       });
//   }, []);

//   return (
//     <div className="explore-shops-container">
//       <h2>Explore Our Shops</h2>
//       <div className="shops-grid">
//         {shops.map((shop) => (
//           <div className="shop-card" key={shop._id}>
//             <img
//               src={shop.image}
//               alt={shop.name || shop.title || "Shop Image"}
//               style={{ width: "200px", height: "150px", objectFit: "cover" }}
//             />

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExploreShops;

import React, { useEffect, useState } from "react";
import "../css/ExploreShops.css";
import { Link } from "react-router-dom";

const ExploreShops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("https://vitecost-project-2.onrender.com/api/products/explore-shops")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched shops:", data);
        setShops(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Failed to fetch shops:", error);
      });
  }, []);

  return (
    <div className="explore-shops-container">
      <h2>Explore Our Shops</h2>
      <div className="shops-grid">
        {shops.map((shop, index) => (
          <div
            className={`shop-card ${index === 0 ? "large-card" : ""}`}
            key={shop._id || index}
          >
           <Link  to={`/product/${shop._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="image-container">
              <img
                src={shop.image}
                alt={shop.name || shop.title || "Shop Image"}
                className="shop-image"
              />
            </div>
            <div className="text-container">
              <h3 className="shop-title">{shop.title}</h3>
              {shop.description && (
                <p className="shop-description">{shop.description}</p>
              )}
            </div>
           </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreShops;
  