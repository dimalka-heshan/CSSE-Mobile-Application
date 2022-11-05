import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function FSignUp({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [passport, setPassport] = useState("");
  const [country, setCountry] = useState("");
  const [validDate, setValidDate] = useState("");

  //Signup when all fields are filled and passwords match and no existing user
  const signup = async (e) => {
    e.preventDefault();
    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == "" ||
      contact == "" ||
      passport == "" ||
      country == "" ||
      validDate == ""
    ) {
      alert("Please fill all the fields");
    } else if (password != confirmPassword) {
      alert("Passwords do not match");
    } else {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNo: contact,
        passportNo: passport,
        country: country,
        userExpDate: validDate,
        role: "ForeignPassenger",
      };

      console.log("====================================");
      console.log(data);
      console.log("====================================");
      await axios
        .post(
          "https://ticketing-backend.azurewebsites.net/api/user/userRegister",
          data
        )
        .then((response) => {
          alert("User registered successfully");
          setTimeout(() => {
            navigation.navigate("SignIn");
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.containerbtn, styles.materialButtonDark]}
        onPress={signup}
      >
        <Text style={styles.signUpbtn}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.signUp2}>Sign Up</Text>
      <TextInput
        placeholder="First Name"
        style={styles.textInput5}
        onChangeText={(text) => setFirstName(text)}
      ></TextInput>
      <TextInput
        placeholder="Last Name"
        style={styles.textInput6}
        onChangeText={(text) => setLastName(text)}
      ></TextInput>
      <Text style={styles.loremIpsum}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.signIn}>Sign In</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Email"
        style={styles.textInput7}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        placeholder="Contact Number"
        style={styles.textInput8}
        onChangeText={(text) => setContact(text)}
      ></TextInput>
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.textInput9}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      <TextInput
        placeholder="Confirm Password"
        style={styles.textInput10}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
      ></TextInput>

      <Icon name="chevron-left" style={styles.icon}></Icon>

      <View style={styles.textInput11Row}>
        <TextInput
          placeholder="Passport No."
          style={styles.textInput11}
          onChangeText={(text) => setPassport(text)}
        ></TextInput>
        <Text style={styles.loremIpsum1}>Already have an account?</Text>
      </View>
      <TextInput
        placeholder="Country"
        style={styles.textInput12}
        onChangeText={(text) => setCountry(text)}
      ></TextInput>
      <TextInput
        placeholder="Valid Date (DD/MM/YYYY)"
        style={styles.textInput12}
        onChangeText={(text) => setValidDate(text)}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 689,
    marginLeft: 66,
  },
  signUp2: {
    color: "#121212",
    height: 52,
    width: 228,
    textAlign: "center",
    fontSize: 40,
    marginTop: -652,
    alignSelf: "center",
  },
  textInput5: {
    color: "#121212",
    height: 43,
    width: 318,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 23,
    marginLeft: 37,
  },
  textInput6: {
    color: "#121212",
    height: 43,
    width: 318,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 37,
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 16,
    marginTop: 493,
    marginLeft: 111,
  },
  signIn: {
    color: "rgba(74,144,226,1)",
    marginTop: 2,
    marginLeft: 181,
  },
  textInput7: {
    color: "#121212",
    height: 43,
    width: 318,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: -519,
    marginLeft: 37,
  },
  textInput8: {
    color: "#121212",
    height: 43,
    width: 318,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 13,
    marginLeft: 37,
  },
  textInput9: {
    color: "#121212",
    height: 43,
    width: 318,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 209,
    marginLeft: 42,
  },
  textInput10: {
    color: "#121212",
    height: 43,
    width: 318,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 13,
    marginLeft: 42,
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: -631,
    marginLeft: 17,
  },
  textInput11: {
    color: "#121212",
    height: 43,
    width: 318,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 2,
  },
  loremIpsum1: {
    color: "#121212",
    fontSize: 16,
    marginLeft: 196,
  },
  textInput11Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 291,
    marginLeft: 37,
    marginRight: -339,
  },
  textInput12: {
    color: "#121212",
    height: 43,
    width: 318,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 13,
    marginLeft: 37,
  },
  materialIconTextbox: {
    height: 43,
    width: 318,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: 12,
    marginLeft: 37,
  },
  containertxt: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingLeft: 2,
    left: 270,
    width: 32,
    top: 2,
    height: 26,
  },
  validTill: {
    color: "rgba(155,155,155,1)",
    fontSize: 16,
    alignSelf: "flex-start",
    lineHeight: 5,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    left: 77,
    top: 7,
    textAlign: "center",
    margin: 0,
    padding: 16,
  },
  containerbtn: {
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
  signUpbtn: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    lineHeight: 18,
  },
});

export default FSignUp;
