"use client";

import { db } from "@/firebase/config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {};

// PascalCase
const Page = (props: Props) => {
  const student = {
    std_id: "S123456",
    std_fullname: "John Doe",
    std_fac: "Engineering",
    std_food_type: "Vegetarian",
    std_food_algy: "None",
    std_drug_algy: "Penicillin",
    std_ud: "21/05/2000",
    std_tel: "+1234567890",
    std_fr_tel: "+9876543210",
    std_fb: "john.doe",
    std_ig: "john_doe",
    std_line: "john_d",
    std_role: "Student",
  };
  const handleRegistration = async () => {
    // ทำยังไงก็ได้ ให้ข้อมูลที่ลงทะเบียน เข้าไปเก็บที่ firebase

    // 1. ไม่ย่อตัวแปร
    // 2. การเติมหรือไม่เติม s

    // id ของ document เป็นส่วนไม่สำคัญ
    const studentsCollectionReference = collection(db, "students");

    // id ของ document เป็นส่วนสำคัญ
    const studentUnionDocumentReference = doc(db, "clubs", "student_union");

    const student_uuid = await addDoc(studentsCollectionReference, {
      std_id: "S123456",
      std_fullname: "John Doe",
      std_fac: "Engineering",
      std_food_type: "Vegetarian",
      std_food_algy: "None",
      std_drug_algy: "Penicillin",
      std_ud: "21/05/2000",
      std_tel: "+1234567890",
      std_fr_tel: "+9876543210",
      std_fb: "john.doe",
      std_ig: "john_doe",
      std_line: "john_d",
      std_role: "Student",
    });
    // console.log(JSON.stringify(student_uuid));
    const student_uuid_mock = {
      converter: null,
      _key: {
        path: {
          segments: ["students", "FsRLW1LmhXXxNyQYLrHY"],
          offset: 0,
          len: 2,
        },
      },
      type: "document",
      firestore: {
        app: {
          _isDeleted: false,
          _options: {
            apiKey: "AIzaSyCwesYNIOWZ6BGkH4d2Jm0RYUJQFTZY4bI",
            authDomain: "fir-starter-8436c.firebaseapp.com",
            projectId: "fir-starter-8436c",
            storageBucket: "fir-starter-8436c.appspot.com",
            messagingSenderId: "163646848575",
            appId: "1:163646848575:web:e0dd75b3cf8bb2b06a828a",
            measurementId: "G-DWMW4G2SCG",
          },
          _config: { name: "[DEFAULT]", automaticDataCollectionEnabled: false },
          _name: "[DEFAULT]",
          _automaticDataCollectionEnabled: false,
          _container: { name: "[DEFAULT]", providers: {} },
        },
        databaseId: { projectId: "fir-starter-8436c", database: "(default)" },
        settings: {
          host: "firestore.googleapis.com",
          ssl: true,
          ignoreUndefinedProperties: false,
          cacheSizeBytes: 41943040,
          experimentalForceLongPolling: false,
          experimentalAutoDetectLongPolling: true,
          experimentalLongPollingOptions: {},
          useFetchStreams: true,
        },
      },
    };

    const events = [
      {
        name: "First meet",
        event_uuid: "kZsSFzJC0EtvNqy6mhOf",
      },
      {
        name: "Friendship",
        event_uuid: "lus55onK636H4bf1b1vG",
      },
      {
        name: "Pradubchor",
        event_uuid: "2Te9GHDL5qKqrTMxRtwc",
      },
    ];

    setDoc(
      doc(
        db,
        "students",
        student_uuid.id,
        "events_registration",
        events[0].event_uuid
      ),
      {
        event_code: uuidv4().split("-")[0],
        isUsed: false,
      }
    );

    setDoc(
      doc(
        db,
        "students",
        student_uuid.id,
        "events_registration",
        events[1].event_uuid
      ),
      {
        event_code: uuidv4().split("-")[0],
        isUsed: false,
        friendship_code: uuidv4().split("-")[0],
      }
    );

    setDoc(
      doc(
        db,
        "students",
        student_uuid.id,
        "events_registration",
        events[2].event_uuid
      ),
      {
        event_code: uuidv4().split("-")[0],
        isUsed: false,
      }
    );

    console.log(student_uuid.id);

    // 35475e4a-e36d-4d65-a286-db2383d9785f
    // console.log(uuidv4());
  };
  return (
    <div>
      <h1>Registration</h1>
      <button onClick={handleRegistration}>ลงทะเบียน</button>
    </div>
  );
};

export default Page;
