import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet5(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.proceedToPayment}>Proceed to payment</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container11: {
    backgroundColor: "rgba(74,144,226,1)",
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
  proceedToPayment: {
    color: "#fff",
    fontSize: 14
  }
});

export default MaterialButtonViolet5;
