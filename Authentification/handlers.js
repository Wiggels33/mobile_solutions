import { doc, setDoc } from "firebase/firestore";
import { app, db } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebase from "firebase/compat";

const handleSignUp = (email, password, name, selectedImage) => {
  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCedential) => {
      const user = userCedential.user;
      console.log("SignUp Success!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ERROR:", errorMessage);
    });
  const User = doc(db, "Users/User");
  const docData = {
    email: email,
    name: name,
    profilImage: selectedImage,
  };

  setDoc(User, docData, { merge: true })
    .then((r) => console.log("setDoc(success):", r))
    .catch((e) => console.log(e));
};

const handleLogIn = (email, password) => {
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("LogIn Success!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

onAuthStateChanged(getAuth(app), async (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    const userRef = firebase.firestore().collection("users").doc(uid);

    try {
      // Check if the user document already exists
      const userSnapshot = await userRef.get();

      if (!userSnapshot.exists) {
        // User document doesn't exist, create a new one
        await userRef.set({
          name: displayName,
          profilePicture: photoURL,
          email: email,
        });
      }
    } catch (error) {
      console.log("Error creating user document:", error);
    }

    // ...
  } else {
    // User is signed out
    // ...
  }
});

export { handleSignUp, handleLogIn };
