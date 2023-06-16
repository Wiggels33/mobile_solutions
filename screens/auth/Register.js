import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { handleSignUp } from "../../Authentification";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

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
  const imageSource =
    selectedImage !== null
      ? { uri: selectedImage }
      : require("../../constants/Images/Profilbild.png");

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
          value={displayName}
          onChangeText={(text) => setDisplayName(text)}
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
      <TouchableOpacity
        onPress={() => handleSignUp(email, password, displayName)}
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
