import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../redux/slice";

const Button = ({ className="", icon=null, label, action="add", pyload={} }) => {
    const dispatch = useDispatch();

    // Get cart items from Redux
    const cartItems = useSelector((state) => state.cart.items);

    // Check if this product already exists in cart
    const isAdded = cartItems.some(item => item.id === pyload.id);

    // Dynamic UI based on cart status
    const dynamicClass = isAdded 
        ? "btn btn-outline-danger w-100"   // Remove button style
        : className || "btn btn-primary w-100 me-2";  // Default Add button style

    const dynamicIcon = isAdded 
        ? "fas fa-trash-alt"   // Remove icon
        : icon;

    const dynamicLabel = isAdded 
        ? "Remove from Cart" 
        : label;

    const handleClick = () => {
        if (!isAdded) {
            // ADD TO CART
            dispatch(addItem(pyload));
        } else {
            // REMOVE FROM CART
            dispatch(removeItem(pyload.id));
        }
    };

    return (
        <button
            className={dynamicClass}
            onClick={handleClick}
        >
            {dynamicIcon && <i className={`${dynamicIcon} me-1`}></i>}
            {dynamicLabel}
        </button>
    );
};

export default Button;
