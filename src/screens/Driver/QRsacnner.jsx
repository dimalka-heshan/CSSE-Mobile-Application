import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CupertinoFooter1 from "../../components/CupertinoFooter1";

function QRsacnner(props) {
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
        <Text style={styles.scanQr2}>Scan QR</Text>
      </View>
      <CupertinoFooter1 style={styles.cupertinoFooter1}></CupertinoFooter1>
      <View style={styles.rect2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  scanQr2: {
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    marginTop: 14,
    marginLeft: 12
  },
  cupertinoFooter1: {
    height: 49,
    width: 393,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 598
  },
  rect2: {
    width: 368,
    height: 571,
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
    marginTop: -633,
    marginLeft: 12
  }
});

export default QRsacnner;
