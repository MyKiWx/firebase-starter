import { app } from "@/firebase/config";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

const db = getFirestore(app);

export const alovelaceDocumentsReference = async () => {
  // Solution 1
  const usersCollectionReference = collection(db, "users");
  const alovelaceDocumentReferenceTypeI = doc(
    usersCollectionReference,
    "alovelace"
  );

  //   Solution 2
  const alovelaceDocumentReferenceTypeII = doc(db, "users", "alovelace");

  //   Solution 3
  const alovelaceDocumentReferenceTypeIII = doc(db, "users/alovelace");

  //   Set data to firestore
  //  Promise
  await setDoc(alovelaceDocumentReferenceTypeIII, {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  })
    .then(() => {
      console.log("Data has been successfully written to the backend!");
    })
    .catch((e) => {})
    .finally(() => {
      console.log("Final");
    });

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
  // setDoc(reference, data)
};

// const aturingDocumentsReference = async () => {
//   // Solution 1
//   const usersCollectionReference = collection(db, "users");
//   const alovelaceDocumentReferenceTypeI = doc(
//     usersCollectionReference,
//     "alovelace"
//   );

//   //   Solution 2
//   const alovelaceDocumentReferenceTypeII = doc(db, "users", "alovelace");

//   //   Solution 3
//   const alovelaceDocumentReferenceTypeIII = doc(db, "users/alovelace");
// };

const alovelaceDocumentsReferenceTypeII = async () => {
  const usersCollectionReference = collection(db, "users");
  const alovelaceDocumentReference = doc(usersCollectionReference, "alovelace");

  await setDoc(alovelaceDocumentReference, {});
};

const createRooms = async () => {
  // ❌ bad
  const roomADocumentReference = doc(db, "rooms/roomA");
  const roomBDocumentReference = doc(db, "rooms/roomB");

  // 1. เราไม่ก็อปแค่ฟังก์ที่ใช้งาน
  // 2. เราควร ก็อป ทุกอย่างเป็นชื่อ
  const roomColRef = collection(db, "rooms");

  // คลุมสิ่งที่ต้องการไว้
  // mac : cmd + d, win: ctrl + d
  // กด arrow right
  // Add data to `roomA`'s Document
  const roomADocRef = doc(roomColRef, "roomA");
  const roomBDocRef = doc(roomColRef, "roomB");

  await setDoc(roomADocRef, {
    name: "my chat roomA",
  }).then(() => {
    console.log(
      `Data has been successfully written. Document ID: ${roomADocRef.id}`
    );
  });

  await setDoc(roomBDocRef, {
    name: "my chat roomB",
  }).then(() => {
    console.log(
      `Data has been successfully written. Document ID: ${roomBDocRef.id}`
    );
  });

  // Solution 1
  const messagesRoomAColRef = collection(roomADocRef, "messages");

  await addDoc(messagesRoomAColRef, {
    timestamp: serverTimestamp(),
    from: "alex",
    msg: "Hello, World!",
  });

  await addDoc(messagesRoomAColRef, {
    timestamp: serverTimestamp(),
    from: "alex",
    msg: "Hello, World!",
  });

  // Solution 2
  [roomADocRef, roomBDocRef].map(async (docRef, _) => {
    const messagesColRef = collection(docRef, "messages");
    await addDoc(messagesColRef, {
      timestamp: serverTimestamp(),
      from: "alex",
      msg: "Hello, World!",
    });

    await addDoc(messagesColRef, {
      timestamp: serverTimestamp(),
      from: "alex",
      msg: "Hello, World!",
    });
  });
};
