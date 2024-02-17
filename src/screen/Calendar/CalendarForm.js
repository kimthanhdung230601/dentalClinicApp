import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../../components/Header";
import StepIndicatorComponent from "./StepIndicatorComponent ";
import moment from "moment";
import ExamDetail from "./ExamDetail";
const CalendarForm = ({ route }) => {
  const { calendar, jsonData, idExam } = route.params;
  const isChoosenDate = jsonData.includes(calendar.dateString);
  const currentDate = moment().format("YYYY-MM-DD");
  const isPastDate = moment(calendar.dateString).isBefore(currentDate);

  return (
    <View>
      <Text style={styles.container}>
        <Text style={styles.question}>Ngày khám: </Text>
        <TextInput style={styles.input} defaultValue={calendar.dateString} />
      </Text>
      <View>
        {isChoosenDate ? (
          <ExamDetail idExam={idExam} calendar={calendar}/>
        ) : isPastDate ? (
          <Text style={styles.errorMessage}>
            Lịch chọn chưa hợp lệ. Vui lòng chọn ngày khác.
          </Text>
        ) : (
          <StepIndicatorComponent calendar={calendar}/>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 8,
    padding: 10,
    display: "flex",
  },
  question: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8,
    paddingTop: 4,
  },
  input: {
    borderColor: "#D9D9D9",
    borderWidth: 0,
    borderBottomWidth: 1,
    marginLeft: 4,
  },
  errorMessage:{
    margin: 10,
  }
});
export default CalendarForm;
