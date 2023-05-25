import {doc, setDoc} from "firebase/firestore";
import {app, db} from "../config/firebaseConfig";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";


const handleSignUp = (email, password) => {

    const auth = getAuth(app);


    const User = doc(db, 'Users/User');
    const docData = {
        email : email,
    }

    setDoc(User, docData, {merge: true});

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCedential) => {
            const user = userCedential.user;
            console.log("SignUp Success!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
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

onAuthStateChanged(getAuth(app), (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

export { handleSignUp, handleLogIn };