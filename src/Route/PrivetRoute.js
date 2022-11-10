import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return  <div className="relative z-50">
                    <div className="w-20 h-20 border-purple-200 border-2 rounded-full"></div>
                    <div className="w-20 h-20 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from : location }} replace></Navigate>
    }
    return children

};

export default PrivetRoute;