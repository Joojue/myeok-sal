import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));

  const inbodys: DocumentData = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    inbodys.push(data);
  });
  return inbodys;
};

export const getInfo = async (id: string) => {
  const docRef = await getDoc(doc(db, "users", id));
  return docRef.data();
};

export const updateData = async (name: string, updatedData: DocumentData) => {
  const docRef = doc(db, "users", name);

  await updateDoc(docRef, updatedData).then((result) => {
    return result;
  });
};

export const getComments = async (name: string) => {
  const docRef = collection(db, "users", name, "comments");
  const q = query(docRef, orderBy("time", "desc"));
  const querySnapshot = await getDocs(q);
  const inbodys: DocumentData = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    inbodys.push(data);
  });
  return inbodys;
};

export const postComments = async (name: string, content: string) => {
  const docRef = doc(collection(db, "users", name, "comments"));
  await setDoc(docRef, {
    content: content,
    time: new Date(),
  });
};
