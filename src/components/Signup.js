import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Signup = () => {
    const [username, setUsername] = useState(""); // Corrected to setUsername
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8087/Signup", {
                username: username,
                password: password,
            });

            if (response.status === 200) {
                navigate("/"); // Redirect to login on success
            }
        } catch (err) {
            const errorMsg = err.response?.data || "An error occurred. Please try again!";
            setError(errorMsg);
        }
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Corrected setEmail to setUsername
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
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn">
                    Sign Up
                </button>
            </form>
            <p>
                Already have an account? <a href="/">Login</a>
            </p>
        </div>
    );
};

export default Signup;



/*import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css"
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await axios.post("http://localhost:8082/api/signup", {
                username: email,
                password: password,
            });

            // Redirect to login page after successful signup
            navigate("/");
        } catch (err) {
            setError("Error during sign up. Try again!");
        }
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
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
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn">
                    Sign Up
                </button>
            </form>
            <p>
                Already have an account? <a href="/">Login</a>
            </p>
        </div>
    );
};

export default Signup;
*/
