const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="150" />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
