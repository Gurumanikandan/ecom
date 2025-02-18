import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8087/product")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="product-list-container">
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
                                    (e.target.src = "http://localhost:8087/product/default/image")
                                }
                            />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p><strong>Brand:</strong> {product.brand}</p>
                                <p><strong>Price:</strong> ${product.price}</p>
                                <p><strong>Category:</strong> {product.category}</p>
                                <p><strong>Stock:</strong> {product.stockQuantity}</p>
                                <p><strong>Available:</strong> {product.productAvailable ? "Yes" : "No"}</p>
                                <p><strong>Release Date:</strong> {product.releaseDate}</p>
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
        </div>
    );
};

export default ProductList;

/*import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8087/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="product-list-container">
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
                    "http://localhost:8087/product/default/image")
                } // Optional fallback if image fails to load
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <p>
                  <strong>Stock:</strong> {product.stockQuantity}
                </p>
                <p>
                  <strong>Available:</strong>{" "}
                  {product.productAvailable ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Release Date:</strong> {product.releaseDate}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
*/