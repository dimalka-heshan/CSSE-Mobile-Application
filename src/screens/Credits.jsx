import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialStackedLabelTextbox9 from "../components/MaterialStackedLabelTextbox9";
import MaterialButtonViolet5 from "../components/MaterialButtonViolet5";
import MaterialIconTextButtonsFooter3 from "../components/MaterialIconTextButtonsFooter3";

function Credits({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.group4}>
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
          <Text style={styles.accountCredits}>Account Credits</Text>
        </View>
        <View style={styles.group3}>
          <View style={styles.rect2Stack}>
            <View style={styles.rect2}>
              <Text style={styles.youHaveRs250000}>
                You have credits Rs. 2500.00
              </Text>
              <MaterialIconsIcon
                name="refresh"
                style={styles.icon5}
              ></MaterialIconsIcon>
            </View>
            <Image
              source={require("../assets/images/E-Wallet-pana2.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.reChargeAccount}>Re-charge your Account</Text>
          <View style={styles.enterCreditAmountStack}>
            <Text style={styles.enterCreditAmount}>Enter Credit amount</Text>
            <MaterialStackedLabelTextbox9
              style={styles.materialStackedLabelTextbox9}
            ></MaterialStackedLabelTextbox9>
          </View>
          {/* <MaterialButtonViolet5
            style={styles.materialButtonViolet5}
          ></MaterialButtonViolet5> */}
          <TouchableOpacity style={[styles.container11, styles.materialButtonViolet5]} onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.proceedToPayment}>Proceed to payment</Text>
          </TouchableOpacity>
        </View>
        <MaterialIconTextButtonsFooter3
          style={styles.materialIconTextButtonsFooter1}
        ></MaterialIconTextButtonsFooter3>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  group4: {
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
  group2: {
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
    width: 1000,
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
  accountCredits: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 18,
    marginLeft: 16
  },
  group3: {
    width: 370,
    height: 99,
    marginTop: 42,
    marginLeft: 11
  },
  rect2: {
    top: 0,
    left: 0,
    width: 370,
    height: 118,
    position: "absolute",
    backgroundColor: "rgba(248,231,28,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5,
    borderRadius: 15
  },
  youHaveRs250000: {
    color: "#121212",
    fontSize: 14,
    marginTop: 31,
    marginLeft: 22
  },
  icon5: {
    color: "rgba(74,144,226,1)",
    fontSize: 25,
    height: 25,
    width: 25,
    marginTop: 23,
    marginLeft: 22
  },
  image: {
    top: 0,
    left: 192,
    width: 184,
    height: 96,
    position: "absolute"
  },
  rect2Stack: {
    width: 376,
    height: 118
  },
  rect3: {
    width: 366,
    height: 304,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 75,
    shadowOpacity: 1,
    shadowRadius: 25,
    marginTop: 51,
    marginLeft: 16
  },
  reChargeAccount: {
    color: "#121212",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 83
  },
  enterCreditAmount: {
    left: -1,
    position: "absolute",
    color: "rgba(41,19,146,1)",
    top: -1,
    fontSize: 15
  },
  materialStackedLabelTextbox9: {
    height: 70,
    width: 239,
    position: "absolute",
    left: -1,
    top: 15
  },
  enterCreditAmountStack: {
    width: 239,
    height: 75,
    marginTop: 41,
    marginLeft: 26
  },
  materialButtonViolet5: {
    height: 40,
    width: 200,
    borderRadius: 9,
    marginTop: 68,
    marginLeft: 83
  },
  materialIconTextButtonsFooter1: {
    height: 56,
    width: 393,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 110
  },
  container11: {
    backgroundColor: "rgba(74,144,226,1)",
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
  proceedToPayment: {
    color: "#fff",
    fontSize: 14
  }
});

export default Credits;
