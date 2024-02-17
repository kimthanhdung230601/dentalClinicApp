import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
} from "react-native";
import AppStyle from "../../theme";
//import Button from '@ant-design/react-native/lib/button';

const SighUpOne = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false); // State để kiểm tra mật khẩu không trùng khớp

  const handleLogin = () => {
    if (password !== ConfirmPassword) {
      // Kiểm tra nếu mật khẩu không trùng khớp
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
      navigation.navigate("SighUpTwo");
      // console.log("Login Successful");
      // Thực hiện các hành động cần thiết khi mật khẩu trùng khớp
    }
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
        placeholder="Họ và tên"
        onChangeText={(text) => setUserName(text)}
        value={userName}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu"
        onChangeText={(text) => setConfirmPassword(text)}
        value={ConfirmPassword}
        secureTextEntry
      />
      {passwordMismatch && ( // Hiển thị thông báo nếu mật khẩu không trùng khớp
        <Text style={styles.errorText}>Mật khẩu không trùng khớp</Text>
      )}
      <View>
        <Button style={styles.buttonText} onPress={handleLogin} title="Tiếp" />
      </View>
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
  buttonText: {
    padding: 10,
    backgroundColor: "#2DB7F5",
    color: "#FFFFFF",
    borderRadius: 5,
    width:"100%"
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
  errorText: {
    color: "red",
  },
});

export default SighUpOne;
