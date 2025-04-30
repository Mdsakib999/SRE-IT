import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    const isVerified = localStorage.getItem("isVerified") === "true";

    return isVerified ? element : <Navigate to="/security-check" replace />;
};

export default ProtectedRoute;
