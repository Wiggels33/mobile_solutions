import { app } from "../config/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const handleLogIn = (email, password) => {
//   const auth = getAuth(app);
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log("LogIn Success!");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//     });
// };

// export { handleLogIn };
