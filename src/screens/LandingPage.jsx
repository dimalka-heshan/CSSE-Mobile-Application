import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from "react-native";

function LandingPage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/360_F_521727451_0QuSbD8yDvrOw7gnYl5qog5VqEQNBHgw-removebg-preview.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.loremIpsum}>STS - Sri Lanka</Text>
        <Text style={styles.loremIpsum2}>
          Smart Transport System - Sri Lanka
        </Text>
      </View>
    <TouchableOpacity 
      style={[styles.containerx,styles.materialButtonDark]}
      onPress={() => navigation.navigate('SignIn')}
      >
      <Text style={styles.letsGetStarted}>Lets Get Started</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,30,1)"
  },
  image: {
    top: 0,
    width: 425,
    height: 356,
    position: "absolute",
    left: 0
  },
  loremIpsum: {
    top: 319,
    left: 6,
    fontWeight:"bold",
    position: "absolute",
    color: "#121212",
    height: 58,
    width: 412,
    textAlign: "center",
    fontSize: 23
  },
  loremIpsum2: {
    top: 350,
    left: 52,
    position: "absolute",
    color: "rgba(208,2,27,1)",
    height: 35,
    width: 322,
    textAlign: "center"
  },
  imageStack: {
    width: 425,
    height: 395,
    marginTop: 133,
    marginLeft: -16
  },
  materialButtonDark: {
    height: 60,
    width: 340,
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 72,
    marginLeft: 27
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
  letsGetStarted: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    lineHeight: 18
  }

});

export default LandingPage;
