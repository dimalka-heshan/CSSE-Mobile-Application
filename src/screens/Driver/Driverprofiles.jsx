import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Driverprofiles({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.group2}>
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
          <Text style={styles.profile1}>Profile</Text>
        </View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
          <TouchableOpacity onPress={() => navigation.navigate('UpdateDriverProfile')}>
            <FontAwesomeIcon
              name="pencil-square-o"
              style={styles.icon4}
            ></FontAwesomeIcon>
            </TouchableOpacity>
            <Text style={styles.nimnaThiranjaya1}>Nimna Thiranjaya</Text>
            <View style={styles.icon5Row}>
              <EntypoIcon name="users" style={styles.icon5}></EntypoIcon>
              <Text style={styles.driver1}>Driver</Text>
            </View>
            <View style={styles.icon6Row}>
              <FeatherIcon name="phone" style={styles.icon6}></FeatherIcon>
              <View style={styles.mobile1Column}>
                <Text style={styles.mobile1}>Mobile</Text>
                <Text style={styles.loremIpsum3}>0779875632</Text>
              </View>
            </View>
            <View style={styles.icon7Row}>
              <EntypoIcon
                name="mail-with-circle"
                style={styles.icon7}
              ></EntypoIcon>
              <View style={styles.email1Column}>
                <Text style={styles.email1}>Email</Text>
                <Text style={styles.nkravindu1}>nkravindu7@gmail.com</Text>
              </View>
            </View>
            <View style={styles.icon8Row}>
              <EntypoIcon name="ticket" style={styles.icon8}></EntypoIcon>
              <View style={styles.nic1Column}>
                <Text style={styles.nic1}>NIC</Text>
                <Text style={styles.nkravindu2}>200003800910</Text>
              </View>
            </View>
          </View>
          <Image
            source={require("../../assets/images/2aa1.jpg")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
        <View style={[styles.container1, styles.cupertinoFooter1]}>
      <TouchableOpacity style={styles.btnWrapper1} onPress={() => navigation.navigate('BusProfiles')}>
        <MaterialCommunityIconsIcon
          name="bus-side"
          style={styles.icon00}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.profile11}>Bus</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2} onPress={() => navigation.navigate('DriverQRScanner')}>
        <MaterialCommunityIconsIcon
          name="qrcode-scan"
          style={styles.icon100}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.scanQr}>Scan QR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4} onPress={() => navigation.navigate('Driverprofiles')}>
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.icon300}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.profile}>Profile</Text>
      </TouchableOpacity>
    </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  group2: {
    width: 393,
    height: 851,
    alignSelf: "center"
  },
  rect1: {
    width: 393,
    height: 167,
    backgroundColor: "rgba(0,0,0,1)"
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
  profile1: {
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    marginTop: 17,
    marginLeft: 9
  },
  rect2: {
    top: 55,
    width: 355,
    height: 471,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 60,
    shadowOpacity: 1,
    shadowRadius: 20,
    left: 0
  },
  icon4: {
    color: "rgba(74,74,74,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginTop: 8,
    marginLeft: 300
  },
  nimnaThiranjaya1: {
    color: "#121212",
    fontSize: 20,
    marginTop: 26,
    marginLeft: 99
  },
  icon5: {
    color: "rgba(208,2,27,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  driver1: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 16,
    marginTop: 9
  },
  icon5Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 66,
    marginLeft: 71,
    marginRight: 189
  },
  icon6: {
    color: "rgba(74,144,226,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginTop: 5
  },
  mobile1: {
    color: "#121212",
    fontSize: 17
  },
  loremIpsum3: {
    color: "#121212",
    width: 1000,
    marginTop: 1
  },
  mobile1Column: {
    width: 79,
    marginLeft: 18
  },
  icon6Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 74,
    marginRight: 154
  },
  icon7: {
    color: "rgba(74,144,226,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 10
  },
  email1: {
    color: "#121212",
    fontSize: 17
  },
  nkravindu1: {
    width: 1000,
    color: "#121212"
  },
  email1Column: {
    width: 147,
    marginLeft: 18,
    marginBottom: 6
  },
  icon7Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 74,
    marginRight: 86
  },
  icon8: {
    color: "rgba(155,155,155,1)",
    fontSize: 29,
    height: 32,
    width: 29,
    marginTop: 4
  },
  nic1: {
    color: "#121212",
    fontSize: 17
  },
  nkravindu2: {
    color: "#121212",
    width: 1000,
    marginTop: 2
  },
  nic1Column: {
    width: 94,
    marginLeft: 18
  },
  icon8Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 75,
    marginRight: 139
  },
  image1: {
    top: 0,
    left: 122,
    width: 111,
    height: 111,
    position: "absolute",
    borderRadius: 100
  },
  rect2Stack: {
    width: 355,
    height: 526,
    marginTop: 12,
    marginLeft: 19
  },
  cupertinoFooter1: {
    height: 55,
    width: 393,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 70
  },
  container1: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    width: "100%"
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon00: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 39,
    marginTop: -5,
    opacity: 0.8
  },
  bus1: {
    fontSize: 12,
    backgroundColor: "transparent",
    paddingTop: 4
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon100: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8
  },
  scanQr: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon300: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8
  },
  profile: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  profile11: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    marginTop: -10,
    paddingTop: 4
  }
});

export default Driverprofiles;
