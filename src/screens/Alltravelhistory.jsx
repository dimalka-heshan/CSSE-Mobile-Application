import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconTextButtonsFooter3 from "../components/MaterialIconTextButtonsFooter3";

function Alltravelhistory({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.group6}>
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
          <Text style={styles.travelHistory1}>All Travel History</Text>
        </View>
        <Text style={styles.loremIpsum3}>
          You can see your all tavel history
        </Text>
        <Image
          source={require("../assets/images/Stranded_traveler-bro_(1).png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.group5}>
              <View style={styles.group3}>
                <View style={styles.group4}>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Travelhistory')}>
                    <View style={styles.loremIpsum5Row}>
                      <Text style={styles.loremIpsum5}>2022.10.05</Text>
                      <Text style={styles.galle}>Galle</Text>
                      <Text style={styles.to8}>To</Text>
                      <Text style={styles.kaduwela}>Kaduwela</Text>
                      <Text style={styles.loremIpsum6}>07:42:04</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Travelhistory')}>
                    <View style={styles.loremIpsum5Row}>
                      <Text style={styles.loremIpsum5}>2022.10.05</Text>
                      <Text style={styles.galle}>Galle</Text>
                      <Text style={styles.to8}>To</Text>
                      <Text style={styles.kaduwela}>Kaduwela</Text>
                      <Text style={styles.loremIpsum6}>07:42:04</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Travelhistory')}>
                    <View style={styles.loremIpsum5Row}>
                      <Text style={styles.loremIpsum5}>2022.10.05</Text>
                      <Text style={styles.galle}>Galle</Text>
                      <Text style={styles.to8}>To</Text>
                      <Text style={styles.kaduwela}>Kaduwela</Text>
                      <Text style={styles.loremIpsum6}>07:42:04</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Travelhistory')}>
                    <View style={styles.loremIpsum5Row}>
                      <Text style={styles.loremIpsum5}>2022.10.05</Text>
                      <Text style={styles.galle}>Galle</Text>
                      <Text style={styles.to8}>To</Text>
                      <Text style={styles.kaduwela}>Kaduwela</Text>
                      <Text style={styles.loremIpsum6}>07:42:04</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Travelhistory')}>
                    <View style={styles.loremIpsum5Row}>
                      <Text style={styles.loremIpsum5}>2022.10.05</Text>
                      <Text style={styles.galle}>Galle</Text>
                      <Text style={styles.to8}>To</Text>
                      <Text style={styles.kaduwela}>Kaduwela</Text>
                      <Text style={styles.loremIpsum6}>07:42:04</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
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
  group6: {
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
  travelHistory1: {

    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 18,
    marginLeft: 16
  },
  loremIpsum3: {
    color: "#121212",
    fontSize: 15,
    marginTop: 8,
    marginLeft: 83
  },
  image: {
    width: 237,
    height: 159,
    marginLeft: 81
  },
  scrollArea: {
    width: 393,
    height: 405,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 13
  },
  scrollArea_contentContainerStyle: {
    height: 396,
    width: 393
  },
  group5: {
    width: 366,
    height: 71,
    marginTop: 28,
    alignSelf: "center"
  },
  group3: {
    width: 366,
    height: 71,
    alignSelf: "center"
  },
  group4: {
    width: 366,
    height: 71,
    alignSelf: "center"
  },
  button: {
    width: 366,
    height: 71,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5,
    borderRadius: 10,
    marginTop: 5,
    flexDirection: "row"
  },
  loremIpsum5: {
    color: "#121212"
  },
  galle: {

    color: "rgba(74,144,226,1)",
    fontSize: 14,
    marginLeft: 47
  },
  to8: {
    color: "rgba(155,155,155,1)",
    fontSize: 13,
    marginLeft: 8,
    marginTop: 1
  },
  kaduwela: {

    color: "rgba(74,144,226,1)",
    fontSize: 14,
    marginLeft: 9
  },
  loremIpsum6: {
    color: "#121212",
    marginLeft: 46
  },
  loremIpsum5Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 11,
    marginTop: 27
  },
  materialIconTextButtonsFooter1: {
    height: 56,
    width: 393,
    marginTop: 3,
    backgroundColor: "rgba(0,0,0,1)"
  }
});

export default Alltravelhistory;
