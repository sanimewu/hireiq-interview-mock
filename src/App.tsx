import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicLayout from "@/layout/public-layout.tsx";
import Home from "@/routes/home.tsx";
import AuthLayout from "@/layout/auth-layout.tsx";
import SignInPage from "@/routes/sign-in.tsx";
import SignUpPage from "@/routes/sign-up.tsx";
import ProtectedRoute from "@/layout/protected-route.tsx";
import MainLayout from "@/layout/main-layout.tsx";
import Generate from "@/components/ui/generate.tsx";
import Dashboard from "@/routes/dashboard.tsx";
import {CreateEditPage} from "@/routes/create-edit-page.tsx";

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

                <Route element={<ProtectedRoute><MainLayout/></ProtectedRoute>}>

                    <Route element={<Generate/>} path="/generate">
                        <Route index element={<Dashboard/>}/>
                        <Route path=":interviewId" element={<CreateEditPage/>}/>
                    </Route>

                </Route>


            </Routes>
        </BrowserRouter>
    )
};

export default App;
