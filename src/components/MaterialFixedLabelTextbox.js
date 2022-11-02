import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialFixedLabelTextbox(props) {
  return (
    <View style={[styles.containerff, props.style]}>
      <Text style={styles.importFile}>Import profile image file</Text>
      <TextInput style={styles.inputStyleff}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  containerff: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16
  },
  importFile: {
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#000",
    opacity: 0.5,
    alignSelf: "flex-start"
  },
  inputStyleff: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 1,
    paddingLeft: 30
  },
});

export default MaterialFixedLabelTextbox;
