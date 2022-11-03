import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialFixedLabelTextbox from "../../components/MaterialFixedLabelTextbox";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function UpdateDriverProfile({ navigation }) {
  return (
    <View style={styles.container}>
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
        <Text style={styles.profileUpdate1}>Profile update</Text>
      </View>
      <View style={styles.rect2}>
        <View style={[styles.container5, styles.materialStackedLabelTextbox5]}>
          <Text style={styles.firstName}>First Name</Text>
          <TextInput placeholder="Input" style={styles.inputStyle5}></TextInput>
        </View>
        <View style={[styles.container3, styles.materialStackedLabelTextbox3]}>
          <Text style={styles.lastName}>Last Name</Text>
          <TextInput placeholder="Input" style={styles.inputStyle3}></TextInput>
        </View>
        <View style={[styles.container4, styles.materialStackedLabelTextbox3]}>
          <Text style={styles.mobileNo}>Mobile No</Text>
          <TextInput placeholder="Input" style={styles.inputStyle4}></TextInput>
        </View>
        <View style={[styles.container6, styles.materialStackedLabelTextbox5]}>
          <Text style={styles.passportNo}>NIC</Text>
          <TextInput placeholder="Input" style={styles.inputStyle6}></TextInput>
        </View>
        <View style={styles.materialFixedLabelTextbox1Row}>
          <MaterialFixedLabelTextbox
            style={styles.materialFixedLabelTextbox1}
          ></MaterialFixedLabelTextbox>
          <FontAwesomeIcon
            name="cloud-upload"
            style={styles.icon4}
          ></FontAwesomeIcon>
        </View>
        {/* <MaterialButtonViolet1
            style={styles.materialButtonViolet1}
          ></MaterialButtonViolet1> */}
        <TouchableOpacity
          style={[styles.containerbtnx, styles.materialButtonViolet1]}
        >
          <Text style={styles.update}>Update</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.container1, styles.cupertinoFooter1]}>
        <TouchableOpacity
          style={styles.btnWrapper1}
          onPress={() => navigation.navigate("BusProfiles")}
        >
          <MaterialCommunityIconsIcon
            name="bus-side"
            style={styles.icon00}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.profile11}>Bus</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnWrapper2}
          onPress={() => navigation.navigate("DriverQRScanner")}
        >
          <MaterialCommunityIconsIcon
            name="qrcode-scan"
            style={styles.icon100}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.scanQr}>Scan QR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnWrapper4}
          onPress={() => navigation.navigate("Driverprofiles")}
        >
          <MaterialCommunityIconsIcon
            name="account"
            style={styles.icon300}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.profile}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container6: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
  },
  passportNo: {
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
  },
  inputStyle6: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 1,
  },
  container4: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
  },
  mobileNo: {
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
  },
  inputStyle4: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 30,
    paddingTop: 8,
    paddingBottom: 1,
  },
  container3: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
  },
  lastName: {
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
  },
  inputStyle3: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 1,
  },
  materialStackedLabelTextbox5: {
    height: 60,
    width: 329,
    marginTop: 27,
    marginLeft: 20,
  },
  container5: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
  },
  firstName: {
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
  },
  inputStyle5: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 1,
  },
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  rect1: {
    width: Dimensions.get("window").width,
    height: 167,
    backgroundColor: "rgba(0,0,0,1)",
  },
  group1: {
    width: 243,
    height: 55,
    marginTop: 56,
    marginLeft: 75,
  },
  sIpsum1: {
    top: 23,
    left: 24,
    position: "absolute",
    color: "#121212",
  },
  icon2: {
    top: 0,
    left: 11,
    position: "absolute",
    color: "rgba(208,2,27,1)",
    fontSize: 27,
  },
  icon3: {
    top: 23,
    left: 0,
    position: "absolute",
    color: "rgba(74,144,226,1)",
    fontSize: 34,
  },
  sIpsum1Stack: {
    top: 0,
    left: 19,
    width: 27,
    height: 57,
    position: "absolute",
  },
  icon1: {
    top: 6,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
  },
  sIpsum1StackStack: {
    width: 46,
    height: 57,
  },
  loremIpsum1: {
    top: 13,
    left: 13,
    position: "absolute",
    color: "#121212",
  },
  stsSriLanka1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
  },
  loremIpsum1Stack: {
    width: 140,
    height: 26,
    marginLeft: 12,
  },
  loremIpsum2: {
    width: 1000,
    color: "rgba(255,255,255,1)",
    fontSize: 12,
  },
  loremIpsum1StackColumn: {
    width: 195,
    marginLeft: 2,
    marginTop: 13,
    marginBottom: 4,
  },
  sIpsum1StackStackRow: {
    height: 57,
    flexDirection: "row",
  },
  profileUpdate1: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 20,
    marginLeft: 13,
  },
  cupertinoFooter1: {
    position: "absolute",
    marginTop: Dimensions.get("window").height - 56,
    height: 58,
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(0,0,0,1)",
  },
  rect2: {
    width: 368,
    height: 558,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    marginTop: 30,
    marginLeft: 24,
  },
  materialStackedLabelTextbox1: {
    height: 60,
    width: 329,
    marginTop: 12,
    marginLeft: 20,
  },
  materialStackedLabelTextbox2: {
    height: 60,
    width: 329,
    marginTop: 16,
    marginLeft: 20,
  },
  materialStackedLabelTextbox3: {
    height: 60,
    width: 329,
    marginTop: 15,
    marginLeft: 18,
  },
  materialStackedLabelTextbox4: {
    height: 60,
    width: 329,
    marginTop: 27,
    marginLeft: 20,
  },
  materialFixedLabelTextbox1: {
    height: 43,
    width: 212,
  },
  icon4: {
    color: "rgba(74,144,226,1)",
    fontSize: 32,
    height: 32,
    width: 34,
    marginLeft: 32,
    marginTop: 11,
  },
  materialFixedLabelTextbox1Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 18,
    marginRight: 72,
  },
  materialButtonViolet1: {
    height: 42,
    width: 104,
    marginTop: 74,
    marginLeft: 127,
  },
  // container1: {
  //   backgroundColor: "#FFF",
  //   flexDirection: "row",
  //   shadowColor: "#111",
  //   shadowOffset: {
  //     width: 0,
  //     height: -2,
  //   },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 1.2,
  //   elevation: 3,
  // },
  buttonWrapper1: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  icon11: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8,
  },
  dashboar: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8,
  },
  myQr: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  buttonWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  icon22: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8,
  },
  containerbtnx: {
    backgroundColor: "rgba(92,159,19,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 25,
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
  update: {
    color: "#fff",
    fontSize: 14,
  },
  profile1: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  container1: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    width: Dimensions.get("window").width,
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon00: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 39,
    marginTop: -5,
    opacity: 0.8,
  },
  bus1: {
    fontSize: 12,
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon100: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8,
  },
  scanQr: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon300: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8,
  },
  profile: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  profile11: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    marginTop: -10,
    paddingTop: 4,
  },
});

export default UpdateDriverProfile;
