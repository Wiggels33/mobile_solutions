import { auth } from "../../config/firebaseConfig";
import React, { useState } from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { default_profil } from "../../constants";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const handleSignUp = (auth, email, password, displayName, selectedImage) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCedential) => {
      const user = userCedential.user;
      console.log("USERCEDENTIAL: ", userCedential);
      console.log("SignUp Success!");
      updateProfile(user, {
        displayName: displayName,
        photoURL: selectedImage,
      })
        .then(() => {
          // Profil aktualisiert erfolgreich - neuer displayName ist jetzt in user.displayName
          console.log("Display name updated successfully");
        })
        .catch((error) => {
          // Ein Fehler ist aufgetreten
          console.error("Error updating display name:", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ERROR:", errorMessage, errorCode);
    });
};

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
    if (result !== null) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : default_profil;

  return (
    <View>
      <Image
        source={imageSource}
        style={{ width: 100, height: 100, borderWidth: 2 }}
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
        onPress={handleSignUp(
          auth,
          email,
          password,
          displayName,
          selectedImage
        )}
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
