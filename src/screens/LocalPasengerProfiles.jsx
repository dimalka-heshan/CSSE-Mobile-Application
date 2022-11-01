import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconTextButtonsFooter3 from "../components/MaterialIconTextButtonsFooter3";

function LocalPasengerProfiles(props) {
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
                  <Text style={styles.stsSriLanka1}>STS - Sri Lanka</Text>
                </View>
                <Text style={styles.loremIpsum2}>
                  Smart Tranceport System - Sri Lanka
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.profile}>Profile</Text>
        </View>
        <View style={styles.group2}>
          <View style={styles.icon4Row}>

            <Image
              source={require("../assets/images/3e.jpg")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
             <View style={styles.icon4Filler}></View>
            <FontAwesomeIcon
              name="pencil-square-o"
              style={styles.icon4}
            ></FontAwesomeIcon>
           

          </View>
          <Text style={styles.ravinduSandeepana1}>Ravindu Sandeepana</Text>
          <View style={styles.icon5Row}>
            <EntypoIcon name="users" style={styles.icon5}></EntypoIcon>
            <Text style={styles.localPassenger}>LocalPassenger</Text>
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
  group3: {
    width: 393,
    height: 851,
    alignSelf: "center"
  },
  rect1: {
    width: 393,
    height: 183,
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
  profile: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 32,
    marginLeft: 13
  },
  group2: {
    width: 292,
    height: 457,
    marginTop: 39,
    marginLeft: 54
  },
  icon4: {
    color: "rgba(74,74,74,1)",
    fontSize: 30,
    marginLeft: 185
  },
  icon4Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    width: 111,
    height: 111,
    borderRadius: 100,
    marginRight: 1040
  },
  icon4Row: {
    height: 111,
    flexDirection: "row",
    marginLeft: 77
  },
  ravinduSandeepana1: {
    color: "#121212",
    fontSize: 20,
    marginTop: 3,
    marginLeft: 45
  },
  icon5: {
    color: "rgba(208,2,27,1)",
    fontSize: 35
  },
  localPassenger: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 10,
    marginTop: 9
  },
  icon5Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 47,
    marginRight: 126
  },
  icon6: {
    color: "rgba(74,144,226,1)",
    fontSize: 30,
    marginTop: 9
  },
  mobile1: {
    color: "#121212",
    fontSize: 17
  },
  loremIpsum3: {
    color: "#121212",
    marginTop: 6,
    width: 100,
    marginLeft: 2
  },
  mobile1Column: {
    width: 81,
    marginLeft: 7
  },
  icon6Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 3,
    marginRight: 171
  },
  icon7: {
    color: "rgba(74,144,226,1)",
    fontSize: 30,
    marginTop: 3
  },
  email1: {
    color: "#121212",
    fontSize: 17
  },
  nkravindu1: {
    color: "#121212",
    width: 1000,
    marginTop: 2
  },
  email1Column: {
    width: 147,
    marginLeft: 7
  },
  icon7Row: {
    height: 39,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 3,
    marginRight: 105
  },
  icon8: {
    color: "rgba(155,155,155,1)",
    fontSize: 29
  },
  nic1: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 1
  },
  nkravindu2: {
    color: "#121212",
    width: 1000,
    marginTop: 5
  },
  nic1Column: {
    width: 94,
    marginLeft: 5
  },
  icon8Row: {
    height: 42,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 5,
    marginRight: 159
  },
  materialIconTextButtonsFooter1: {
    height: 56,
    width: 393,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 98
  }
});

export default LocalPasengerProfiles;
