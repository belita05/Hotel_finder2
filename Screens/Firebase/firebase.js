import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyDZjneIs8Zatbd-riiMKOndBy_kssfwfvU",
  authDomain: "hotel-finder-ac8af.firebaseapp.com",
  projectId: "hotel-finder-ac8af",
  storageBucket: "hotel-finder-ac8af.appspot.com",
  messagingSenderId: "564775113360",
  appId: "1:564775113360:web:465edec839923d092ffe15",
  measurementId: "G-3VTDGE4X2P"
};
// Initialize Firebase
let app;
if(!firebase.apps.length){
app = firebase.initializeApp(firebaseConfig);
}else{
  firebase.app;
}
const auth= firebase.auth();
const firestore=firebase.firestore()

<<<<<<< HEAD

export {auth};
=======
export {auth,firestore};
>>>>>>> 1c3c3f18d34ffdf1a69a4206236a3fb4cf9ef775
