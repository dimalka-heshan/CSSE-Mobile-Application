import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MyQr({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/template_classic.webp")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <FontAwesomeIcon name="refresh" style={styles.icon}></FontAwesomeIcon>
      <View style={styles.rect1}>
        <View style={styles.group1}>
          <View style={styles.sIpsum1StackStackRow}>
            <View style={styles.sIpsum1StackStack}>
              <View style={styles.sIpsum1Stack}>
                <Text style={styles.sIpsum1}></Text>
                <FontAwesomeIcon
                  name="map-pin"
                  style={styles.icon2}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  name="location-arrow"
                  style={styles.icon3}
                ></FontAwesomeIcon>
              </View>
              <EntypoIcon name="compass" style={styles.icon1}></EntypoIcon>
            </View>
            <View style={styles.loremIpsum1StackColumn}>
              <View style={styles.loremIpsum1Stack}>
                <Text style={styles.loremIpsum1}></Text>
                <Text style={styles.stsSriLanka1}>STS - Sri Lanka</Text>
              </View>
              <Text style={styles.loremIpsum2}>
                Smart Tranceport System - Sri Lanka
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.myQr}></Text>
        <Text style={styles.myQr2}>My QR</Text>
      </View>
      <View style={[styles.container1, styles.materialIconTextButtonsFooter1]}>
      <TouchableOpacity style={styles.buttonWrapper1} onPress={() => navigation.navigate('FUserHome')}>
        <MaterialCommunityIconsIcon
          name="camera-timer"
          style={styles.icon11}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.dashboar}>Dashboar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeButtonWrapper} onPress={() => navigation.navigate('LMyQr')}>
        <MaterialCommunityIconsIcon
          name="qrcode"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.myQr1}>My QR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2} onPress={() => navigation.navigate('LocalPasengerProfiles')}>
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.icon22}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.profile1}>Profile</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 335,
    height: 336,
    marginTop: 223,
    marginLeft: 29
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 46,
    marginTop: 34,
    marginLeft: 177
  },
  rect1: {
    width: 393,
    height: 185,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: -640
  },
  group1: {
    width: 243,
    height: 55,
    marginTop: 56,
    marginLeft: 75
  },
  sIpsum1: {
    top: 23,
    left: 24,
    position: "absolute",
    color: "#121212"
  },
  icon2: {
    top: 0,
    left: 11,
    position: "absolute",
    color: "rgba(208,2,27,1)",
    fontSize: 27
  },
  icon3: {
    top: 23,
    left: 0,
    position: "absolute",
    color: "rgba(74,144,226,1)",
    fontSize: 34
  },
  sIpsum1Stack: {
    top: 0,
    left: 19,
    width: 27,
    height: 57,
    position: "absolute"
  },
  icon1: {
    top: 6,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30
  },
  sIpsum1StackStack: {
    width: 46,
    height: 57
  },
  loremIpsum1: {
    top: 13,
    left: 13,
    position: "absolute",
    color: "#121212"
  },
  stsSriLanka1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 21
  },
  loremIpsum1Stack: {
    width: 140,
    height: 26,
    marginLeft: 12
  },
  loremIpsum2: {
    color: "rgba(255,255,255,1)",
    width:1000,
    fontSize: 12
  },
  loremIpsum1StackColumn: {
    width: 195,
    marginLeft: 2,
    marginTop: 13,
    marginBottom: 4
  },
  sIpsum1StackStackRow: {
    height: 57,
    flexDirection: "row"
  },
  myQr: {
    color: "rgba(255,255,255,1)",
    fontSize: 31,
    marginLeft: 13
  },
  myQr2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: -9,
    marginLeft: 16
  },
  materialIconTextButtonsFooter1: {
    height: 56,
    width: 393,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 565
  },
  container1: {
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
  icon11: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8
  },
  dashboar: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
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
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8
  },
  myQr1: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
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
  icon22: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8
  },
  profile1: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  }
});

export default MyQr;
