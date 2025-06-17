import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";

import { useAuth } from "@clerk/clerk-react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@/confiq/firebase.confiq";
import { toast } from "sonner";

import Pin from "@/components/pin";
import type { Interview } from "@/lib";
import Heading from "@/components/ui/heading.tsx";

const Dashboard = () => {
    const [interviews, setInterviews] = useState<Interview[]>([]);
    const [loading, setLoading] = useState(true);
    const { userId } = useAuth();

    useEffect(() => {
        if (!userId) return;

        const interviewQuery = query(
            collection(db, "interviews"),
            where("userId", "==", userId)
        );

        const unsubscribe = onSnapshot(
            interviewQuery,
            (snapshot) => {
                const interviewList: Interview[] = snapshot.docs.map((doc) => ({
                    ...(doc.data() as Interview),
                    id: doc.id,
                }));
                setInterviews(interviewList);
                setLoading(false);
            },
            (error) => {
                console.error("Error fetching interviews: ", error);
                toast.error("Error..", {
                    description: "Something went wrong.. Try again later..",
                });
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [userId]);

    return (
        <>
            <div className="flex items-center justify-between w-full py-2 md:py-6">
                <Heading
                    title="Dashboard"
                    description="Create and start your mock interview"
                />

                <Link to="/generate/create">
                    <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Add New Test
                    </Button>
                </Link>
            </div>

            <Separator className="my-8" />

            <div className="md:grid md:grid-cols-3 gap-3 py-4">
                {loading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} className="h-24 md:h-32 rounded-md" />
                    ))
                ) : interviews.length > 0 ? (
                    interviews.map((interview) => (
                        <Pin key={interview.id} interview={interview} />
                    ))
                ) : (
                    <div className="md:col-span-3 w-full flex flex-grow items-center justify-center h-96 flex-col">
                        <h2 className="text-lg font-semibold text-muted-foreground">
                            No Data Found
                        </h2>
                        <p className="w-full md:w-96 text-center text-sm text-neutral-400 mt-4">
                            There is no available data to show. Please add some new mock interviews
                        </p>
                        <Link to="/generate/create" className="mt-4">
                            <Button size="sm">
                                <Plus className="min-w-5 min-h-5 mr-1" />
                                Add New
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Dashboard;
