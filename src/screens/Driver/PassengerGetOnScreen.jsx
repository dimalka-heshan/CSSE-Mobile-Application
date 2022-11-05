import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRoute } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PassengerGetOnScreen = () => {
  const [value, setValue] = useState(null);
  const [getOnBusHolt, setgetOnBusHolt] = useState("");
  const [getOffBusHolt, setgetOffBusHolt] = useState("");
  const [data, setData] = useState([]);
  const [cardVisible, setcardVisible] = useState(false);
  const [getOnBusHoltName, setgetOnBusHoltName] = useState("");
  const [getOffBusHoltName, setgetOffBusHoltName] = useState("");
  const [travelCost, settravelCost] = useState(null);
  const [qrValue, setqrValue] = useState("");
  const [routeID, setrouteID] = useState("");

  const route = useRoute();

  useEffect(() => {
    const getHolts = async () => {
      const RouteID = await AsyncStorage.getItem("Route");
      setrouteID(RouteID);
      await axios
        .get(
          `https://ticketing-backend.azurewebsites.net/api/helper/getHoltsInRote/${RouteID}`
        )
        .then((res) => {
          if (res.data.status) {
            temp = [];
            for (var i = 0; i < res.data.holts.length; i++) {
              var data = {
                label: res.data.holts[i].holtName,
                value: res.data.holts[i].holtId,
              };
              temp.push(data);
            }
            console.log(temp);
            setData(temp);
          } else {
            console.log(res.data.message);
          }
        });
    };
    getHolts();
    setqrValue(route.params.QRdata);
  }, []);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
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

  const calculateFare = (totalLength) => {
    if (totalLength <= 5) {
      return 30;
    } else {
      return 30 + (totalLength - 5) * 3;
    }
  };

  const onSubmite = () => {
    if (getOnBusHolt === "" || getOffBusHolt === "") {
      return Alert.alert("Please Select Both Bus Holts");
    } else if (getOnBusHolt === getOffBusHolt) {
      return Alert.alert("Please Select Different Bus Holts");
    } else {
      setcardVisible(true);
      var totalLength = Math.abs((getOffBusHolt - getOnBusHolt) * 4);
      settravelCost(calculateFare(totalLength));
    }
  };

  const onGetOn = () => {
    return Alert.alert(
      "Are your sure?",
      "Is This passenger going to get on the bus ?",
      [
        {
          text: "Yes",
          onPress: async () => {
            const token = await AsyncStorage.getItem("Token");
            const data = {
              QRToken: qrValue,
              getOnHoltID: getOnBusHolt,
              getOffHoltID: getOffBusHolt,
            };
            await axios
              .post(
                "https://ticketing-backend.azurewebsites.net/api/driver/passengerGetOn",
                data,
                {
                  headers: {
                    Authorization: token,
                  },
                }
              )
              .then((res) => {
                if (res.data.status) {
                  Alert.alert("Passenger Get On Successfully");
                }
              })
              .catch((err) => {
                Alert.alert("insufficient credit balance");
              });
          },
        },
        {
          text: "No",
          onPress: () => {
            console.log("No button pressed");
          },
        },
      ]
    );
  };
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
        <Text style={styles.dashboard}>Travel Details</Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Add Travel Details</Title>
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
            placeholder="Select Get on Bus Stop"
            searchPlaceholder="Search..."
            statusBarIsTranslucent={true}
            value={value}
            renderItem={renderItem}
            onChange={(item) => {
              setgetOnBusHolt(item.value);
              setgetOnBusHoltName(item.label);
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
            placeholder="Select Get off Bus Stop"
            searchPlaceholder="Search..."
            value={value}
            renderItem={renderItem}
            statusBarIsTranslucent={true}
            onChange={(item) => {
              setgetOffBusHolt(item.value);
              setgetOffBusHoltName(item.label);
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
        </Card.Content>
        <Card.Actions style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.buttonok} onPress={onSubmite}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Cancel</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
      {cardVisible ? (
        <View>
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.cardTitle}>Travel Details</Title>
              <View style={styles.cardContent}>
                <Text style={styles.travelText}>
                  Get On Holt : {getOnBusHoltName}
                </Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.travelText}>
                  Get Off Holt : {getOffBusHoltName}
                </Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.travelText}>
                  Travel Cost : {travelCost}
                </Text>
              </View>
            </Card.Content>
            <Card.Actions style={styles.buttoncontainer}>
              <TouchableOpacity style={styles.buttonok} onPress={onGetOn}>
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
            </Card.Actions>
          </Card>
        </View>
      ) : null}

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
};

export default PassengerGetOnScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  travelText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  cardContent: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonok: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  card: {
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 0,
    borderRadius: 10,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 20,
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
  group2: {
    width: 393,
    height: 851,
  },
  rect1: {
    width: Dimensions.get("window").width,
    height: 167,
    top: 0,
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
  dashboard: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 20,
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
    marginLeft: 23,
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
    width: 362,
    height: 132,
    marginTop: 29,
    marginLeft: 23,
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
    marginLeft: 23,
  },
  cupertinoFooter1: {
    height: 58,
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
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
});
