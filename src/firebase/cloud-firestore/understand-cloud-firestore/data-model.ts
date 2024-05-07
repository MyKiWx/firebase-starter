import { db } from "@/firebase/config";
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  collection,
  doc,
} from "firebase/firestore";

// export declare function collection(firestore: Firestore, path: string, ...pathSegments: string[]): CollectionReference<DocumentData, DocumentData>;
// export declare function collection<AppModelType, DbModelType extends DocumentData>(reference: CollectionReference<AppModelType, DbModelType>, path: string, ...pathSegments: string[]): CollectionReference<DocumentData, DocumentData>;
// export declare function collection<AppModelType, DbModelType extends DocumentData>(reference: DocumentReference<AppModelType, DbModelType>, path: string, ...pathSegments: string[]): CollectionReference<DocumentData, DocumentData>;

const usersCollectionReference: CollectionReference<
  DocumentData,
  DocumentData
> = collection(db, "users");
const clubsCollectionReference = collection(db, "clubs");

// arrow function & async function
export const usersCollectionReferenceFunction = async () => {
  // export declare function collection(firestore: Firestore, path: string, ...pathSegments: string[]): CollectionReference<DocumentData, DocumentData>;
};

// TODO: Homework
export const collectionReferencesTypeI = async () => {
  // export declare function collection(firestore: Firestore, path: string, ...pathSegments: string[]): CollectionReference<DocumentData, DocumentData>;
};

// TODO: Homework
export const collectionReferencesTypeII = async () => {
  // export declare function collection<AppModelType, DbModelType extends DocumentData>(reference: CollectionReference<AppModelType, DbModelType>, path: string, ...pathSegments: string[]): CollectionReference<DocumentData, DocumentData>;
};

// TODO: Homework
export const collectionReferencesTypeIII = async () => {
  // export declare function collection<AppModelType, DbModelType extends DocumentData>(reference: DocumentReference<AppModelType, DbModelType>, path: string, ...pathSegments: string[]): CollectionReference<DocumentData, DocumentData>;
};

const eventsRegistrationCollectionReference = collection(
  usersCollectionReference,
  "0JsHy2Hd53NEF8DjFRKS",
  "events_registration"
);

// export declare function doc(firestore: Firestore, path: string, ...pathSegments: string[]): DocumentReference<DocumentData, DocumentData>;
// export declare function doc<AppModelType, DbModelType extends DocumentData>(reference: CollectionReference<AppModelType, DbModelType>, path?: string, ...pathSegments: string[]): DocumentReference<AppModelType, DbModelType>;
// export declare function doc<AppModelType, DbModelType extends DocumentData>(reference: DocumentReference<AppModelType, DbModelType>, path: string, ...pathSegments: string[]): DocumentReference<DocumentData, DocumentData>;

const alovelaceDocumentReference: DocumentReference<
  DocumentData,
  DocumentData
> = doc(db, "users", "alovelace");
export const alovelaceReferences = async () => {
  //   console.log("Hello, World!");
  console.log(alovelaceDocumentReference);
};

// TODO: Homework
export const documentReferencesTypeI = async () => {
  // export declare function doc(firestore: Firestore, path: string, ...pathSegments: string[]): DocumentReference<DocumentData, DocumentData>;
};

// TODO: Homework
export const documentReferencesTypeII = async () => {
  // export declare function doc<AppModelType, DbModelType extends DocumentData>(reference: CollectionReference<AppModelType, DbModelType>, path?: string, ...pathSegments: string[]): DocumentReference<AppModelType, DbModelType>;
};

// TODO: Homework
export const documentReferencesTypeIII = async () => {
  // export declare function doc<AppModelType, DbModelType extends DocumentData>(reference: DocumentReference<AppModelType, DbModelType>, path: string, ...pathSegments: string[]): DocumentReference<DocumentData, DocumentData>;
};
