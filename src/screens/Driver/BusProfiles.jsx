import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const data = [
  {
    label: "Running",
    busState: "Running",
  },
  {
    label: "Stopped",
    busState: "Stopped",
  },
  {
    label: "Arrived",
    busState: "Arrived",
  },
];
function BusProfiles({ navigation }) {
  const [bus, setbus] = useState("");
  const [busState, setbusState] = useState("");
  const [remaingSheet, setRemaingSheet] = useState(null);

  const GetBusDetails = async () => {
    const BusID = await AsyncStorage.getItem("BusID");

    await axios
      .get(
        `https://ticketing-backend.azurewebsites.net/api/bus/getOneBus/${BusID}`
      )
      .then((res) => {
        if (res.data.status) {
          setbus(res.data.busdetails);
          setbusState(res.data.busdetails.busState);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRemainingSheets = async () => {
    var BusID = await AsyncStorage.getItem("BusID");

    await axios
      .get(
        `https://ticketing-backend.azurewebsites.net/api/bus/getOneBusTemp/${BusID}`
      )
      .then((res) => {
        if (res.data.status) {
          setRemaingSheet(res.data.bustempDetails.remainingSeats);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetBusDetails();
    getRemainingSheets();
  }, []);
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.busState === busState && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  const handleBusState = async () => {
    var token = await AsyncStorage.getItem("Token");
    await axios
      .post(
        `https://ticketing-backend.azurewebsites.net/api/driver/changeBusState`,
        {
          busState: busState,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        if (res.data.status) {
          Alert.alert("Bus State Updated");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <Text style={styles.text1}>Bus Profile</Text>
        </View>
        <Image
          source={require("../../assets/images/setra-s-hd-nuremberg-germany-september-touristic-coach-bus-city-street-164819563.jpg")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.busNumber1Row}>
              <Text style={styles.busNumber1}>Bus Number -</Text>
              <Text style={styles.nd79602}>{bus.busNumber}</Text>
            </View>
            <View style={styles.seatCount1Row}>
              <Text style={styles.seatCount1}>Seat Count -</Text>
              <Text style={styles.nd7960}>{bus.sheetCount}</Text>
            </View>
            <View style={styles.seatCount1Row}>
              <Text style={styles.seatCount1}>Seat Left -</Text>
              {remaingSheet ? (
                <Text style={styles.nd7960}>{remaingSheet}</Text>
              ) : (
                <Text style={styles.nd7960}>N/A</Text>
              )}
            </View>
            <View style={styles.busRoute1Row}>
              <Text style={styles.busRoute1}>Bus route -</Text>
              <Text style={styles.nd7961}>{bus.route}</Text>
            </View>
            <View style={styles.busRoute1Row}>
              <Text style={styles.busRoute1}>Bus State -</Text>
              <Text style={styles.nd7961}>{bus.busState}</Text>
            </View>
            <View style={styles.totalEarning1Row}>
              <Text style={styles.totalEarning1}>Total Earning -</Text>
              {bus.totalEarning ? (
                <Text style={styles.rs1}>Rs. {bus.totalEarning}</Text>
              ) : (
                <Text style={styles.rs1}>Rs. 0.00</Text>
              )}
            </View>
            <View style={styles.totalTrips1Row}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Change Bus State"
                searchPlaceholder="Search..."
                statusBarIsTranslucent={true}
                value={busState}
                renderItem={renderItem}
                onChange={(item) => {
                  setbusState(item.busState);
                }}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color="black"
                    name="Safety"
                    size={20}
                  />
                )}
              />

              <View style={styles.buttoncontainer}>
                <TouchableOpacity
                  style={styles.buttonok}
                  onPress={handleBusState}
                >
                  <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  group2: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignSelf: "center",
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
    color: "rgba(255,255,255,1)",
    width: 1400,
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
  text1: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 19,
    marginLeft: 14,
  },
  image1: {
    width: 343,
    height: 245,
    borderRadius: 25,
    marginTop: 10,
    marginLeft: 30,
  },
  scrollArea: {
    width: 343,
    height: 350,
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
    marginTop: 22,
    marginLeft: 30,
  },
  scrollArea_contentContainerStyle: {
    height: 450,
    width: 343,
  },
  busNumber1: {
    color: "#121212",
    fontSize: 18,
  },
  nd79602: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 23,
  },
  busNumber1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 44,
    marginRight: 94,
  },
  seatCount1: {
    color: "#121212",
    fontSize: 18,
  },
  nd7960: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 34,
    marginTop: 2,
  },
  seatCount1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 44,
    marginRight: 150,
  },
  busRoute1: {
    color: "#121212",
    fontSize: 18,
  },
  nd7961: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 41,
  },
  busRoute1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 44,
    marginRight: 140,
  },
  totalEarning1: {
    color: "#121212",
    fontSize: 18,
  },
  rs1: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 13,
  },
  totalEarning1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 44,
    marginRight: 70,
  },
  cupertinoFooter1: {
    height: 58,
    position: "absolute",
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: Dimensions.get("window").height - 56,
  },
  container1: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    width: "100%",
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
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderColor: "#FFBC26",
    borderWidth: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttonok: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginBottom: 25,
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  totalTrips1Row: {
    padding: 20,
    marginBottom: 20,
  },
});

export default BusProfiles;
