import React, { useState, useEffect } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import Header from "../../components/Header";
import ContentCalendar from "./ContentCalendar";
import SearchComponent from "../../components/SearchComponent";
import { listCalendar } from "../../api/api";

const CalendarIndex = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const [jsonData, setJsonData] = useState([]);
  const [idExam, setIdExam] = useState();
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const userData = await AsyncStorage.getItem("userData");
          if (userData !== null) {
            const parsedUserData = JSON.parse(userData);
            const res = await listCalendar(parsedUserData.idPatient);
            console.log(res);
            setJsonData(res);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, [])
  );

  // Tạo đối tượng markedDates từ jsonData
  const markedDates = {};
  for (const data of jsonData) {
    markedDates[data.controlDate] = {
      selectedColor: "#54BA4A",
      selected: true,
      content: data.contentControl,
      id: data.idExam,
    };
  }

  return (
    <View>
      <SearchComponent />
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          setSelected(day.dateString);
          const selectedData = jsonData.find(
            (data) => data.controlDate === day.dateString
          );
          if (selectedData) {
            navigation.navigate("CalendarForm", {
              calendar: day,
              jsonData: jsonData.map((data) => data.controlDate),
              idExam: selectedData.idExam, // Truyền idExam tương ứng
            });
          } else {
            navigation.navigate("CalendarForm", {
              calendar: day,
              jsonData: jsonData.map((data) => data.controlDate),
            });
          }
        }}
        markedDates={{
          ...markedDates,
          [selected]: {
            selected: true,
            marked: true,
            selectedColor: "#2DB7F5",
          },
        }}
      />
      <View style={styles.contentCalendar}>
        <ContentCalendar jsonData={jsonData} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  calendar: {
    margin: 10,
    borderRadius: "8px",
  },
});
export default CalendarIndex;
