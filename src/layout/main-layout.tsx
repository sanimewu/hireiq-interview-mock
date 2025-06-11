import Header from "@/components/header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/footer.tsx";
import Container from "@/components/container.tsx";


const PublicLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header/>

            <Container className="flex-grow">
                <main className="flex-grow">
                    <Outlet/>
                </main>
            </Container>

            <Footer/>
        </div>
    );
};

export default PublicLayout;
