import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyDsDdq1Zh-glm0MQBAv9ABwy2-sx1n811o",
  authDomain: "venturellp.firebaseapp.com",
  databaseURL: "https://venturellp-default-rtdb.firebaseio.com",
  projectId: "venturellp",
  storageBucket: "venturellp.appspot.com",
  messagingSenderId: "961831721232",
  appId: "1:961831721232:web:929daf0d0d06e6a1372d95",
  measurementId: "G-9KKGLRSKTM"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;


  


  


