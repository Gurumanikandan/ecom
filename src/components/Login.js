import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css"
import "./Login.css"

const Login = () => {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:8087/Login", {
                username: username,
                password: password,
            });

            if (response.status === 200) {
                // Navigate to the home page after successful login
                navigate("/admin");
            }
        } catch (err) {
            setError(err.response?.data || "Invalid username or password");
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={username}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn">
                    Login
                </button>
            </form>
            <p>
                Don't have an account? <a href="/signup">Sign up</a>
            </p>
        </div>
    );
};

export default Login;

/*import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css"
const Login = () => {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:8086/api/login", {
                username: username,
                password: password,
            });

            // Save the token to localStorage
            localStorage.setItem("token", response.data.token);

            // Navigate to the home page
            navigate("/home");
        } catch (err) {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={username}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn">
                    Login
                </button>
            </form>
            <p>
                Don't have an account? <a href="/signup">Sign up</a>
            </p>
        </div>
    );
};

export default Login;*/
