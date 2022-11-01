import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Navigationbar({navigation}) {
  return (
    <View style={[styles.containerx, styles.materialIconTextButtonsFooter1]}>
    <TouchableOpacity 
      style={styles.buttonWrapper1} 
      onPress={() => navigation.navigate('UserHome')}
    >
      <MaterialCommunityIconsIcon
        name="camera-timer"
        style={styles.icon1}
      ></MaterialCommunityIconsIcon>
      <Text style={styles.dashboar}>Dashboar</Text>
    </TouchableOpacity>

    <TouchableOpacity 
      style={styles.activeButtonWrapper}
      onPress={() => navigation.navigate('MyQr')}
    >
      <MaterialCommunityIconsIcon
        name="qrcode"
        style={styles.activeIcon}
      ></MaterialCommunityIconsIcon>
      <Text style={styles.myQr}>My QR</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonWrapper2}>
      <MaterialCommunityIconsIcon
        name="account"
        style={styles.icon2}
      ></MaterialCommunityIconsIcon>
      <Text style={styles.profile}>Profile</Text>
    </TouchableOpacity>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialIconTextButtonsFooter1: {
    height: 56,
    width: 393,
    backgroundColor: "rgba(255,255,0,1)",
    marginTop: 747,
    alignSelf: "center"
  },
  containerx: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  buttonWrapper1: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    opacity: 0.8
  },
  dashboar: {
    fontSize: 12,
    color: "rgba(0,0,0,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    opacity: 0.8
  },
  myQr: {
    fontSize: 12,
    color: "rgba(0,0,0,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  buttonWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    opacity: 0.8
  },
  profile: {
    fontSize: 12,
    color: "rgba(0,0,0,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  }
});

export default Navigationbar;
