import {cn} from "@/lib/utils.ts";
import {MainRouteLink} from "@/lib/main-route-link.ts";
import {NavLink} from "react-router-dom";

interface NavigationRouteProps{
    isMobile?: boolean;
}
const NavigationRoute = ({isMobile=false}:NavigationRouteProps) => {
    return <ul className={cn("flex items-center gap-2", isMobile && "items-start flex-col gap-8")}>
        {MainRouteLink.map(route => (
            <NavLink to={route.href} key={route.href} className={({isActive})=>
            cn("flex items-center gap-2", isActive && "text-neutral-900 font-semibold")
            }>
                {route.label}
            </NavLink>
        ))}
    </ul>
};

export default NavigationRoute;
