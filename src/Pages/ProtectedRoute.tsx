import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = () => {
    const auth = useSelector((state: any) => state.auth);
    return (
        <>
            {auth.isLogged ? <Outlet /> : <Navigate to="/login"></Navigate>}
        </>
    );
}

export default ProtectedRoute;
