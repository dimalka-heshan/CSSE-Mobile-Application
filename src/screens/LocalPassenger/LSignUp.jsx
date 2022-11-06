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

function LSignUp({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [nic, setNic] = useState("");

  //Signup when all fields are filled and passwords match and no existing user
  const signup = async (e) => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let reg2 = /^[0-9\b]+$/;
    let reg3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let reg5 = /^[A-Za-z]+$/;

    e.preventDefault();
    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == "" ||
      contact == ""
    ) {
      alert("Please fill all the fields");
    } else if (reg5.test(firstName) === false) {
      alert("Name must contain only letters.");
      return false;
    } else if (reg5.test(lastName) === false) {
      alert("Name must contain only letters.");
      return false;
    }
    else if (reg.test(email) === false) {
      alert("Email is Not Correct");
      return false;
    }
    else if (reg2.test(contact) === false){ 
      alert("Please enter valid phone number.");
      return false;
    }
    else if (contact.length != 10){ 
      alert("Please enter valid phone number.");
      return false;
    }    
    else if (reg3.test(password) === false){ 
      alert("Your password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
      return false;
    }
    
    else if (password != confirmPassword) {
      alert("Passwords do not match");
    } else {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNo: contact,
        nic: "991881456V",
        role: "LocalPassenger",
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
          }, 2000);
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
      <View style={styles.textInput7Row}>
        <TextInput
          placeholder="Email"
          style={styles.textInput7}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <Text style={styles.loremIpsum1}>Already have an account?</Text>
      </View>

      <TextInput
        placeholder="Contact Number"
        style={styles.textInput8}
        onChangeText={(text) => setContact(text)}
      ></TextInput>

      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        style={styles.textInput9}
      ></TextInput>
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        style={styles.textInput10}
        onChangeText={(text) => setConfirmPassword(text)}
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
    marginTop: 683,
    marginLeft: 66,
  },
  signUp2: {
    color: "#121212",
    height: 52,
    width: 228,
    textAlign: "center",
    fontSize: 40,
    marginTop: -624,
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
    marginTop: 75,
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
    marginTop: 14,
    marginLeft: 37,
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 16,
    marginTop: 415,
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
  },
  loremIpsum1: {
    color: "#121212",
    fontSize: 16,
    marginLeft: 196,
    marginTop: 34,
  },
  textInput7Row: {
    height: 53,
    flexDirection: "row",
    marginTop: -441,
    marginLeft: 37,
    marginRight: -339,
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
    marginTop: 3,
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
    marginTop: 100,
    marginLeft: 37,
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
    marginLeft: 37,
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: -598,
    marginLeft: 17,
  },
  textInput14: {
    color: "#121212",
    height: 43,
    width: 318,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 371,
    marginLeft: 37,
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

export default LSignUp;
