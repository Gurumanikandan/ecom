// HomePage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8087/product")
            .then((response) => setProducts(response.data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="home-page">
            {/* Header */}
            <header className="header">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <a href="/">MyStore</a>
                    </div>
                    <ul className="navbar-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/product">Products</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/cart">Cart ({cart.length})</a></li>
                    </ul>
                    <div className="navbar-right">
                        <div className="searchbar">
                            <input type="text" placeholder="Search..." />
                            <button type="submit">Search</button>
                        </div>
                        <div className="login">
                            <a href="/login">Login</a>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <h2 className="title">Product Listings</h2>
                <div className="product-grid">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="product-card">
                                <img
                                    src={`http://localhost:8087/product/${product.id}/image`}
                                    alt={product.name}
                                    className="product-image"
                                    onError={(e) => {
                                        e.target.src = "http://localhost:8087/images/default.jpg";
                                    }}
                                />
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <p><strong>Brand:</strong> {product.brand}</p>
                                    <p className="price">${product.price}</p>
                                    <p className="stock">
                                        {product.stockQuantity > 0
                                            ? `In Stock: ${product.stockQuantity}`
                                            : "Out of Stock"}
                                    </p>
                                    <button
                                        className="add-to-cart-btn"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart 🛒
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-products">No products available.</p>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} MyStore. All Rights Reserved.</p>
                    <p>Contact: support@mystore.com | Phone: 123-456-7890</p>
                    <p>Address: 123 Main Street, City, Country</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;



/*import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8087/product")
            .then((response) => setProducts(response.data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="home-page">

            <header className="header">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <a href="/">MyStore</a>
                    </div>
                    <ul className="navbar-links">
                        <li>
                            <a href="/Home">Home</a>
                        </li>
                        <li>
                            <a href="/product">Products</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/cart">cart</a>
                        </li>
                    </ul>
                    <div className="navbar-right">
                        <div className="searchbar">
                            <input type="text" placeholder="Search..." />
                            <button type="submit">Search</button>
                        </div>
                        <div className="login">
                            <a href="/login">Login</a>
                        </div>
                    </div>
                </nav>
            </header>


            <main className="main-content">
                <h2 className="title">Product Listings</h2>
                <div className="product-grid">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="product-card">
                                <img
                                    src={`http://localhost:8087/product/${product.id}/image`}
                                    alt={product.name}
                                    className="product-image"
                                    onError={(e) =>
                                    (e.target.src =
                                        "http://localhost:8087/images/default.jpg")
                                    }
                                />
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <p>
                                        <strong>Brand:</strong> {product.brand}
                                    </p>
                                    <p className="price">${product.price}</p>
                                    <p className="stock">
                                        {product.stockQuantity > 0
                                            ? `In Stock: ${product.stockQuantity}`
                                            : "Out of Stock"}
                                    </p>
                                    <button
                                        className="add-to-cart-btn"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart 🛒
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-products">No products available.</p>
                    )}
                </div>
            </main>


            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} MyStore. All Rights Reserved.</p>
                    <p>Contact: support@mystore.com | Phone: 123-456-7890</p>
                    <p>Address: 123 Main Street, City, Country</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
*/