import { useAuthStore } from "../store/authStore";
import { Navigate } from "react-router";

export default function ProtectedRoute({children}) {
    const {isLoggedIn} = useAuthStore()

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }

    return children
}