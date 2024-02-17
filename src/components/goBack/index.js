import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import {} from "react-native";
const GoBackComponent = () => {
    console.log("hihi");
  const goBack = () => {
    // Quay lại màn hình trước đó
    // navigation.goBack();
  };
  return (
    <View style={styles.wrap}>
      <View>
        <Text>Current Screen</Text>
        <Button title="Go Back" onPress={goBack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#FFF",
    // position: "fixed", // hoặc 'fixed'
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 0,
    // alignItems: "center",
    zIndex: 100,
    width: "100%",
  },
});
export default GoBackComponent;
