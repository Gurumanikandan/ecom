// CartPage.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./CartPage.css";

const CartPage = () => {
    const { cart, setCart } = useContext(CartContext);  // This will now work because CartProvider is wrapping the tree

    const removeItem = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-items">
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img
                                src={`http://localhost:8087/product/${item.id}/image`}
                                alt={item.name}
                                className="cart-item-image"
                                onError={(e) =>
                                (e.target.src =
                                    "http://localhost:8087/images/default.jpg")
                                }
                            />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p className="price">${item.price}</p>
                                <button onClick={() => removeItem(index)}>
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;
