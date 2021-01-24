// import { getFirebase } from '../../../../services/firebase';
// import handleSignedInUser from '../../../../functions/auth/handleSignedInUser';
//
// export default function signInWithGoogle() {
//   const firebase = getFirebase();
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().useDeviceLanguage();
//
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(function(result) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const token = result.credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//
//       console.log(result);
//       handleSignedInUser(user);
//       // ...
//     })
//     .catch(function(error) {
//       console.error(error);
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       const credential = error.credential;
//       // ...
//     });
// }
