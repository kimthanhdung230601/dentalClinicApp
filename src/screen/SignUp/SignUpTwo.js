import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Button,Alert
} from "react-native";
import AppStyle from "../../theme";
const SighUpTwo = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [gmail, setGmail] = useState("");
  const [address, setAddress] = useState("");
  
  const handleLogin = () => {
    if (!phone || !gmail || !address) {
        // Kiểm tra xem có các trường nào không được nhập không
        Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin');
      } else {
        // console.log('Login Successful');w
        navigation.navigate('SighUpThree', { gmail });
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
        placeholder="Số điện thoại"
        onChangeText={(text) => setPhone(text)}
        value={phone}
      />
      <TextInput
        style={styles.input}
        placeholder="Gmail"
        onChangeText={(text) => setGmail(text)}
        value={gmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Địa chỉ"
        onChangeText={(text) => setAddress(text)}
        value={address}
        
      />
      <Button
        style={AppStyle.StyleCommon.button1}
        onPress={handleLogin}
        title="Tiếp"
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
  button: {
    width: "80%",
    marginTop: 10,
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
  errorText:{
    color:"red"
  }
});

export default SighUpTwo;
