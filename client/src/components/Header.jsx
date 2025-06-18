// import React, { useState } from 'react';
// import "../css/Header.css"
// import { FaSearch, FaUserCircle, FaShoppingCart, FaBars } from 'react-icons/fa';
// import { Link, useNavigate } from "react-router-dom";
// import Sidebar from './Sidebar'; 

// const Header = () => {
//   const navigate = useNavigate();
//   const [showDealsDropdown, setShowDealsDropdown] = useState(false);
//    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   

//   return (
//     <header className="header">
//       <div className="left-section">
//         <img
//           src="https://www.vitacost.com/images/lpa/VitacostLogo_2016_b.png"
//           alt="Vitacost Logo"
//           className="logo"
//         />

//         <nav className="nav-menu">
//           <div className="nav-item" onClick={() => setIsSidebarOpen(true)} style={{ cursor: 'pointer' }}>
//             <FaBars className="menu-icon" />
//             <span>Shop</span>
//           </div>
//           <span className="nav-item">Menopause</span>
//           <span className="nav-item">Tips & Recipes</span>

//           <div
//             className="nav-item deals"
//             onMouseEnter={() => setShowDealsDropdown(true)}
//             onMouseLeave={() => setShowDealsDropdown(false)}
//           >
//             Deals <span className="dropdown-arrow">▼</span>

//             {showDealsDropdown && (
//               <div className="dropdown-menu">
//                 <div className="dropdown-section">
//                   <button className="deal-box green">Coupons <br /><span>& Discounts</span></button>
//                   <button className="deal-box blue">Promo <br /><span>Pocket</span></button>
//                 </div>
//                 <div className="dropdown-icons">
//                   <div className="icon-item">
//                     🚚<span>Free Shipping</span>
//                   </div>
//                   <div className="icon-item">
//                     🔄<span>Autoship</span>
//                   </div>
//                   <div className="icon-item">
//                     ❗<span>Last Chance</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>

//       <div className="search-section">
//         <input type="text" placeholder="" />
        
//         <button className="search-btn"><FaSearch />
//         </button>
//       </div>

//       <div className="right-section">
//         <div className="icon-block">
//           <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
//             <FaUserCircle />
//             <span>Sign In</span>
//           </Link>
//         </div>
//       <div className="icon-block cart-icon" onClick={() => navigate("/cart")} style={{ cursor: "pointer", position: "relative" }}>
//   <FaShoppingCart />
//   <span className="cart-badge">1</span>
//   <span>Cart</span>
// </div>
//       </div>
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
//     </header>
    
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../css/Header.css";
import { FaSearch, FaUserCircle, FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';

const Header = () => {
  const navigate = useNavigate();
  const [showDealsDropdown, setShowDealsDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");  // Search input state
  const [searchResults, setSearchResults] = useState([]); // Results from backend


  useEffect(() => {
    const fetchProducts = async () => {
      if (searchTerm.trim() === "") {
        setSearchResults([]);
        return;
      }
      try {
        const res = await axios.get("https://vitecost-project-2.onrender.com/api/products/getallproduct", {
          params: {
            search: searchTerm,
            limit: 10,  
          },
        });
        setSearchResults(res.data.product);
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    };

    // Debounce so backend isn't hit on every keystroke immediately
    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 300); // 300 ms delay

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  return (
    <header className="header">
      <div className="left-section">
        <img
          src="https://www.vitacost.com/images/lpa/VitacostLogo_2016_b.png"
          alt="Vitacost Logo"
          className="logo"
        />
        <nav className="nav-menu">
          <div className="nav-item" onClick={() => setIsSidebarOpen(true)} style={{ cursor: 'pointer' }}>
            <FaBars className="menu-icon" />
            <span>Shop</span>
          </div>
          <span className="nav-item">Menopause</span>
          <span className="nav-item">Tips & Recipes</span>
          <div
            className="nav-item deals"
            onMouseEnter={() => setShowDealsDropdown(true)}
            onMouseLeave={() => setShowDealsDropdown(false)}
          >
            Deals <span className="dropdown-arrow">▼</span>
            {showDealsDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <button className="deal-box green">Coupons <br /><span>& Discounts</span></button>
                  <button className="deal-box blue">Promo <br /><span>Pocket</span></button>
                </div>
                <div className="dropdown-icons">
                  <div className="icon-item">
                    🚚<span>Free Shipping</span>
                  </div>
                  <div className="icon-item">
                    🔄<span>Autoship</span>
                  </div>
                  <div className="icon-item">
                    ❗<span>Last Chance</span>
                  </div>
                </div>
              </div>
              
            )}
            
          </div>
        </nav>
        
      </div>
      <Link to="/products" className="nav-item" style={{fontSize :"16px" , textDecoration :"none" , color : "black", fontWeight :"bold"}}>All Products</Link> 
      

      {/* Search Section */}
      <div className="search-section" style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button className="search-btn"><FaSearch /></button>

        {/* Search Results Dropdown */}
        {searchResults.length > 0 && (
          <div
            className="search-results-dropdown"
            style={{
              position: "absolute",
              top: "40px",
              left: 0,
              right: 0,
              background: "white",
              border: "1px solid #ccc",
              maxHeight: "300px",
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {searchResults.map((product) => (
              <div
                key={product._id}
                className="search-result-item"
                style={{ padding: "8px", cursor: "pointer", borderBottom: "1px solid #eee" }}
                onClick={() => {
                  navigate(`/product/${product._id}`);
                  setSearchTerm("");
                  setSearchResults([]);
                }}
              >
                <img src={product.image} alt={product.name} style={{ width: "40px", marginRight: "10px" }} />
                <span>{product.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="right-section">
        <div className="icon-block">
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FaUserCircle />
            <span>Sign In</span>
          </Link>
        </div>
        <div
          className="icon-block cart-icon"
          onClick={() => navigate("/cart")}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <FaShoppingCart />
          <span className="cart-badge">1</span>
          <span>Cart</span>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;
