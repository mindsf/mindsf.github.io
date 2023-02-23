// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// 파이어스토어에 접근할수 있게해주는 ID 등등 - 로그인해야지 준다
const firebaseConfig = {
  apiKey: "AIzaSyCxKBkm585VLb1nlcv11SMwf6akiPxEc7A",
  authDomain: "saromreact.firebaseapp.com",
  projectId: "saromreact",
  storageBucket: "saromreact.appspot.com",
  messagingSenderId: "17306618440",
  appId: "1:17306618440:web:b3160c6ed43f83fab3667d",
  measurementId: "G-DHPZD4N9LR"
};


  const app = initializeApp(firebaseConfig)
  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);
  const db = getFirestore(app)
  export { firebaseAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword ,db};