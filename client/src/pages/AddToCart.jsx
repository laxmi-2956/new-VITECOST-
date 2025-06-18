import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ product, userId }) => {

  const navigate = useNavigate();
  const datafromstore = useSelector((state) => state);
  console.log(datafromstore)
  const handleAddToCart = async () => {
    try {
      const res = await axios.post("https://vitecost-project-2.onrender.com/api/cart/add", {

  
   userId,
        productId: product._id,
        quantity: 1,
        name: product.name,
        image: product.image,
        price: product.price,
        description: product.description,
  
});
      alert(res.data.message || "Item added to cart!");
      navigate("/");
    } catch (error) {
      console.error("Error adding to cart", error); 
      alert("Error adding to cart");
    }
  };

  return (
    <button onClick={handleAddToCart} className="btn">
      Add to Cart
    </button>
  );
};

export default AddToCart;