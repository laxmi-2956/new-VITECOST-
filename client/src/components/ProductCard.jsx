import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    const existingCart =
      JSON.parse(localStorage.getItem("vitacost_cart")) || [];

    const isAlreadyInCart = existingCart.some((item) => item.id === product.id);
    if (isAlreadyInCart) {
      alert("Item is already in the cart!");
      return;
    }

    const updatedCart = [...existingCart, product];
    localStorage.setItem("vitacost_cart", JSON.stringify(updatedCart));
    alert("Item added to cart!");
  };

  return (
    <div className="product-card">
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
      </Link>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
