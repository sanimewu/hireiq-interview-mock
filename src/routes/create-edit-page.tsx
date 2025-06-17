import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import type {Interview} from "@/lib";
import {db} from "@/confiq/firebase.confiq.ts";
import {FormMockInterview} from "@/components/ui/form-mock-interview.tsx";

export const CreateEditPage = () => {
    const { interviewId } = useParams<{ interviewId: string }>();
    const [interview, setInterview] = useState<Interview | null>(null);

    useEffect(() => {
        const fetchInterview = async () => {
            if (interviewId) {
                try {
                    const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
                    if (interviewDoc.exists()) {
                        setInterview({
                            ...interviewDoc.data(),
                        } as Interview);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchInterview().then();
    }, [interviewId]);

    return (
        <div className="my-4 flex-col w-full">
            <FormMockInterview initialData={interview} />
        </div>
    );
};
