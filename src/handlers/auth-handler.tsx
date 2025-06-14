import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { db } from "@/confiq/firebase.confiq";
import LoaderPage from "@/routes/loader-page";
import type { User } from "@/lib";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const AuthHandler = () => {
    const { isSignedIn } = useAuth();
    const { user } = useUser();

    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storeUserData = async () => {
            console.log("Auth state:", { isSignedIn, user });
            if (isSignedIn && user) {
                setLoading(true);
                try {
                    const userRef = doc(db, "users", user.id);
                    const userSnap = await getDoc(userRef);

                    if (!userSnap.exists()) {
                        const userData: User = {
                            id: user.id,
                            name: user.fullName || user.firstName || "Anonymous",
                            email: user.primaryEmailAddress?.emailAddress || "N/A",
                            imageUrl: user.imageUrl,
                            createdAt: serverTimestamp(),
                            updatedAt: serverTimestamp(),
                        };

                        await setDoc(userRef, userData);
                    }
                } catch (err) {
                    console.error("Error storing user:", err);
                } finally {
                    setLoading(false);
                }
            }
        };

        storeUserData().then();
    }, [isSignedIn, user, pathname, navigate]);

    if (loading) {
        return <LoaderPage />;
    }

    return null;
};

export default AuthHandler;
