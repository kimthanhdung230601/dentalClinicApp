import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const BtnCalendar = ({navigation}) => {
//   const handleLogin = () => {
//     navigation.navigate('LogIn')
//   };

  return (
    <View style={styles.container}>
      <View style={styles.containers}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Đặt lịch hẹn ngay!</Text>
          <Text style={styles.text2}>Tiết kiệm thời gian chờ đợi</Text>
          <Button title="Đặt ngay" style={styles.btn} onPress={() => navigation.navigate('CalendarIndex', {navigation})} />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/Frame.png")}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#FFFF",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  containers: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
  textContainer: {
    marginRight: 10,
  },
  text1: {
    fontSize: 18,
    margin: 10,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
    color: "#666",
    marginBottom: 31,
    marginLeft: 10,
    marginTop: 3,
  },
  btn: { color: "#2DB7F5", marginLeft: 20 },
  image: {
    width: 120,
    height: 120,
  },
});

export default BtnCalendar;
