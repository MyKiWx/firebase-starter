"use client";

import { db } from "@/shared";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

// const random12Character = (): string | undefined | void => {
//   const uuid = uuidv4();
//   const first_uuid = uuid.split("-")[0];
//   const second_uuid = uuid.split("-")[1];
//   const join_uuid = first_uuid.concat(second_uuid);

//   console.log(`uuid.split("-")[0] : ${uuid.split("-")[0]}`);
//   console.log(`uuid.split("-")[1] : ${uuid.split("-")[1]}`);
//   console.log(`uuid.split("-")[1] : ${uuid.split("-")[1]}`);
//   return join_uuid;
// };

type Props = {};

const Registration = (props: Props) => {
  const handleSubmit = async () => {
    // const studentColRef = collection(db, "students");
    // const eventColRef = collection(db, "clubs", "student_union", "events");
    const student_uuid = await addDoc(collection(db, "students"), {
      student_id: "643040522-6",
      student_name: "Chaiwat Janchalee",
      student_faculty: "Engineering",
      student_food_type: "",
      student_food_allergic: "",
      student_congenital_disease: "",
      student_drug_allergic: "",
    });

    console.log(student_uuid.id);
    await setDoc(
      doc(
        collection(db, "students"),
        student_uuid.id,
        "events_registration",
        "FmRpl1ENejhGHL4GbBp7"
      ),
      {
        timestamp: serverTimestamp(),
        code: uuidv4(),
        isUsed: false,
      }
    );

    // /clubs/student_union/events/first_meet_2024/students_registration/FmRpl1ENejhGHL4GbBp7
    await setDoc(
      doc(
        collection(db, "clubs"),
        "student_union",
        "events",
        "first_meet_2024",
        "students_registration",
        student_uuid.id
      ),
      {
        timestamp: serverTimestamp(),
        code: uuidv4(),
        isUsed: false,
      }
    );
  };
  return (
    <>
      {/* <div style={{}}>{JSON.stringify(student_info)}</div> */}
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default Registration;
