import { useAuth } from "../context/AuthContext";
import { AuthenticatedRoutes } from "./AuthenticatedRoutes";
import { GuestRoutes } from "./GuestRoutes";

export function AppRoutes() {
    const { token } = useAuth();

    if (!token) {
        return <GuestRoutes />
    }

    return <AuthenticatedRoutes />
}