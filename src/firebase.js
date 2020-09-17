import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBlS5MG2bO8Ax-3qE_YFkmHUt6O3FTIAPM",
  authDomain: "chdonations-a2cf9.firebaseapp.com",
  databaseURL: "https://chdonations-a2cf9.firebaseio.com",
  projectId: "chdonations-a2cf9",
  storageBucket: "chdonations-a2cf9.appspot.com",
  messagingSenderId: "713327211670",
  appId: "1:713327211670:web:260ddf8d9623ba60b47eb7",
  measurementId: "G-ZVZTKP24V8",
});

const auth = firebase.auth();
// const database = firebase.database();

export { auth };

// const itemObj = {
//     "items":{
//         "itemId":{
//             "description":"gray couch",
//             "category":"furniture",
//             "branch":"ep",
//             "photoUrl":"",
//             "dateCollected":"12/12/2019",
//             "donatedBy": "clientName",
//             "dateDonated": "MM/DD/YYYY",
//             "donatedTo":"Business name"
//         }
//     }
// }
// function writeUserData(itemId, description, branch, imageUrl,) {
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }
