import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
            <Outlet/>
        </div>
    );
};

export default AuthLayout;
