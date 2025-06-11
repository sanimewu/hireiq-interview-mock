import * as React from "react";
import {useAuth} from "@clerk/clerk-react";
import LoaderPage from "@/routes/loader-page.tsx";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({children}:{children:React.ReactNode}) => {
    const {isLoaded, isSignedIn} = useAuth();
    if (!isLoaded) {
        return <LoaderPage/>;
    }
    if (!isSignedIn) {
        return <Navigate to="/signin" />;
    }
    return  children;
};

export default ProtectedRoute;
