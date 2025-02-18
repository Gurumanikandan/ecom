// CartContext.js
import React, { createContext, useState } from "react";

// Optionally, you can provide a default value:
export const CartContext = createContext({
    cart: [],
    setCart: () => { },
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

/*
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};*/
