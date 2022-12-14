import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialUnderlineTextbox4(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="DD"
        dataDetector="phoneNumber"
        placeholderTextColor="rgba(155,155,155,1)"
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
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8
  }
});

export default MaterialUnderlineTextbox4;
