import { Navigate } from "react-router-dom";
import  {useAuth}  from "../context/AuthContext";


function ProtectedRoute({ children, allowedRoles = [] }) {

    const { user, token, loading } = useAuth();

    // Wait until authentication state is restored
    if (loading) {
        return <h2>Loading...</h2>;
    }

    // User is not logged in
    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    // Check role (if roles are specified)
    if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(user.role)
    ) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;
