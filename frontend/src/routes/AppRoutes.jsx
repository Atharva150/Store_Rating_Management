import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Stores from "../pages/Stores";
import AdminDashboard from "../pages/AdminDashboard";
import OwnerDashboard from "../pages/OwnerDashboard";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/signup"
                element={<Signup />}
            />

            <Route
                path="/stores"
                element={
                    <ProtectedRoute allowedRoles={["USER"]}>
                        <Stores />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin"
                element={
                    <ProtectedRoute allowedRoles={["ADMIN"]}>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/owner"
                element={
                    <ProtectedRoute allowedRoles={["OWNER"]}>
                        <OwnerDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="*"
                element={<h2>404 - Page Not Found</h2>}
            />

        </Routes>

    );

}

export default AppRoutes;