import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import MaterialButtonDark from "../components/MaterialButtonDark";
import Icon from "react-native-vector-icons/Entypo";

function LSignUp({navigation}) {
  return (
    <View style={styles.container}>
      {/* <MaterialButtonDark
        style={styles.materialButtonDark}
      ></MaterialButtonDark> */}
    <TouchableOpacity style={[styles.containerbtn, styles.materialButtonDark]}>
      <Text style={styles.signUpbtn}>Sign Up</Text>
    </TouchableOpacity>
      <Text style={styles.signUp2}>Sign Up</Text>
      <TextInput placeholder="First Name" style={styles.textInput5}></TextInput>
      <TextInput placeholder="Last Name" style={styles.textInput6}></TextInput>
      <Text style={styles.loremIpsum}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}><Text style={styles.signIn}>Sign In</Text></TouchableOpacity>
      <View style={styles.textInput7Row}>
        <TextInput placeholder="Email" style={styles.textInput7}></TextInput>
        <Text style={styles.loremIpsum1}>Already have an account?</Text>
      </View>
      <TextInput
        placeholder="Contact Number"
        style={styles.textInput8}
      ></TextInput>
      <TextInput placeholder="Password" style={styles.textInput9}></TextInput>
      <TextInput
        placeholder="Confirm Password"
        style={styles.textInput10}
      ></TextInput>
      <TextInput placeholder="NIC" style={styles.textInput14}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,30,1)"
  },
  materialButtonDark: {
    height: 47,
    width: 270,
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 683,
    marginLeft: 66
  },
  signUp2: {
    color: "#121212",
    height: 52,
    width: 228,
    textAlign: "center",
    fontSize: 40,
    marginTop: -624,
    alignSelf: "center"
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
    marginLeft: 37
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
    marginLeft: 37
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 16,
    marginTop: 415,
    marginLeft: 111
  },
  signIn: {
    color: "rgba(74,144,226,1)",
    marginTop: 2,
    marginLeft: 181
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
    fontSize: 18
  },
  loremIpsum1: {
    color: "#121212",
    fontSize: 16,
    marginLeft: 196,
    marginTop: 34
  },
  textInput7Row: {
    height: 53,
    flexDirection: "row",
    marginTop: -441,
    marginLeft: 37,
    marginRight: -339
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
    marginLeft: 37
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
    marginLeft: 37
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
    marginLeft: 37
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: -598,
    marginLeft: 17
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
    marginLeft: 37
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
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  signUpbtn: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    lineHeight: 18
  }
});

export default LSignUp;
