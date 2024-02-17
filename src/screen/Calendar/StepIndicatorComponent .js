import {
  UserInfoIndicator,
  ContentIndicator,
  CheckInfoIndicator,
} from "./BookCalendar2";
import { LeftOutline, RightOutline } from "antd-mobile-icons";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { FormProvider } from "./BookCalendar2";
const StepIndicatorComponent = ({ calendar }) => {
  // console.log("calendar",calendar.dateString);
  const [currentPage, setCurrentPage] = useState(0);
  // const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Thêm trạng thái cho nha sĩ đã chọn
  const [content, setContent] = useState(null);

  const steps = [
    { label: "Thông tin cá nhân " },
    { label: "Nội dung khám" },
    { label: "Kiểm tra TT" },
  ];

  const moveNext = () => {
    if (currentPage < steps.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const movePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  let currentPageIndicator;
  switch (currentPage) {
    case 0:
      currentPageIndicator = (
        <UserInfoIndicator
          currentPage={currentPage}
        />
      );
      break;
    case 1:
      currentPageIndicator = (
        <ContentIndicator
          currentPage={currentPage}
          setContent={setContent}
          setSelectedDoctor={setSelectedDoctor}
          setSelectedValue={setSelectedValue}
          content={content}
          selectedDoctor={selectedDoctor}
          selectedValue={selectedValue}
          
        />
      );
      break;
    case 2:
      currentPageIndicator = (
        <CheckInfoIndicator
          currentPage={currentPage}
          content={content}
          selectedDoctor={selectedDoctor}
          selectedValue={selectedValue}
          calendar={calendar}
        />
      );
      break;
    default:
      currentPageIndicator = null;
      break;
  }
  return (
    <View style={styles.container}>
      <StepIndicator
        currentPosition={currentPage}
        stepStrokeCurrentColor="stepStrokeCurrentColor: '#2DB7F5'"
        labels={steps.map((step) => step.label)}
        stepCount={steps.length}
      />
      {currentPageIndicator}
      <View style={styles.buttonContainer}>
        {" "}
        <TouchableOpacity onPress={movePrevious}>
          <Text style={styles.buttonText}>
            <LeftOutline />
          </Text>{" "}
        </TouchableOpacity>{" "}
        <TouchableOpacity onPress={moveNext}>
          <Text style={styles.buttonText}>
            <RightOutline />
          </Text>{" "}
        </TouchableOpacity>{" "}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  margin:10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 90,
  },
  buttonText: {
    padding: 10,
    backgroundColor: "#2DB7F5",
    color: "#FFFFFF",
    borderRadius: 5,
  },
});

export default StepIndicatorComponent;
