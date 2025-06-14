import {Timestamp,FieldPath} from "firebase/firestore"

export interface User{
    id: string;
    email: string;
    name: string;
    imageUrl: string;
    createdAt: Timestamp | FieldPath;
    updatedAt: Timestamp | FieldPath;
}
