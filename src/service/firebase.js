import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD_hYWimteVY_N-F8xKkcPiCK0xYI88Nqw",
    authDomain: "gb-9-a3c4a.firebaseapp.com",
    databaseURL: "https://gb-9-a3c4a-default-rtdb.firebaseio.com",
    projectId: "gb-9-a3c4a",
    storageBucket: "gb-9-a3c4a.appspot.com",
    messagingSenderId: "43524349910",
    appId: "1:43524349910:web:31b06d8cbd88dd21678e77",
    measurementId: "G-3L5DM6PW29"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
