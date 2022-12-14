import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function Driverdashboard({ navigation }) {
  const getbusID = async () => {
    const Token = await AsyncStorage.getItem("Token");
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem("BusID", value);
      } catch (e) {
        console.log(e);
      }
    };
    const storeData2 = async (value) => {
      try {
        await AsyncStorage.setItem("Route", value);
      } catch (e) {
        console.log(e);
      }
    };
    await axios
      .get("https://ticketing-backend.azurewebsites.net/api/user/profile", {
        headers: {
          Authorization: `${Token}`,
        },
      })
      .then((res) => {
        var busID = res.data.user.busDetails._id;
        var routID = res.data.user.busDetails.route.toString();
        storeData(busID);
        storeData2(routID);
      })
      .catch((err) => {
        console.log({ Error: err });
      });
  };

  useEffect(() => {
    getbusID();
  }, []);

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
          <Text style={styles.dashboard}>Dashboard</Text>
        </View>

        <View style={styles.ContentContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Driverprofiles")}
          >
            <View style={styles.rect2Stack}>
              <View style={styles.rect2}>
                <Text style={styles.driverProfile}>Driver profile</Text>
              </View>
              <Image
                source={require("../../assets/images/Profile_Interface-bro.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("BusProfiles")}>
            <View style={styles.rect2Stack}>
              <View style={styles.rect4}>
                <Text style={styles.bus}>Bus</Text>
              </View>
              <Image
                source={require("../../assets/images/Bus_driver-amico.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("DriverQRScanner")}
          >
            <View style={styles.rect2Stack}>
              <View style={styles.rect3}>
                <Text style={styles.scanPassengerQr}>Scan passenger QR</Text>
              </View>
              <Image
                source={require("../../assets/images/QR_Code-rafiki_(2).png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
            </View>
          </TouchableOpacity>
        </View>

        {/* Thibbathana */}
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
  ContentContainer: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  group2: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  rect1: {
    width: Dimensions.get("window").width,
    height: 167,
    backgroundColor: "rgba(0,0,0,1)",
  },
  group1: {
    width: Dimensions.get("window").width,
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
  dashboard: {
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    marginTop: 7,
    marginLeft: 9,
  },
  rect2: {
    top: 7,
    left: 0,
    width: 347,
    height: 130,
    position: "absolute",
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
  },
  driverProfile: {
    color: "#121212",
    fontSize: 18,
    marginTop: 58,
    marginLeft: 32,
  },
  image: {
    top: 0,
    left: 168,
    width: 188,
    height: 145,
    position: "absolute",
  },
  rect2Stack: {
    width: 356,
    height: 145,
    marginTop: 49,
  },
  rect4: {
    top: 0,
    left: 0,
    width: 347,
    height: 130,
    position: "absolute",
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
  },
  bus: {
    color: "#121212",
    fontSize: 18,
    marginTop: 55,
    marginLeft: 37,
  },
  image2: {
    top: 0,
    left: 126,
    width: 236,
    height: 132,
    position: "absolute",
  },
  rect4Stack: {
    width: 359,
    height: 144,
    marginTop: 29,
  },
  rect3: {
    top: 0,
    left: 0,
    width: 347,
    height: 130,
    position: "absolute",
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
  },
  scanPassengerQr: {
    color: "#121212",
    fontSize: 18,
    marginTop: 53,
    marginLeft: 32,
  },
  image3: {
    top: 0,
    left: 165,
    width: 194,
    height: 144,
    position: "absolute",
  },
  rect3Stack: {
    width: 359,
    height: 144,
    marginTop: 32,
  },
  cupertinoFooter1: {
    position: "absolute",
    marginTop: Dimensions.get("window").height - 56,
    height: 58,
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(0,0,0,1)",
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

export default Driverdashboard;
