import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = () => {
    const auth = useSelector((state: any) => state.auth);
    console.log(auth);
    return (
        <>
            {auth.isAuth ? <Outlet /> : <Navigate to="/login"></Navigate>}
        </>
    );
}

export default ProtectedRoute;
