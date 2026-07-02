import { NavLink, Link,useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const navigate = useNavigate();

    const { user, logout, isAuthenticated } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="navbar">

            <div className="navbar-left">
                <Link to="/" className="navbar-brand">
                    Store Rating System
                </Link>
            </div>

            <div className="navbar-center">

                {isAuthenticated && user?.role === "USER" && (
                    <NavLink className="nav-link" to="/stores">
                        Stores
                    </NavLink>
                )}

                {isAuthenticated && user?.role === "ADMIN" && (
                    <NavLink className="nav-link" to="/admin">
                        Admin Dashboard
                    </NavLink>
                )}

                {isAuthenticated && user?.role === "OWNER" && (
                    <NavLink className="nav-link" to="/owner">
                        Owner Dashboard
                    </NavLink>
                )}

            </div>

            <div className="navbar-right">

                {!isAuthenticated ? (
                    <>
                        <NavLink className="navlink" to="/login">
                            Login
                        </NavLink>

                        <NavLink className="navlink" to="/signup">
                            Signup
                        </NavLink>
                    </>
                ) : (
                    <>
                        <span className="navbar-user">
                            👤 {user?.name} ({user?.role})
                        </span>

                        <button
                            className="btn btn-outline"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                )}

            </div>

        </nav>
    );
}


const styles = {

    navbar: {

        display: "flex",

        justifyContent: "space-between",

        alignItems: "center",

        padding: "10px 20px",

        backgroundColor: "#111",

        color: "#fff"

    },

    left: {},

    center: {

        display: "flex",

        gap: "15px"

    },

    right: {

        display: "flex",

        gap: "15px",

        alignItems: "center"

    },

    brand: {

        color: "#fff",

        textDecoration: "none",

        fontWeight: "bold",

        fontSize: "18px"

    },

    link: {

        color: "#fff",

        textDecoration: "none"

    },

    user: {

        fontSize: "14px"

    },

    button: {

        padding: "5px 10px",

        cursor: "pointer"

    }

};

export default Navbar;


