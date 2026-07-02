import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import authService from "../services/authService";

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        password: "",

        address: "",

    });

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const validateForm = () => {

        if (formData.name.length < 20 || formData.name.length > 60) {
            return "Name must be 20–60 characters.";
        }

        if (formData.address.length > 400) {
            return "Address must be less than 400 characters.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            return "Invalid email format.";
        }

        const passwordRegex =
            /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/;

        if (!passwordRegex.test(formData.password)) {
            return "Password must be 8–16 chars, include 1 uppercase and 1 special character.";
        }

        return null;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        const validationError = validateForm();

        if (validationError) {

            setError(validationError);

            return;

        }

        setLoading(true);

        try {

            const response = await authService.signup(formData);

            alert(response.message || "Signup successful");

            navigate("/login");

        } catch (err) {

            setError(err.message || "Signup failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div style={styles.container}>

            <h2>Signup</h2>

            <form onSubmit={handleSubmit} style={styles.form}>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                {error && (
                    <p style={{ color: "red" }}>
                        {error}
                    </p>
                )}

                <button type="submit" disabled={loading}>

                    {loading ? "Creating account..." : "Signup"}

                </button>

            </form>

            <p>

                Already have an account?{" "}

                <Link to="/login">

                    Login

                </Link>

            </p>

        </div>

    );

}

const styles = {

    container: {

        maxWidth: "400px",

        margin: "50px auto",

        textAlign: "center",

    },

    form: {

        display: "flex",

        flexDirection: "column",

        gap: "10px",

    },

};

export default Signup;