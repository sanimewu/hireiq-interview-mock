import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicLayout from "@/layout/public-layout.tsx";
import Home from "@/routes/home.tsx";
import AuthLayout from "@/layout/auth-layout.tsx";
import SignInPage from "@/routes/sign-in.tsx";
import SignUpPage from "@/routes/sign-up.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>

                <Route element={<AuthLayout/>}>
                    <Route path="signin" element={<SignInPage/>}/>
                    <Route path="signup" element={<SignUpPage/>}/>
                </Route>


            </Routes>
        </BrowserRouter>
    )
};

export default App;
