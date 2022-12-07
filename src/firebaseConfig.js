import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCnYJTa63-PRm899pb_va79ndU68Jkt_r8",
    authDomain: "myworks-f1205.firebaseapp.com",
    projectId: "myworks-f1205",
    storageBucket: "myworks-f1205.appspot.com",
    messagingSenderId: "248734016315",
    appId: "1:248734016315:web:2259b601c7bd4ea68bcd1e",
    measurementId: "G-KE1P2B2HB8"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const data = getFirestore(firebaseApp);
console.log(data);


export default data;