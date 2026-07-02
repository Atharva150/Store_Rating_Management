import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../services/authService";
import  useAuth  from "../hooks/useAuth";


function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {

            const response = await authService.login(formData);
            login(response.token, response.user);
            switch (response.user.role) {
                case "ADMIN":
                    navigate("/admin");
                    break;
                case "OWNER":
                    navigate("/owner");
                    break;

                case "USER":
                    navigate("/stores");
                    break;

                default:
                    navigate("/");
            }
        } catch (error) {
            setError(
                error.message ||
                "Login failed."
            );
        } finally {
            setLoading(false);
        }
    };
    return (

<div className="login-page">

    <div className="login-card">

        <h2 className="login-title">
            Login
        </h2>

        <form
            className="form"
            onSubmit={handleSubmit}
        >

            <div className="form-group">

                <label className="form-label">
                    Email
                </label>

                <input
                    className="form-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="form-group">

                <label className="form-label">
                    Password
                </label>

                <input
                    className="form-input"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

            </div>

            {error && (

                <p className="login-error">

                    {error}

                </p>

            )}

            <button
                className="btn btn-primary login-button"
                type="submit"
                disabled={loading}
            >

                {loading
                    ? "Logging in..."
                    : "Login"}

            </button>

        </form>

        <p className="login-footer">

            Don't have an account?

            <Link to="/signup">

                Sign Up

            </Link>

        </p>

    </div>

</div>

);
}

export default Login;