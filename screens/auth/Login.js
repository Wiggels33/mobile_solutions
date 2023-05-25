import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {handleLogIn, handleSignUp} from "../../Authentification";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



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
          <TouchableOpacity onPress={() => handleSignUp(email,password)}>
            <Text>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLogIn(email,password)}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;
