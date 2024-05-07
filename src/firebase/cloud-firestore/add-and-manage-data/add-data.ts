import { db } from "@/firebase/config";
import {
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";

const alovelaceDocumentReference: DocumentReference<
  DocumentData,
  DocumentData
> = doc(db, "users", "alovelace");

export const alovelaceReferences = async () => {
  //   console.log("Hello, World!");
  console.log(alovelaceDocumentReference);
};

/**
 * Writes to the document referred to by this `DocumentReference`. If the
 * document does not yet exist, it will be created.
 *
 * @param reference - A reference to the document to write.
 * @param data - A map of the fields and values for the document.
 * @returns A `Promise` resolved once the data has been successfully written
 * to the backend (note that it won't resolve while you're offline).
 */
// export declare function setDoc<AppModelType, DbModelType extends DocumentData>(reference: DocumentReference<AppModelType, DbModelType>, data: WithFieldValue<AppModelType>): Promise<void>;

export const setADocument = async () => {
  await setDoc(doc(db, "users", "jchaiwat"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
    arr: ["chaiwat", "janchalee", "q"],
  });
};

/**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A `Promise` resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */

// export declare function addDoc<AppModelType, DbModelType extends DocumentData>(reference: CollectionReference<AppModelType, DbModelType>, data: WithFieldValue<AppModelType>): Promise<DocumentReference<AppModelType, DbModelType>>;
export const addADocument = async () => {
  await addDoc(collection(db, "users"), {
    fname: "manee",
    lname: "jaidee",
  });
};
