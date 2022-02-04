import * as firebase from 'Firebase';

const firebaseConfig={

    apiKey: "AIzaSyDZjneIs8Zatbd-riiMKOndBy_kssfwfvU",
  authDomain: "hotel-finder-ac8af.firebaseapp.com",
  projectId: "hotel-finder-ac8af",
  storageBucket: "hotel-finder-ac8af.appspot.com",
  messagingSenderId: "564775113360",
  appId: "1:564775113360:web:465edec839923d092ffe15",
  measurementId: "G-3VTDGE4X2P"

}

if(!firebase.apps.lenght){
const app = initializeApp(firebaseConfig);
}

export default firebase;