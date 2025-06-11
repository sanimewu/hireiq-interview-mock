import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription
} from "@/components/ui/sheet"
import {Menu} from "lucide-react";
import {useAuth} from "@clerk/clerk-react";
import {NavLink} from "react-router-dom";
import {cn} from "@/lib/utils.ts";
import NavigationRoute from "@/components/ui/navigation-route.tsx";

const ToggleContainer = () => {
    const {userId} = useAuth();
    return (
        <div>
            <Sheet>
                <SheetTrigger className="block md:hidden">
                    <Menu/>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Interview Preparation</SheetTitle>
                        <SheetDescription/>
                    </SheetHeader>
                    <nav className="gap-6 flex flex-col items-start mt-6">
                        <NavigationRoute isMobile/>

                        {userId && (
                            <NavLink to={"/generate"} className={({isActive})=>
                                cn("text-base text-neutral-900", isActive && "text-neutral-900 font-semibold")
                            }>
                                Take a Mock Interview
                            </NavLink>
                        )}
                    </nav>

                </SheetContent>
            </Sheet>
        </div>
    );
};

export default ToggleContainer;
