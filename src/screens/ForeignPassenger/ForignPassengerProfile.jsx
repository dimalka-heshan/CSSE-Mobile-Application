import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


function ForignPassengerProfile({navigation}) {
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
          <Text style={styles.profile}>Profile</Text>
        </View>
        <View style={styles.imageRow}>
          <Image
            source={require("../../assets/images/4ss.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>

        <TouchableOpacity onPress={() => navigation.navigate('ForignPassengerUpdate')}>
          <FontAwesomeIcon
            name="pencil-square-o"
            style={styles.icon4}
          ></FontAwesomeIcon>
        </TouchableOpacity>

        </View>
        <Text style={styles.udariSithupraba}>Udari Sithupraba</Text>
        <View style={styles.icon5Row}>
          <EntypoIcon name="users" style={styles.icon5}></EntypoIcon>
          <Text style={styles.foreignPassenger}>ForeignPassenger</Text>
        </View>
        <View style={styles.icon6Row}>
          <FeatherIcon name="phone" style={styles.icon6}></FeatherIcon>
          <View style={styles.mobile1Column}>
            <Text style={styles.mobile1}>Mobile</Text>
            <Text style={styles.loremIpsum3}>0716328599</Text>
          </View>
        </View>
        <View style={styles.icon7Row}>
          <EntypoIcon name="mail-with-circle" style={styles.icon7}></EntypoIcon>
          <View style={styles.email1Column}>
            <Text style={styles.email1}>Email</Text>
            <Text style={styles.udariGmailCom}>udari@gmail.com</Text>
          </View>
        </View>
        <View style={styles.icon8Row}>
          <EntypoIcon name="ticket" style={styles.icon8}></EntypoIcon>
          <View style={styles.passportNoColumn}>
            <Text style={styles.passportNo}>Passport No</Text>
            <Text style={styles.nkravindu2}>200003800910</Text>
          </View>
        </View>
        <View style={styles.icon9Row}>
          <EntypoIcon name="location-pin" style={styles.icon9}></EntypoIcon>
          <View style={styles.countryColumn}>
            <Text style={styles.country}>Country</Text>
            <Text style={styles.australia}>Australia</Text>
          </View>
        </View>
        <View style={styles.icon10Row}>
          <IoniconsIcon name="md-time" style={styles.icon10}></IoniconsIcon>
          <View style={styles.expireDateColumn}>
            <Text style={styles.expireDate}>ExpireDate</Text>
            <Text style={styles.text}>2022-11-29</Text>
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
      <TouchableOpacity style={styles.activeButtonWrapper} onPress={() => navigation.navigate('MyQr')}>
        <MaterialCommunityIconsIcon
          name="qrcode"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.myQr}>My QR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2} onPress={() => navigation.navigate('LocalPasengerProfiles')}>
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.icon22}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.profile1}>Profile</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group2: {
    width: 393,
    height: 851
  },
  rect1: {
    width: 393,
    height: 185,
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
  profile: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 37,
    marginLeft: 13
  },
  image: {
    width: 111,
    height: 111,
    borderRadius: 100
  },
  icon4: {
    color: "rgba(74,74,74,1)",
    fontSize: 30,
    marginLeft: 69
  },
  imageRow: {
    height: 111,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 123,
    marginRight: 60
  },
  udariSithupraba: {
    color: "#121212",
    fontSize: 20,
    marginLeft: 98
  },
  icon5: {
    color: "rgba(208,2,27,1)",
    fontSize: 29
  },
  foreignPassenger: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 11,
    marginTop: 6
  },
  icon5Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 43,
    marginRight: 173
  },
  icon6: {
    color: "rgba(74,144,226,1)",
    fontSize: 30,
    marginTop: 5
  },
  mobile1: {
    color: "#121212",
    fontSize: 17,
    marginLeft: 1
  },
  loremIpsum3: {
    color: "#121212",
    width: 1000
  },
  mobile1Column: {
    width: 79,
    marginLeft: 11
  },
  icon6Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 43,
    marginRight: 230
  },
  icon7: {
    color: "rgba(74,144,226,1)",
    fontSize: 30,
    marginTop: 4
  },
  email1: {
    color: "#121212",
    fontSize: 17
  },
  udariGmailCom: {
    color: "#121212",
    width: 1000
  },
  email1Column: {
    width: 110,
    marginLeft: 15
  },
  icon7Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 39,
    marginRight: 199
  },
  icon8: {
    color: "rgba(155,155,155,1)",
    fontSize: 29,
    marginTop: 4
  },
  passportNo: {
    color: "#121212",
    width: 1000,
    fontSize: 17
  },
  nkravindu2: {
    color: "#121212",
    width: 1000,
    marginTop: 3
  },
  passportNoColumn: {
    width: 95,
    marginLeft: 12
  },
  icon8Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 44,
    marginRight: 213
  },
  icon9: {
    color: "rgba(126,211,33,1)",
    fontSize: 29,
    marginTop: 4
  },
  country: {
    color: "#121212",
    fontSize: 17
  },
  australia: {
    color: "#121212",
    marginTop: 2
  },
  countryColumn: {
    width: 60,
    marginLeft: 11
  },
  icon9Row: {
    height: 39,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 44,
    marginRight: 249
  },
  icon10: {
    color: "rgba(74,144,226,1)",
    fontSize: 29,
    marginTop: 5
  },
  expireDate: {
    color: "#121212",
    fontSize: 17
  },
  text: {
    color: "#121212",
    marginTop: 4
  },
  expireDateColumn: {
    width: 83,
    marginLeft: 8
  },
  icon10Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 46,
    marginRight: 232
  },
  materialIconTextButtonsFooter1: {
    height: 56,
    width: 393,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 16
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

export default ForignPassengerProfile;
