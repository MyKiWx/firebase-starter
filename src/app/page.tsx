"use client";

import {
  addADocument,
  setADocument,
} from "@/firebase/cloud-firestore/add-and-manage-data/add-data";
// import Image from "next/image";
// import styles from "./page.module.css";

import {
  collectionReferencesTypeI,
  documentReferencesTypeI,
} from "@/firebase/cloud-firestore/understand-cloud-firestore/data-model";

export default function Home() {
  return (
    // <Fragment> (<>...</>)
    <>
      <h1>Hello, World!</h1>
      <button onClick={collectionReferencesTypeI}>
        collectionReferencesTypeI
      </button>
      <button onClick={documentReferencesTypeI}>documentReferencesTypeI</button>
      <button onClick={setADocument}>setADocument</button>
      <button onClick={addADocument}>addADocument</button>
      {/* <button onClick={() => references()}>references</button> */}
    </>
  );
}
