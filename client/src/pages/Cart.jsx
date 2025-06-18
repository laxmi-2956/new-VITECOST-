import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/login.css";
import Footer from "./Footer"; // adjust path if needed
import { useSelector } from "react-redux";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = "683b1d18940beac80de4bfb9";
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  // Replace with actual logged-in userId
  const fetchCartItems = async () => {
    try {
      const res = await axios.get(
        `https://vitecost-project-2.onrender.com/api/cart/getcart/${user._id}`
      );
      console.log("Fetched cart items:", res.data.cart.products);
      setCartItems(res.data.cart.products || []);
    
    } catch (err) {
      console.error("Failed to load cart", err);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, []);

  const getTotal = () => {
    return cartItems
      .reduce((acc, item) => {
        const price = parseFloat(item?.productId?.price?.replace("$", ""));
        return acc + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const handleRemove = async (productId) => {
      console.log(" Removing this productId:", productId);
  console.log(" Current userId being sent:", userId);
   
    try {
      const res = await axios.delete(
        `https://vitecost-project-2.onrender.com/api/cart/remove/${userId}/${productId}`
      );
      console.log(res.data.message);
      
      setCartItems((prev) =>
        
        prev.filter((item) => {item.productId._id !== productId;
        })
        
      );
      
    } catch (error) {
      console.log("Error removing item", error);
    }
  };

  return (
    <div className="container">
      <div className="cart-layout">
        <div className="cart-items">
          <h2>🛍️ Your Cart</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div key={index} className="form-group">
                  <img src={item.image} alt={item.productId}/>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.price}</p>
                    <button
                      className="btn"
                      onClick={() => handleRemove(item.productId?._id || item.productId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Right side - Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Order Subtotal:</span>
            <span>${getTotal()}</span>
          </div>
          <div className="summary-row">
            <span>Tax:</span>
            <span>TBD</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span title="Shipping will be calculated during checkout">TBD</span>
          </div>
          <div className="summary-row total">
            <strong>Order Total:</strong>
            <strong>${getTotal()}</strong>
          </div>
          <div className="promo-code">
            <input type="text" placeholder="Promo Code" />
            <button>Apply</button>
            <p className="promo-note">
              More than one code? That’s OK! Please note that some codes can’t
              be used with others, just be sure to enter one at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="footercollection">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;