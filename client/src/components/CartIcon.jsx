import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // ya apna koi bhi icon le le

const CartIcon = () => {
  const navigate = useNavigate();
  const cartItemCount  = useSelector((state) => state.cart.items.length); // cart items ka count

  return (
    <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
      <ShoppingCart size={28} />
      {cartItemCount  > 0 && (
        <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartItemCount }
        </span>
      )}
    </div>
  );
};

export default CartIcon;
