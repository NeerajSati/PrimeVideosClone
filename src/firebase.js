import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD9Db4UndDT6Kx1BLZe6DDxMkXYMm1BCHc",
  authDomain: "primevideoclone-fe45f.firebaseapp.com",
  databaseURL: "https://primevideoclone-fe45f-default-rtdb.firebaseio.com",
  projectId: "primevideoclone-fe45f",
  storageBucket: "primevideoclone-fe45f.appspot.com",
  messagingSenderId: "635392882078",
  appId: "1:635392882078:web:cd5ec9e752b30c018e528f",
  measurementId: "G-1K7VZ2NYXB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;