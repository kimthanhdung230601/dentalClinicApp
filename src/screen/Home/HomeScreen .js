import { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import DoctorList from "../../components/Service";
import Medicine from "../../components/medicine";
import BtnCalendar from "./BtnCalendar";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HistoryMedicine from "../../components/medicine/HistoryMedicine";
import ListMedicine from "../../components/medicine/ListMedicine";
import { getListExam } from "../../api/api";
import GoBackComponent from "../../components/goBack";
const HomeScreen = ({ navigation }) => {
  const [parsedData, setParsedData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData !== null) {
          const parsedUserData = JSON.parse(userData);
          // console.log(parsedUserData.patientName);
          setParsedData(parsedUserData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <View style={styles.wrap}>
      {/* <GoBackComponent navigation={navigation} /> */}
      <View style={styles.containerWrap}>
        <ImageBackground
          source={require("../../assets/bk.png")}
          style={styles.image}
        >
          {" "}
          <View style={styles.container}>
            {parsedData && (
              <>
                <Text style={styles.welcome}>
                  Xin chào {parsedData.patientName}
                </Text>
                <Text style={styles.instructions}>Chúc một ngày tốt lành,</Text>
                <Text style={styles.instructions}>
                  hãy nhớ uống thuốc đầy đủ nhé?
                </Text>
              </>
            )}
          </View>{" "}
        </ImageBackground>
      </View>
      <View>
        <DoctorList /> <BtnCalendar navigation={navigation} />
        <Medicine />
        {/* //<Button title="Đặt ngay" style={styles.btn} onPress={() => navigation.navigate('SighUpOne')} /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    marginBottom: 70,
  },
  containerWrap: {
    padding: "10px",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    height: "100%",
    padding: "7%",
  },
  container: { padding: 2, marginBottom: "10%" },
  welcome: {
    fontSize: 24,
    color: "#ffffff",
    marginBottom: "10px",
    width: "70%",
  },
  instructions: { fontSize: 16, color: "#ffffff" },
  containers: {
    backgroundColor: "#FFFF",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
});
export default HomeScreen;
