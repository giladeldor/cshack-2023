# Phase 9 - Firestore

## Task

Create new Firestore DB and connect it to out app.

Get, Create and Delete documents from our datebase.

But before you can start, you _MUST_ read about async programing. You can do it now or later, but you have to do it!!! 💣💣💣💣

- Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- Watch: https://www.youtube.com/watch?v=vn3tm0quoqE
- Watch: https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=4s

Read about firestore functions - we use web version 9 (modular) : https://firebase.google.com/docs/firestore

## Init DB:

1. **Create a Firebase project**

   - Visit the [Firebase console](https://console.firebase.google.com/) and sign in with your Google account.
   - Click on "Add project" and follow the prompts to create a new Firebase project.

2. **Enable Firestore**

   - In the Firebase console, click on the "Firestore Database" option in the left menu.
   - Click on the "Create database" button to enable Firestore for your project.
   - Choose either "Production mode" or "Test mode" depending on your requirements, then click "Next".
   - Select a Cloud Firestore location and click "Enable".

3. **Create a collection**

   - Once your Firestore database is created, you can create a collection within it.
   - Click on the "Start collection" button.
   - A dialog will appear prompting you to enter a "Collection ID". Choose a name for your collection, such as "patients", and click "Next".

4. **Add documents**
   - After creating a collection, you can start adding documents to it.
   - In the "Add document" dialog, you can either let Firestore auto-generate a document ID or enter a custom ID.
   - Fill in the fields for your document (such as `name`, `age`, `gender`, etc. for a patient) by entering the field name, selecting the data type, and providing a value.
   - Click "Save" when you're done.

## Code:

Add the following to `firebase.js`. This is the code the connect your app to firestore DB. Read about how firestore works. But if we want to keep it simple - we are:

- Connection to DB and collection
- Get - get all items. In our case - patient cards.
- Add items.
- Remove items.

```tsx
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
export const addMeetingDoc = (newDoc) =>
  addItemDoc(patientCollectionRef, newDoc);
export const deleteMeetingDoc = (docId) => deleteItemDoc("patient", docId);
```
