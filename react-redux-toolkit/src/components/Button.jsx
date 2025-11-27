import { useDispatch } from "react-redux";
import { addItem,removeItem,clearCart } from "../redux/slice";  // <-- IMPORTANT

const Button = ({ className = "", icon = null, label, action="addtocart" ,pyload={}}) => {
    const dispatch = useDispatch();

    const defaultClass = className ? className : "btn btn-primary w-50 me-2";
    const handleClick = () => {
        if (action === "add") dispatch(addItem(pyload));
        else if (action === "remove") dispatch(removeItem());
        else if (action === "clear") dispatch(clearCart());
        else console.warn("⚠️ Unknown action:", action);
    };
    return (
        <button
            className={defaultClass}
            onClick={handleClick}
            >
            {icon && <i className={`${icon} me-1`}></i>} {label}
        </button>
    );
};

export default Button;
