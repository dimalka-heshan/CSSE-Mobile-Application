import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet4(props) {
  return (
    <TouchableOpacity style={[styles.containerback, props.style]}>
      <Text style={styles.back}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerback: {
    backgroundColor: "rgba(255,255,255,1)",
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
  back: {
    color: "rgba(63,81,181,1)",
    fontSize: 14,
  }
});

export default MaterialButtonViolet4;
