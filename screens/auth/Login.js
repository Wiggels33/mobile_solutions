import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

const handleLogIn = (auth, email, password) => {
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
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("El Medano");

  return (
    <KeyboardAvoidingView behavior={"padding"}>
      <View>
        <Text>Login</Text>
        <View>
          <TextInput
            placeholder={"Email"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder={"Password"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => handleLogIn(auth, email, password)}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;
