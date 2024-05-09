"use client";

import { db } from "@/shared";
import {
  addDoc,
  and,
  collection,
  doc,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
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
  const [student_id, setStudent_id] = useState<string>("643040522-6");
  const [student_fullname, setStudent_fullname] =
    useState<string>("Chaiwat Janchalee");
  const [student_nickname, setStudent_nickname] = useState<string>("คียู");
  const [student_faculty, setStudent_faculty] =
    useState<string>("คณะวิศวกรรมศาสตร์");
  const [student_food_type, setStudent_food_type] = useState<string>("");
  const [student_food_allergy, setStudent_food_allergy] = useState<string>("");
  const [student_drug_allergy, setStudent_drug_allergy] = useState<string>("");
  const [student_underlying_disease, setStudent_underlying_disease] =
    useState<string>("");
  const [student_telephone, setStudent_telephone] = useState<string>("");
  const [student_friend_telephone, setStudent_friend_telephone] =
    useState<string>("");
  const [student_facebook, setStudent_facebook] = useState<string>("");
  const [student_instagram, setStudent_instagram] = useState<string>("");

  const [event_first_meet, setEvent_first_meet] = useState<boolean>(false);
  const [event_pradabchor, setEvent_pradabchor] = useState<boolean>(false);
  const [event_friendship, setEvent_friendship] = useState<boolean>(false);

  const handleRegister = async () => {
    const studentsColRef = collection(db, "students");
    const student_uuid = await addDoc(studentsColRef, {
      student_id: student_id,
      student_fullname: student_fullname,
      student_nickname: student_nickname,
      student_faculty: student_faculty,
      student_food_type: student_food_type,
      student_food_allergy: student_food_allergy,
      student_drug_allergy: student_drug_allergy,
      student_underlying_disease: student_underlying_disease,
      student_telephone: student_telephone,
      student_friend_telephone: student_friend_telephone,
      student_facebook: student_facebook,
      student_instagram: student_instagram,
    });

    // Solution: use addDoc to add EVENTS
    // const firstMeetDocumentTypeI = query(
    //   collection(db, `students/${student_uuid.id}/events_registration`),
    //   and(where("name", "==", "Friendship"), where("year", "==", "2024"))
    // );

    // Solution: use setDoc to add EVENTS
    // const firstMeetDocumentTypeII = doc(
    //   db,
    //   `students/${student_uuid.id}/events_registration/friendship2024`
    // );

    // const eventsRegistrationColRef = collection(
    //   db,
    //   `students/${student_uuid.id}/events_registration`
    // );

    // event_first_meet && await setDoc(firstMeetDocRef, {
    //   timestamp: serverTimestamp(),
    //   // 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
    //   code: uuidv4().split("-")[0],
    //   code_isUsed: false,
    //   code_isUsed_timestamp: null,
    // });

    const first_meet_2024_code = uuidv4().split("-")[0];
    const pradabchor_2024_code = uuidv4().split("-")[0];
    const friendship_2024_code = uuidv4().split("-")[0];

    console.log(event_first_meet);
    console.log(event_pradabchor);
    console.log(event_friendship);

    const firstMeetDocRef = doc(
      db,
      `students/${student_uuid.id}/events_registration/first_meet_2024`
    );

    event_first_meet &&
      (await setDoc(firstMeetDocRef, {
        timestamp: serverTimestamp(),
        code: first_meet_2024_code,
        code_isUsed: false,
        code_isUsed_timestamp: null,
      }));

    const pradabchorDocRef = doc(
      db,
      `students/${student_uuid.id}/events_registration/pradabchor_2024`
    );
    if (event_pradabchor) {
      await setDoc(pradabchorDocRef, {
        timestamp: serverTimestamp(),
        code: pradabchor_2024_code,
        code_isUsed: false,
        code_isUsed_timestamp: null,
      });
    }

    const friendshipDocRef = doc(
      db,
      `students/${student_uuid.id}/events_registration/friendship_2024`
    );
    if (event_friendship) {
      await setDoc(friendshipDocRef, {
        timestamp: serverTimestamp(),
        code: friendship_2024_code,
        code_isUsed: false,
        code_isUsed_timestamp: null,
        friendship_group: "A",
      });
    }

    const events_students_registrationColRef = doc(
      db,
      `clubs/student_union/events/first_meet_2024/students_registration/${student_uuid.id}`
    );
    // first_meet_2024_code
    // pradabchor_2024_code
    // friendship_2024_code
    if (event_first_meet) {
      await setDoc(events_students_registrationColRef, {
        timestamp: serverTimestamp(),
        code: first_meet_2024_code,
        code_isUsed: false,
        code_isUsed_timestamp: null,
      });
    }
    const events_pradabchorDocRef = doc(
      db,
      `clubs/student_union/events/pradabchor_2024/students_registration/${student_uuid.id}`
    );

    if (event_pradabchor) {
      await setDoc(events_pradabchorDocRef, {
        timestamp: serverTimestamp(),
        code: pradabchor_2024_code,
        code_isUsed: false,
        code_isUsed_timestamp: null,
      });
    }

    const event_friendshipDocRef = doc(
      db,
      `clubs/student_union/events/friendship_2024/students_registration/${student_uuid.id}`
    );

    if (event_friendship) {
      await setDoc(event_friendshipDocRef, {
        timestamp: serverTimestamp(),
        code: friendship_2024_code,
        code_isUsed: false,
        code_isUsed_timestamp: null,
        friendship_group: "A",
      });
    }
  };

  return (
    <>
      <div>
        <ul>
          <li>
            <label htmlFor="Name">รหัสนักศึกษา</label>
            <input
              type="text"
              value={student_id}
              onChange={(e) => setStudent_id(e.target.value)}
            />
          </li>

          <li>
            <label htmlFor="Name">ชื่อ-นามสกุล</label>
            <input
              type="text"
              value={student_fullname}
              onChange={(e) => setStudent_fullname(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="Name">ชื่อเล่น</label>
            <input
              type="text"
              value={student_nickname}
              onChange={(e) => setStudent_nickname(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="Name">คณะ</label>
            <input
              type="text"
              value={student_faculty}
              onChange={(e) => setStudent_faculty(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="Name">อาหารที่รับประทาน</label>
            <input
              type="text"
              value={student_food_type}
              onChange={(e) => setStudent_food_type(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="Name">อาหารที่แพ้</label>
            <input
              type="text"
              value={student_food_allergy}
              onChange={(e) => setStudent_food_allergy(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="Name">ยาที่แพ้</label>
            <input
              type="text"
              value={student_drug_allergy}
              onChange={(e) => setStudent_drug_allergy(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="Name">โรคประจำตัว</label>
            <input
              type="text"
              value={student_underlying_disease}
              onChange={(e) => setStudent_underlying_disease(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="Name">เบอร์โทรศัพท์</label>
            <input
              type="text"
              value={student_telephone}
              onChange={(e) => setStudent_telephone(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="Name">เบอร์เพื่อนที่สามารถติดต่อได้</label>
            <input
              type="text"
              value={student_friend_telephone}
              onChange={(e) => setStudent_friend_telephone(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="Name">facebook</label>
            <input
              type="text"
              value={student_facebook}
              onChange={(e) => setStudent_facebook(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="Name">instagram</label>
            <input
              type="text"
              value={student_instagram}
              onChange={(e) => setStudent_instagram(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="Name">First Meet</label>
            <input
              type="checkbox"
              onChange={(e) => setEvent_first_meet(e.target.checked)}
            />
          </li>
          <li>
            <label htmlFor="Name">กลุ่มสัมพันธ์</label>
            <input
              type="checkbox"
              onChange={(e) => setEvent_pradabchor(e.target.checked)}
            />
          </li>
          <li>
            <label htmlFor="Name">ประดับช่อ</label>
            <input
              type="checkbox"
              onChange={(e) => setEvent_friendship(e.target.checked)}
            />
          </li>
        </ul>
        <button onClick={handleRegister}>ลงทะเบียน</button>
      </div>
      {/* <button onClick={handleSubmit}>submit</button> */}
    </>
  );
};

export default Registration;
