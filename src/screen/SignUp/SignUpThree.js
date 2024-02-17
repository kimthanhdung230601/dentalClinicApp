import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
} from "react-native";
import AppStyle from "../../theme";

const SighUpThree = ({ route }) => {
  const [OTP, setOTP] = useState("");
  const { gmail } = route.params;
  const hidePhoneNumber = (gmail) => {
    const visibleDigits = 2; // Số chữ số cuối cùng bạn muốn hiển thị
    const totalDigits = gmail.length;
    const hiddenPart = gmail.slice(0, totalDigits - visibleDigits).replace(/\d/g, '*');
    const visiblePart = gmail.slice(totalDigits - visibleDigits);
  
    return hiddenPart + visiblePart;
  };
  const hiddenPhoneNumber = hidePhoneNumber(gmail);  
  const handleLogin = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={[styles.container, AppStyle.StyleCommon.bg]}>
      <Image
        style={styles.logo}
        source={require("../../assets/logoText.png")}
      />{" "}
      <Text style={styles.title}>
        <Text onPress={() => navigation.navigate("LogIn")}>Đăng nhập</Text>
        <Text style={styles.titleChoosen}>Đăng ký</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập mã OTP"
        onChangeText={(text) => setOTP(text)}
        value={OTP}
      />
      <Text style={styles.text}>Mã OTP đã được gửi về {hiddenPhoneNumber}, vui lòng nhập mã OTP để đăng ký tài khoản</Text>
      <Button
        style={AppStyle.StyleCommon.button1}
        onPress={handleLogin}
        title="Hoàn thành"
      />
      <Image style={styles.bgImg} source={require("../../assets/logo.png")} />{" "}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: 124,
    marginBottom: 40,
    // objectFit: "",
  },
  input: {
    width: "80%",
    height: 40,
    marginBottom: 12,
    backgroundColor: "#FFFF",
    borderRadius: "8px",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingLeft: 10,
  },
  link: {
    marginTop: 10,
    color: "#007AFF",
  },
  title: {
    display: "flex",
    color: "#FFF",
    marginBottom: "3vh",
  },
  titleChoosen: {
    color: "#2db7f5",
    marginLeft: "3vh",
  },
  bgImg: {
    width: "70%",
    height: 170,
    marginTop: 70,
    objectFit: "c",
    opacity: "10%",
  },
  text:{
    marginBottom:"1vh",
    color:"#FFF",
    margin:20
  }

});

export default SighUpThree;
