import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CupertinoButtonSuccess1 from "../components/CupertinoButtonSuccess1";

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}></Text>
      <CupertinoButtonSuccess1
        style={styles.cupertinoButtonSuccess1}
      ></CupertinoButtonSuccess1>
      <Text style={styles.loremIpsum2}>Life On Land{"\n"}Sri Lanka</Text>
      <Image
        source={require("../assets/images/Save_the_Earth-bro.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 95,
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 675,
    marginLeft: 203,
  },
  cupertinoButtonSuccess1: {
    height: 44,
    width: 313,
    marginTop: 70,
    marginLeft: 40,
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 2,
    marginTop: -725,
    alignSelf: "center",
  },
  image: {
    width: 330,
    height: 260,
    marginTop: 18,
    marginLeft: 31,
  },
});

export default LoginScreen;
