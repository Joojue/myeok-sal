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

export const getData = async (team: string) => {
  const querySnapshot = await getDocs(collection(db, team));

  const inbodys: DocumentData = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    inbodys.push(data);
  });
  return inbodys;
};

export const getInfo = async (id: string, team: string) => {
  const docRef = await getDoc(doc(db, team, id));
  return docRef.data();
};

export const updateData = async (
  name: string,
  updatedData: DocumentData,
  team: string
) => {
  const docRef = doc(db, team, name);

  await updateDoc(docRef, updatedData).then((result) => {
    return result;
  });
};

export const getComments = async (name: string, team: string) => {
  const docRef = collection(db, team, name, "comments");
  const q = query(docRef, orderBy("time", "desc"));
  const querySnapshot = await getDocs(q);
  const inbodys: DocumentData = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    inbodys.push(data);
  });
  return inbodys;
};

export const postComments = async (
  name: string,
  content: string,
  team: string
) => {
  const docRef = doc(collection(db, team, name, "comments"));
  await setDoc(docRef, {
    content: content,
    time: new Date(),
  });
};
