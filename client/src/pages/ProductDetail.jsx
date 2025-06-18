import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/ProductDetail.css";
import {  useSelector } from "react-redux";
import Footer from "./Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
   const { user } = useSelector((store) => store.auth);
 

  const fetchData = async () => {
    try {
      const response = await axios.post(
        `https://vitecost-project-2.onrender.com/api/products/getproductdetails`,
        { productId: id }
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);


   const handleAddToCart = async () => {
    if (!user || !user._id) {
      alert("Please login to add to cart.");
      return;
    }

    try {
      const payload = {
        userId: user._id,
        productId: product._id,
        image: product.image,
        price: product.price,
        quantity,
        
      };

      const response = await axios.post(
        "https://vitecost-project-2.onrender.com/api/cart/add",
        payload
      );

      if (response.status === 200 || response.status === 201) {
        alert("Product added to cart successfully!");
      } else {
        alert("Something went wrong while adding to cart.");
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      alert("Error adding product to cart.");
    }
  };

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail container">
      <div className="breadcrumb">
        Herbs, Botanicals & Homeopathy &gt; Joint Health &gt;{" "}
        <strong>Turmeric</strong>
      </div>

      <h1 className="title">{product.name}</h1>
      <div className="sku">
        SKU #: {product.sku || "835003004423"} | Shipping Weight:{" "}
        {product.weight || "0.32 lb"} | Servings: {product.servings || "60"}
      </div>

      <hr className="divider" />

      <div className="product-content">
        <div className="left-column">
          <img
            className="top-seller-badge"
            src="https://www.vitacost.com/images/lpa/Top_Seller_V1_R2_nobg.png"
            alt="Top Seller"
          />
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="right-column">
          <div className="price-review">
            <div className="price-box">
              <strong>Our price: ${product.price}</strong>
              <div className="per-serving">$0.50 per serving</div>
            </div>
            <div className="review-box">
              <div className="stars">★★★★☆</div>
              <div className="rating">
                4.7 (1031) · <a href="#">Write a review</a>
              </div>
            </div>
          </div>

          <p className="trending-text">🔥 This product is trending. Buy now!</p>

          <div className="size-box">
            <label>Size:</label>
            <select>
              <option>{product.size || "120 Capsules"}</option>
            </select>
          </div>

          <div className="quantity-addcart">
            <label>Qty.</label>
            <div className="quantity-controls">
              <button onClick={decrease}>−</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={increase}>+</button>
            </div>
             <button style={{ marginTop :"20px"}}  className="add-cart-btn" onClick={handleAddToCart}>
              Add to cart
            </button> 
          </div>
         

          <p className="autoship">Autoship: <span className="discount-price">$23.99</span> (20% off)</p>

          <div className="icons-section">
            <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" />
            <p>Pay in 4 interest-free payments...</p>
            <img src="https://www.vitacost.com/images/lpa/icon_authenticity.svg" />
            <img src="https://www.vitacost.com/images/lpa/PPP_Icon_150x150.svg" alt="quality" />
          </div>
        </div>
      </div>
      <img
        className="product-banner"
        src="https://www.vitacost.com/Images/modules/840081410448_2560x400(1280x200).jpg  "
        alt="Product Banner"
        style={{ width: "100%" }}
      />
      <div style={{ width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};
export default ProductDetail;
