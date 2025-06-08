import Header from "@/components/header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/footer.tsx";


const PublicLayout = () => {
    return (
        <div className="w-full">
            <Header/>

            <Outlet/>

            <Footer/>
        </div>
    );
};

export default PublicLayout;
