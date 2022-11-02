import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Travelhistory({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.group11}>
        <View style={styles.group5}>
          <View style={styles.rect1Stack}>
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
                    <EntypoIcon
                      name="compass"
                      style={styles.icon1}
                    ></EntypoIcon>
                  </View>
                  <View style={styles.loremIpsum1StackColumn}>
                    <View style={styles.loremIpsum1Stack}>
                      <Text style={styles.loremIpsum1}></Text>
                      <View style={styles.group6}>
                        <Text style={styles.stsSriLanka1}>STS - Sri Lanka</Text>
                      </View>
                    </View>
                    <Text style={styles.loremIpsum2}>
                      Smart Tranceport System - Sri Lanka
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.text}>Travel History</Text>
            </View>
            <Image
              source={require("../../assets/images/Bus_driver-pana.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.group2}>
              <View style={styles.rect2}>
                <View style={styles.fromStackRow}>
                  <View style={styles.fromStack}>
                    <Text style={styles.from}>From</Text>
                    <EntypoIcon
                      name="location-pin"
                      style={styles.icon4}
                    ></EntypoIcon>
                  </View>
                  <Text style={styles.matara}>Matara</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.group3}>
            <View style={styles.group10}>
              <View style={styles.rect3}>
                <View style={styles.to2ColumnRow}>
                  <View style={styles.to2Column}>
                    <Text style={styles.to2}>To</Text>
                    <FontAwesomeIcon
                      name="location-arrow"
                      style={styles.icon5}
                    ></FontAwesomeIcon>
                  </View>
                  <View style={styles.group7}>
                    <Text style={styles.kaduwela}>Kaduwela</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.group4}>
            <View style={styles.group8}>
              <View style={styles.rect4}>
                <View style={styles.icon6Row}>
                  <MaterialCommunityIconsIcon
                    name="bus"
                    style={styles.icon6}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.busRoute1390}>Bus Route -</Text>
                  <Text style={styles.distance605}>Distance</Text>
                </View>
                <View style={styles.icon7Row}>
                  <MaterialCommunityIconsIcon
                    name="bus-alert"
                    style={styles.icon7}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.departure604}>Departure -</Text>
                  <Text style={styles.busRoute1386}>07.00am</Text>
                </View>
                <View style={styles.icon9Row}>
                  <MaterialCommunityIconsIcon
                    name="map-marker-distance"
                    style={styles.icon9}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.distance604}>Distance -</Text>
                  <View style={styles.group9}>
                    <Text style={styles.busRoute1388}>50 Km</Text>
                  </View>
                </View>
                <View style={styles.icon8Row}>
                  <MaterialCommunityIconsIcon
                    name="bus-clock"
                    style={styles.icon8}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.arrival1004}>Arrival -</Text>
                  <Text style={styles.busRoute1387}>11.00am</Text>
                </View>
                <View style={styles.icon10Row}>
                  <EntypoIcon
                    name="creative-commons-noncommercial-us"
                    style={styles.icon10}
                  ></EntypoIcon>
                  <Text style={styles.ticketPrice4}>Ticket Price</Text>
                  <Text style={styles.rs150000}>Rs. 1500.00</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.container1, styles.materialIconTextButtonsFooter1]}>
      <TouchableOpacity style={styles.buttonWrapper1} onPress={() => navigation.navigate('FUserHome')}>
        <MaterialCommunityIconsIcon
          name="camera-timer"
          style={styles.icon11}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.dashboar}>Dashboar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeButtonWrapper} onPress={() => navigation.navigate('FMyQr')}>
        <MaterialCommunityIconsIcon
          name="qrcode"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.myQr}>My QR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2} onPress={() => navigation.navigate('ForignPassengerProfile')}>
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.icon22}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.profile1}>Profile</Text>
      </TouchableOpacity>
      </View>
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
  group11: {
    width: 393,
    height: 851,
    justifyContent: "center",
    alignSelf: "center"
  },
  group5: {
    width: 393,
    height: 851
  },
  rect1: {
    top: 0,
    width: 393,
    height: 185,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    left: 0
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
  group6: {
    top: 0,
    left: 0,
    width: 140,
    height: 26,
    position: "absolute"
  },
  stsSriLanka1: {
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
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 35,
    marginLeft: 16
  },
  image: {
    top: 137,
    left: 47,
    width: 289,
    height: 210,
    position: "absolute"
  },
  group2: {
    top: 308,
    left: 22,
    width: 338,
    height: 95,
    position: "absolute"
  },
  rect2: {
    width: 338,
    height: 88,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 21,
    shadowOpacity: 1,
    shadowRadius: 7,
    flexDirection: "row"
  },
  from: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "#121212",
    width:1000,
    fontSize: 18
  },
  icon4: {
    top: 20,
    left: 0,
    position: "absolute",
    color: "rgba(208,2,27,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  fromStack: {
    width: 42,
    height: 58
  },
  matara: {
    color: "#121212",
    fontSize: 18,
    marginLeft: 46,
    marginTop: 22
  },
  fromStackRow: {
    height: 58,
    flexDirection: "row",
    flex: 1,
    marginRight: 112,
    marginLeft: 81,
    marginTop: 13
  },
  rect1Stack: {
    width: 393,
    height: 403
  },
  group3: {
    width: 338,
    height: 88,
    justifyContent: "center",
    marginTop: 1,
    marginLeft: 22
  },
  group10: {
    width: 338,
    height: 88
  },
  rect3: {
    width: 338,
    height: 88,
    backgroundColor: "rgba(80,227,194,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5
  },
  to2: {
    color: "#121212",
    fontSize: 18,
    marginLeft: 6
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 35,
    width: 28
  },
  to2Column: {
    width: 28
  },
  group7: {
    width: 78,
    height: 22,
    marginLeft: 55,
    marginTop: 20
  },
  kaduwela: {
    color: "#121212",
    fontSize: 18
  },
  to2ColumnRow: {
    height: 57,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 86,
    marginRight: 91
  },
  group4: {
    width: 343,
    height: 246,
    marginTop: 13,
    marginLeft: 25
  },
  group8: {
    width: 343,
    height: 246,
    alignSelf: "center"
  },
  rect4: {
    width: 343,
    height: 246,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 27,
    shadowOpacity: 1,
    shadowRadius: 9
  },
  icon6: {
    color: "rgba(74,144,226,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  busRoute1390: {
    color: "#121212",
    fontSize: 18,
    marginLeft: 14,
    marginTop: 10
  },
  distance605: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 5,
    marginTop: 10
  },
  icon6Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 30,
    marginRight: 102
  },
  icon7: {
    color: "rgba(74,144,226,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  departure604: {
    color: "#121212",
    fontSize: 18,
    marginLeft: 11,
    marginTop: 8
  },
  busRoute1386: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 8,
    marginTop: 8
  },
  icon7Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 33,
    marginRight: 101
  },
  icon9: {
    color: "rgba(123,190,46,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  distance604: {
    color: "#121212",
    fontSize: 18,
    marginLeft: 15,
    marginTop: 8
  },
  group9: {
    width: 49,
    height: 20,
    marginLeft: 17,
    marginTop: 10
  },
  busRoute1388: {
    color: "#121212",
    fontSize: 17
  },
  icon9Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 29,
    marginRight: 119
  },
  icon8: {
    color: "rgba(208,2,27,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  arrival1004: {
    color: "#121212",
    fontSize: 18,
    marginLeft: 11,
    marginTop: 8
  },
  busRoute1387: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 36,
    marginTop: 8
  },
  icon8Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 33,
    marginRight: 101
  },
  icon10: {
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  ticketPrice4: {
    color: "#121212",
    fontSize: 18,
    marginTop: 9
  },
  rs150000: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 11,
    marginTop: 9
  },
  icon10Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 53,
    marginRight: 58
  },
  materialIconTextButtonsFooter1: {
    height: 56,
    width: 393,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 20
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
  myQr: {
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

export default Travelhistory;
