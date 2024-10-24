import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedAuth = () => {
    const auth = useSelector((state: any) => state.auth);
    return (
        <>
            {auth.isAuth ? <Navigate to={"/"} /> : <Outlet />}
        </>
    );
}

export default ProtectedAuth;
