import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialUnderlineTextbox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="0000 - 0000 - 0000 - 0000"
        placeholderTextColor="rgba(155,155,155,1)"
        dataDetector="phoneNumber"
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    margin: 0,
    padding: 0,
    textAlign: "left"
  }
});

export default MaterialUnderlineTextbox1;
