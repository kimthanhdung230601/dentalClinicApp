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
import { logIn } from "../../api/api";
//import Button from '@ant-design/react-native/lib/button';

const LogIn = ({navigation}) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const payload ={
      phoneNumber: phone,
      password:password
    }
    const res = logIn(payload);
    // console.log(res);
    // console.log(payload);
   // console.log("Login Successful");
    navigation.navigate('HomeScreen')
  };

  return (
    <View style={[styles.container, AppStyle.StyleCommon.bg]}>
      <Image
        style={styles.logo}
        source={require("../../assets/logoText.png")}
      />{" "}
      <Text style={styles.title}>
        <Text style={styles.titleChoosen}>Đăng nhập</Text>
        <Text   onPress={() => navigation.navigate('SighUpOne')}>Đăng ký</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        onChangeText={(text) => setPhone(text)}
        value={phone}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button
        style={[AppStyle.StyleCommon.button1]}
        onPress={handleLogin}
        title="Đăng nhập"
      />
      <TouchableOpacity>
        <Text style={styles.link}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      <Image
        style={styles.bgImg}
        source={require("../../assets/logo.png")}
      />{" "}
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
    objectFit: "cover",
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
  // button: {
  //   width: "80%",
  //   marginTop: 10,
  // },
  link: {
    marginTop: 10,
    color: "#007AFF",
  },
  title:{
    display:"flex",
    color:"#FFF",
    marginBottom: "3vh",
  },
  titleChoosen:{
    color:"#2db7f5",
    marginRight:"3vh"
  },
  bgImg:{
   width: "70%",
    height: 170,
    marginTop:70,
    objectFit: "c",
    opacity:"10%"
  }
});

export default LogIn;
