import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";
import MaterialUnderlineTextbox3 from "../components/MaterialUnderlineTextbox3";
import MaterialUnderlineTextbox4 from "../components/MaterialUnderlineTextbox4";
import MaterialUnderlineTextbox5 from "../components/MaterialUnderlineTextbox5";
import MaterialButtonViolet3 from "../components/MaterialButtonViolet3";
import MaterialButtonViolet4 from "../components/MaterialButtonViolet4";

function Payment({ navigation }) {
  const [credit, setcredit] = useState("");
  const [cvv, setcvv] = useState("");
  const [expiry, setexpiry] = useState("");
  const [name, setname] = useState("");

  const route = useRoute();
  const onPay = async () => {
    const token = await AsyncStorage.getItem("Token");
    const data = {
      amount: parseFloat(route.params.creditAmmount),
      rechargeType: "From App",
      paymentMethod: "Credit Card",
    };
    axios
      .post(
        "https://ticketing-backend.azurewebsites.net/api/credit/rechargeCreditbyApp",
        data,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        if (res.data.status) {
          Alert.alert("Payment Successful");
          navigation.push("Credits");
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.group3}>
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
                  <View style={styles.group2}>
                    <Text style={styles.stsSriLanka1}>STS - Sri Lanka</Text>
                  </View>
                </View>
                <Text style={styles.loremIpsum2}>
                  Smart Tranceport System - Sri Lanka
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rect2StackStack}>
          <View style={styles.rect2Stack}>
            <View style={styles.rect2}>
              <View style={styles.loremIpsum7StackRow}>
                <View style={styles.loremIpsum7Stack}>
                  <Text style={styles.loremIpsum7}>
                    Entert the 16-digit card number
                  </Text>
                  <Text style={styles.cardNumber2}>Card Number</Text>
                  <MaterialUnderlineTextbox1
                    style={styles.materialUnderlineTextbox5}
                  ></MaterialUnderlineTextbox1>
                </View>
                <Image
                  source={require("../assets/images/001b4803833d6a48302312cb01d18576.png")}
                  resizeMode="contain"
                  style={styles.image1}
                ></Image>
              </View>
              <View style={styles.cvvColumnRow}>
                <View style={styles.cvvColumn}>
                  <Text style={styles.cvv}>CVV</Text>
                  <Text style={styles.loremIpsum6}>
                    Entert the 3-digit number
                  </Text>
                </View>
                <MaterialUnderlineTextbox2
                  style={styles.materialUnderlineTextbox4}
                ></MaterialUnderlineTextbox2>
              </View>
              <View style={styles.expiryDate1ColumnRow}>
                <View style={styles.expiryDate1Column}>
                  <Text style={styles.expiryDate1}>Expiry Date</Text>
                  <Text style={styles.loremIpsum5}>
                    Entert the Expiration Date
                  </Text>
                </View>
                <MaterialUnderlineTextbox3
                  style={styles.materialUnderlineTextbox3}
                ></MaterialUnderlineTextbox3>
                <Text style={styles.loremIpsum4}>/</Text>
                <MaterialUnderlineTextbox4
                  style={styles.materialUnderlineTextbox2}
                ></MaterialUnderlineTextbox4>
              </View>
              <Text style={styles.cardholdersName1}>Cardholder&#39;s Name</Text>
              <View style={styles.materialUnderlineTextbox1Stack}>
                <MaterialUnderlineTextbox5
                  style={styles.materialUnderlineTextbox1}
                ></MaterialUnderlineTextbox5>
                <Text style={styles.loremIpsum3}>
                  Entert the cardholder&#39;s name
                </Text>
              </View>
              <TouchableOpacity
                style={styles.containerButtonPaynow}
                onPress={onPay}
              >
                <Text style={styles.payNow}>Pay Now</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/images/images1.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <Text style={styles.paymentDetails}>Payment Details</Text>
        </View>
        <TouchableOpacity
          style={[styles.containerback, styles.materialButtonViolet4]}
          onPress={() => navigation.navigate("Credits")}
        >
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtonPaynow: {
    marginTop: 20,
    marginLeft: 100,
    backgroundColor: "rgba(74,144,226,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
    width: 150,
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
  payNow: {
    color: "#fff",
    fontSize: 14,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  group3: {
    width: 393,
    height: 851,
    alignSelf: "center",
  },
  rect1: {
    width: 393,
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
  group2: {
    top: 0,
    left: 0,
    width: 140,
    height: 26,
    position: "absolute",
  },
  stsSriLanka1: {
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
    width: 1000,
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
  rect2: {
    top: 56,
    left: 0,
    width: 367,
    height: 468,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 75,
    shadowOpacity: 1,
    shadowRadius: 25,
    borderRadius: 25,
  },
  loremIpsum7: {
    top: 16,
    left: 1,
    position: "absolute",
    color: "rgba(155,155,155,1)",
    fontSize: 11,
  },
  cardNumber2: {
    left: 0,
    position: "absolute",
    color: "rgba(41,19,146,1)",
    top: 0,
  },
  materialUnderlineTextbox5: {
    height: 43,
    width: 222,
    position: "absolute",
    left: 1,
    top: 23,
  },
  loremIpsum7Stack: {
    width: 223,
    height: 66,
  },
  image1: {
    width: 71,
    height: 37,
    marginLeft: 32,
    marginTop: 26,
  },
  loremIpsum7StackRow: {
    height: 66,
    flexDirection: "row",
    marginTop: 117,
    marginLeft: 19,
    marginRight: 22,
  },
  cvv: {
    color: "rgba(41,19,146,1)",
  },
  loremIpsum6: {
    color: "rgba(155,155,155,1)",
    width: 1000,
    fontSize: 11,
    marginLeft: 1,
  },
  cvvColumn: {
    width: 122,
    marginTop: 13,
  },
  materialUnderlineTextbox4: {
    height: 43,
    width: 131,
    marginLeft: 75,
  },
  cvvColumnRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 19,
    marginRight: 20,
  },
  expiryDate1: {
    color: "rgba(41,19,146,1)",
  },
  loremIpsum5: {
    color: "rgba(155,155,155,1)",
    fontSize: 11,
    width: 1000,
    marginTop: -1,
    marginLeft: 1,
  },
  expiryDate1Column: {
    width: 125,
    marginTop: 13,
  },
  materialUnderlineTextbox3: {
    height: 43,
    width: 55,
    marginLeft: 29,
    marginTop: -1,
  },
  loremIpsum4: {
    color: "rgba(37,30,30,1)",
    lineHeight: 20,
    fontSize: 24,
    marginTop: 16,
  },
  materialUnderlineTextbox2: {
    height: 43,
    width: 55,
    marginLeft: 6,
  },
  expiryDate1ColumnRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 20,
    marginRight: 67,
  },
  cardholdersName1: {
    color: "rgba(41,19,146,1)",
    marginTop: 20,
    marginLeft: 20,
  },
  materialUnderlineTextbox1: {
    height: 43,
    width: 327,
    position: "absolute",
    left: 0,
    top: 11,
  },
  loremIpsum3: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(155,155,155,1)",
    fontSize: 11,
  },
  materialUnderlineTextbox1Stack: {
    width: 327,
    height: 54,
    marginLeft: 21,
  },
  materialButtonViolet2: {
    height: 44,
    width: 298,
    marginTop: 17,
    marginLeft: 35,
  },
  image: {
    top: 0,
    left: 153,
    width: 214,
    height: 131,
    position: "absolute",
  },
  rect2Stack: {
    top: 0,
    left: 4,
    width: 367,
    height: 524,
    position: "absolute",
  },
  paymentDetails: {
    top: 17,
    left: 0,
    position: "absolute",
    color: "#121212",
    fontSize: 21,
  },
  rect2StackStack: {
    width: 371,
    height: 524,
    marginTop: 44,
    marginLeft: 9,
  },
  materialButtonViolet4: {
    height: 40,
    width: 118,
    backgroundColor: "rgba(15,15, 15,0.29)",
    shadowColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 100,
    marginTop: 17,
    marginLeft: 16,
  },
  containerback: {
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
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
  back: {
    color: "rgba(63,81,181,1)",
    fontSize: 14,
  },
});

export default Payment;
