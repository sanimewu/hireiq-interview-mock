import {useAuth} from "@clerk/clerk-react";
import {cn} from "@/lib/utils.ts";
import Container from "@/components/container.tsx";
import NavigationRoute from "@/components/ui/navigation-route.tsx";
import {NavLink} from "react-router-dom";
import ProfileContainer from "@/components/profile-container.tsx";
import ToggleContainer from "@/components/toggle-container.tsx";

const Header = () => {
    const {userId} = useAuth();
    return (
        <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
            <Container>
                <div className="flex items-center gap-4">
                    <div className="font-bold lg:text-xl md:w-1/4">
                        Interview Mock
                    </div>

                    <nav className="hidden text-sm md:flex items-start gap-4 justify-end w-full">
                        <NavigationRoute />
                        {userId && (
                            <NavLink to={"/generate"} className={({isActive})=>
                                cn("flex items-center gap-2", isActive && "text-neutral-900 font-semibold")
                            }>
                                Take a Mock Interview
                            </NavLink>
                        )}
                    </nav>

                    <div className="flex ml-auto items-center gap-4">
                        <ProfileContainer/>
                        <ToggleContainer/>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
