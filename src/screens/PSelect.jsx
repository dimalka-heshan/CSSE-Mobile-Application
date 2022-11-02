import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function PSelect({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.selectCategory}>Select Passenger Category</Text>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/Mobile_login-amico.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.selectUserType}></Text>
        </ImageBackground>
        {/* <MaterialButtonDark2
          style={styles.materialButtonDark2}
        ></MaterialButtonDark2> */}
        <TouchableOpacity 
          style={[styles.containerbtn2, styles.materialButtonDark2]}
          onPress={() => navigation.navigate('LSignUp')}
        >
          <Text style={styles.localPassenger}>Local Passenger</Text>
        </TouchableOpacity>
      </View>
      {/* <MaterialButtonDark1
        style={styles.materialButtonDark1}
      ></MaterialButtonDark1> */}
      <TouchableOpacity 
        style={[styles.containerbtn1, styles.materialButtonDark1]}
        onPress={() => navigation.navigate('FSignUp')}
      >
        <Text style={styles.foreignPassenger}>Foreign Passenger</Text>
      </TouchableOpacity>
      <Icon name="chevron-left" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,231,28,1)"
  },
  selectCategory: {
    color: "#121212",
    height: 46,
    width: 345,
    textAlign: "center",
    fontSize: 40,
    marginTop: 98,
    marginLeft: 24
  },
  image: {
    top: 0,
    left: 0,
    width: 310,
    height: 287,
    position: "absolute"
  },
  image_imageStyle: {},
  selectUserType: {
    color: "#121212",
    marginTop: 193,
    marginLeft: 88
  },
  materialButtonDark2: {
    height: 55,
    width: 298,
    position: "absolute",
    left: 7,
    top: 271,
    borderRadius: 100
  },
  imageStack: {
    width: 310,
    height: 326,
    marginTop: 37,
    marginLeft: 41
  },
  materialButtonDark1: {
    height: 55,
    width: 298,
    borderRadius: 100,
    marginTop: 17,
    marginLeft: 48
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: -544,
    marginLeft: 24
  },
  containerbtn1: {
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
  foreignPassenger: {
    color: "#fff",
    fontSize: 18,
  },
  containerbtn2: {
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
  localPassenger: {
    color: "#fff",
    fontSize: 18,
  }
});

export default PSelect;
