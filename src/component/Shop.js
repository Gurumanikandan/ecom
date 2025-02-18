import React, { useState, useEffect } from "react";
import "./shop.css"
const Shop = () => {
    const [products, setProducts] = useState([]); // Stores product data from the backend
    const [cart, setCart] = useState([]); // Stores cart data from the backend

    // Fetch products and cart data when the component mounts
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    // Fetch products from the backend
    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:8087/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Fetch cart data from the backend
    const fetchCart = async () => {
        try {
            const response = await fetch("http://localhost:8087/cart");
            const data = await response.json();
            setCart(data);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

    // Increment an item's quantity in the cart
    const increment = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/cart/${id}?quantity=1`, {
                method: "POST",
            });
            if (response.ok) {
                fetchCart(); // Refresh cart data
            }
        } catch (error) {
            console.error("Error incrementing item:", error);
        }
    };

    // Decrement an item's quantity in the cart
    const decrement = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/cart/${id}?quantity=-1`, {
                method: "POST",
            });
            if (response.ok) {
                fetchCart(); // Refresh cart data
            }
        } catch (error) {
            console.error("Error decrementing item:", error);
        }
    };

    // Get quantity of an item in the cart
    const getItemQuantity = (id) => {
        const item = cart.find((x) => x.id === id);
        return item ? item.quantity : 0;
    };

    return (
        <div id="shop" className="shop">
            {products.map((product) => (
                <div key={product.id} className="items">
                    <img src={product.img} alt={product.name} width="200px" />
                    <div className="details">
                        <h1>{product.name}</h1>
                        <p>{product.desc}</p>
                        <div className="price-quantity">
                            <h2 className="price">${product.price}</h2>
                            <div className="button">
                                <i className="bi bi-dash" onClick={() => decrement(product.id)}></i>
                                <div className="count">{getItemQuantity(product.id)}</div>
                                <i className="bi bi-plus" onClick={() => increment(product.id)}></i>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;
