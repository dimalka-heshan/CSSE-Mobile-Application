import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="calendar" style={styles.iconStyle}></Icon>
      <Text style={styles.validTill}>Valid Till</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingLeft: 8,
    left: 327,
    width: 32,
    top: 9,
    height: 26
  },
  validTill: {
    color: "rgba(155,155,155,1)",
    fontSize: 16,
    alignSelf: "flex-start",
    lineHeight: 5,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    left: 47,
    top: 0,
    textAlign: "center",
    margin: 0,
    padding: 16
  }
});

export default MaterialIconTextbox;
