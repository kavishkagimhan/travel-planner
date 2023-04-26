import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const planeCollectionRef = collection(db, "planes");
class planeDataService {

  addPlane= (newPlane) => {
    return addDoc(planeCollectionRef, newPlane);
  };

  updateDoctor = (id, updatedDoctor) => {
    const doctorDoc = doc(db, "doctors", id);
    return updateDoc(doctorDoc, updatedDoctor);
  };

  deleteplane = (id) => {
    const planeDoc = doc(db, "planes", id);
    return deleteDoc(planeDoc);
  };

  getAllPlanes = () => {
    return getDocs(planeCollectionRef);
  };

  getStudent = (id) => {
    const studentDoc = doc(db, "students", id);
    return getDoc(studentDoc);
  };
}

export default new planeDataService();