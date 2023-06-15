import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { handleSignUp } from "../../Authentification";
import { onAuthStateChanged } from "firebase/auth";

const Register = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (result) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  const placeholderImage = require("../../constants/Images/Profilbild.png");
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImage;

  const handleRegister = () => {
    handleSignUp(email, password, name, selectedImage);
  };

  useEffect(() => {});

  return (
    <View>
      <Image
        source={imageSource}
        style={{ width: 100, height: 100, borderWidth: 2, borderColor: "red" }}
      />
      <Button title={"Choose Image"} onPress={pickImage} />
      <View>
        <TextInput
          placeholder={"Name"}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
        <TextInput
          placeholder={"Password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
