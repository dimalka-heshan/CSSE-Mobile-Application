import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from "react-native";

function SignIn({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate('Driverdashboard')}
      >
        <Text style={styles.signUpx}>Sign In</Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/images/Login-cuate.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.text}>Sign In</Text>
      <TextInput placeholder="Email" style={styles.textInput2}></TextInput>
      <TextInput placeholder="Password" style={styles.textInput}></TextInput>
      <Text style={styles.loremIpsum}>Don&#39;t have an account yet?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PSelect')}>
        <Text style={styles.signUp}>Sign Up</Text>
      </TouchableOpacity>
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
    marginTop: 596,
    marginLeft: 66
  },
  image: {
    width: 255,
    height: 251,
    marginTop: -475,
    marginLeft: 73
  },
  text: {
    color: "#121212",
    height: 52,
    width: 228,
    textAlign: "center",
    fontSize: 40,
    marginTop: -311,
    marginLeft: 83
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
    marginLeft: 33
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
    marginLeft: 33
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 16,
    marginTop: 113,
    marginLeft: 107
  },
  signUp: {
    color: "rgba(74,144,226,1)",
    marginTop: 2,
    marginLeft: 177
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
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  signUpx: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    lineHeight: 18
  }
});

export default SignIn;
