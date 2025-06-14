import Header from "@/components/header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/footer.tsx";
import AuthHandler from "@/handlers/auth-handler.tsx";


const PublicLayout = () => {
    return (
        <div className="w-full">
            <AuthHandler/>
            <Header/>

            <Outlet/>

            <Footer/>
        </div>
    );
};

export default PublicLayout;
