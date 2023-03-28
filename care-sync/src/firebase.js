// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  doc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgaijXA-Rg_CuubcRVXPwZpZWKVW-U4Og",
  authDomain: "cshack-2023.firebaseapp.com",
  projectId: "cshack-2023",
  storageBucket: "cshack-2023.appspot.com",
  messagingSenderId: "225086523133",
  appId: "1:225086523133:web:5ff780f820cb5fefd46094",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
initializeApp(firebaseConfig);

// Connect to a collection
export const db = getFirestore();
const patientCollectionRef = collection(db, "patient");

// Get All Doc:
const getItemsDocs = async (DBRef) => {
  let items = [];
  try {
    const snapshot = await getDocs(DBRef);
    snapshot.docs.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });
  } catch {
    console.error("Fail to fetch from DB");
  }
  return items;
};

const addItemDoc = async (DBRef, newDoc) => {
  try {
    await addDoc(DBRef, newDoc);
  } catch {
    console.error("Failed to add doc");
  }
};

const deleteItemDoc = async (DBRefName, docID) => {
  try {
    const docRef = doc(db, DBRefName, docID);
    await deleteDoc(docRef);
  } catch {
    console.error("Failed to delete doc");
  }
};

export const getPatientDocs = () => getItemsDocs(patientCollectionRef);
export const addPatientDoc = (newDoc) =>
  addItemDoc(patientCollectionRef, newDoc);
export const deletePatientDoc = (docId) => deleteItemDoc("patient", docId);
