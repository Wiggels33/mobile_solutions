import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { handleLogIn } from "../../Authentification";
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
          <TouchableOpacity onPress={() => handleLogIn(email, password)}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;
