import {Timestamp,FieldPath} from "firebase/firestore"

export interface User{
    id: string;
    email: string;
    name: string;
    imageUrl: string;
    createdAt: Timestamp | FieldPath;
    updatedAt: Timestamp | FieldPath;
}
export interface Interview {
    id: string;
    position:string;
    description: string;
    experience: number;
    userId: string;
    techStack: string;
    questions:{ question: string; answer: string };
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
