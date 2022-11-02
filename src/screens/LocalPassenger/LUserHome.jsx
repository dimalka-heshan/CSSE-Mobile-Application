import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function LUserHome({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.group23}>
        <View style={styles.group19}>
          <View style={styles.loremIpsumStack}>
            <Text style={styles.loremIpsum}></Text>
            <View style={styles.rect6}>
              <View style={styles.group24}>
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
                      <Text style={styles.stsSriLanka1}>STS - Sri Lanka</Text>
                    </View>
                    <Text style={styles.loremIpsum2}>
                      Smart Tranceport System - Sri Lanka
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.dashboardRow}>
                <Text style={styles.dashboard}>Dashboard</Text>
                <View style={styles.dashboardFiller}></View>
              </View>
            </View>
          </View>
          <View style={styles.group8Row}>
          <TouchableOpacity onPress={() => navigation.navigate('Travelhistory')}>
            <View style={styles.group8}>
              <View style={styles.group5}>
                <View style={styles.group7}>
                  <View style={styles.rect2}>
                    <Image
                      source={require("../../assets/images/Top_up_credit-bro.png")}
                      resizeMode="contain"
                      style={styles.image10}
                    ></Image>
                    <Text style={styles.recharge4}>Credits</Text>
                  </View>
                </View>
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MyQr')}>
            <View style={styles.group16Stack}>
              <View style={styles.group16}>
                <View style={styles.group6}>
                  <View style={styles.group21}>
                    <View style={styles.group22}>
                      <View style={styles.rect3}>
                        <Text style={styles.myQr2}>My QR</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Image
                source={require("../../assets/images/QR_Code-pana.png")}
                resizeMode="contain"
                style={styles.image11}
              ></Image>
            </View>
            </TouchableOpacity>

          </View>
          <View style={styles.group18Stack}>
          <TouchableOpacity onPress={() => navigation.navigate('Travelhistory')}>
            <View style={styles.group18}>
              <View style={styles.group9Stack}>
                <View style={styles.group9}>
                  <View style={styles.group17}>
                    <View style={styles.rect4}>
                      <Text style={styles.scanQr}>Travel History</Text>
                    </View>
                  </View>
                </View>
                <Image
                  source={require("../../assets/images/MicrosoftTeams-image.png")}
                  resizeMode="contain"
                  style={styles.image12}
                ></Image>
              </View>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('LocalPasengerProfiles')}>
            <View>
            <View style={styles.group11}>
              <View style={styles.group10}>
                <View style={styles.rect5}>
                  <Text style={styles.profile}>Profile</Text>
                </View>
              </View>
            </View>
            <Image
              source={require("../../assets/images/Profile_Interface-rafiki.png")}
              resizeMode="contain"
              style={styles.image13}
            ></Image>
            </View>
            </TouchableOpacity>
          </View>
          {/* <MaterialIconTextButtonsFooter3
            style={styles.materialIconTextButtonsFooter1}
          ></MaterialIconTextButtonsFooter3> */}
    <View style={[styles.container1, styles.materialIconTextButtonsFooter1]}>
      <TouchableOpacity style={styles.buttonWrapper1} onPress={() => navigation.navigate('LUserHome')}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 22,
    justifyContent: "center"
  },
  group23: {
    width: 393,
    height: 851,
    justifyContent: "center",
    alignSelf: "center"
  },
  group19: {
    width: 393,
    height: 851,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5,
    alignSelf: "center"
  },
  loremIpsum: {
    top: 83,
    left: 59,
    position: "absolute",
    color: "#121212"
  },
  rect6: {
    top: 0,
    left: 0,
    width: 393,
    height: 185,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  group24: {
    width: 243,
    height: 55,
    marginTop: 65,
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
  dashboard: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 4
  },
  dashboardFiller: {
    flex: 1,
    flexDirection: "row"
  },
  image14: {
    width: 39,
    height: 39,
    borderRadius: 100
  },
  dashboardRow: {
    height: 39,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 16,
    marginRight: 17
  },
  loremIpsumStack: {
    width: 393,
    height: 167
  },
  group8: {
    width: 177,
    height: 213
  },
  group5: {
    width: 161,
    height: 204,
    justifyContent: "center",
    alignSelf: "center"
  },
  group7: {
    width: 158,
    height: 204,
    marginLeft: 3
  },
  rect2: {
    width: 158,
    height: 226,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15
  },
  image10: {
    width: 131,
    height: 133,
    marginTop: 20,
    marginLeft: 12
  },
  recharge4: {
    color: "#121212",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 40
  },
  group16: {
    top: 8,
    left: 0,
    width: 161,
    height: 204,
    position: "absolute"
  },
  group6: {
    width: 161,
    height: 204,
    marginTop: -13
  },
  group21: {
    width: 158,
    height: 204,
    marginLeft: 1
  },
  group22: {
    width: 158,
    height: 204
  },
  rect3: {
    width: 158,
    height: 226,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15
  },
  myQr2: {
    color: "#121212",
    fontSize: 18,
    marginTop: 166,
    marginLeft: 53
  },
  image11: {
    top: 0,
    left: 11,
    width: 135,
    height: 146,
    position: "absolute"
  },
  group16Stack: {
    width: 161,
    height: 212,
    marginLeft: 13,
    marginTop: 4
  },
  group8Row: {
    height: 216,
    flexDirection: "row",
    marginTop: 61,
    marginLeft: 19,
    marginRight: 23
  },
  group18: {
    top: 11,
    left: 0,
    width: 180,
    height: 204,
    position: "absolute"
  },
  group9: {
    top: 0,
    left: 0,
    width: 161,
    height: 204,
    position: "absolute",
    justifyContent: "center"
  },
  group17: {
    width: 158,
    height: 204,
    justifyContent: "center",
    alignSelf: "center"
  },
  rect4: {
    width: 158,
    height: 226,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    alignSelf: "center"
  },
  scanQr: {
    color: "#121212",
    fontSize: 18,
    marginTop: 173,
    marginLeft: 23
  },
  image12: {
    top: 10,
    left: 1,
    width: 163,
    height: 141,
    position: "absolute"
  },
  group9Stack: {
    width: 164,
    height: 204,
    marginLeft: 4
  },
  group11: {
    top: 0,
    left: 178,
    width: 170,
    height: 204,
    position: "absolute",
    justifyContent: "center"
  },
  group10: {
    width: 161,
    height: 204,
    alignSelf: "center"
  },
  rect5: {
    width: 158,
    height: 226,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    marginLeft: 3
  },
  profile: {
    color: "#121212",
    fontSize: 18,
    marginTop: 171,
    marginLeft: 52
  },
  image13: {
    top: 31,
    left: 192,
    width: 159,
    height: 149,
    position: "absolute"
  },
  group18Stack: {
    width: 351,
    height: 215,
    marginTop: 32,
    marginLeft: 28
  },
  materialIconTextButtonsFooter1: {
    height: 56,
    width: 393,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 80
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

export default LUserHome;

