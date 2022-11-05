import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async () => {
    if (email === "" || password === "") {
      setError("Enter email and password");
    } else {
      await axios
        .post(
          "https://ticketing-backend.azurewebsites.net/api/user/userLogin",
          {
            email,
            password,
          }
        )
        .then((res) => {
          if (res.data.status) {
            var token = res.data.token;
            console.log(token);
            const storeData = async (value) => {
              try {
                await AsyncStorage.setItem("Token", value);
              } catch (e) {
                console.log(e);
              }
            };
            switch (res.data.role) {
              case "Driver":
                AsyncStorage.clear();
                storeData(token);
                navigation.navigate("Driverdashboard");
                break;
              case "Admin":
                console.log("Admin");
                break;
              default:
                console.log("User");
            }
          } else {
            setError(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setError("Invalid email or password");
        });
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={handleLogin}
      >
        <Text style={styles.signUpx}>Sign In</Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/images/Login-cuate.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.text}>Sign In</Text>
      <TextInput
        placeholder="Email"
        style={styles.textInput2}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Text style={styles.loremIpsum}>Don&#39;t have an account yet?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("PSelect")}>
        <Text style={styles.signUp}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,30,1)",
  },
  materialButtonDark: {
    height: 47,
    width: 270,
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 596,
    marginLeft: 66,
  },
  image: {
    width: 255,
    height: 251,
    marginTop: -475,
    marginLeft: 73,
  },
  text: {
    color: "#121212",
    height: 52,
    width: 228,
    textAlign: "center",
    fontSize: 40,
    marginTop: -311,
    marginLeft: 83,
  },
  textInput2: {
    color: "#121212",
    height: 51,
    width: 334,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 272,
    marginLeft: 33,
  },
  textInput: {
    color: "#121212",
    height: 51,
    width: 334,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 19,
    marginLeft: 33,
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 16,
    marginTop: 113,
    marginLeft: 107,
  },
  signUp: {
    color: "rgba(74,144,226,1)",
    marginTop: 2,
    marginLeft: 177,
  },
  containerx: {
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  signUpx: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    lineHeight: 18,
  },
});
