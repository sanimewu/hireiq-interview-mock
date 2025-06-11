import {useAuth, UserButton} from "@clerk/clerk-react";
import {Loader} from "lucide-react";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

const ProfileContainer = () => {
    const {isSignedIn, isLoaded} = useAuth();
    if (!isLoaded) {
        return (
            <div className="flex items-center gap-2">
                <Loader className={"min-w-4 animate-spin text-sky-500"}/>

            </div>
        );
    }
    return (
        <div className="flex items-center gap-2">
            {isSignedIn ? <UserButton afterSignOutUrl="/"/> : (
                <Link to="/signin">
                    <Button size={"sm"}>Get Started</Button>
                </Link>
            ) }
        </div>
        );


};

export default ProfileContainer;
