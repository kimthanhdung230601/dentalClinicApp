import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { UserOutline, SetOutline, LeftOutline,PayCircleOutline,FileOutline} from "antd-mobile-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const InforUserIndex = ({ navigation }) => {
  const handlePersonalInfoClick = () => {
    // Xử lý khi người dùng click vào thông tin cá nhân
    navigation.navigate("InforUser");
  };

  const handleMedicineClick = () => {
    // Xử lý khi người dùng click vào đơn thuốc
    navigation.navigate("MedicineScreen");
  };
  const handleSettingsClick = () => {
    // Xử lý khi người dùng click vào đơn thuốc
    // navigation.navigate("MedicineScreen");
  };

  const handleLogoutClick =  () => {
       AsyncStorage.removeItem('userData');
      navigation.navigate('LogIn');
  };
  return (
    <View>
      <View style={styles.avatar}>
        <ImageBackground
          style={styles.container}
          source={require("../../assets/bgAvatar.png")}
        >
          <View style={[styles.content]}>
            <Image
              style={styles.image}
              source={require("../../assets/logo.png")}
            />
            <Text style={styles.text}>Họ và tên: UserName</Text>
          </View>
        </ImageBackground>
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.item}
            onPress={handlePersonalInfoClick}
          >
            <UserOutline style={styles.icon} />
            <Text style={styles.text}> Thông tin cá nhân</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleMedicineClick}>
            <FileOutline style={styles.icon} />
            <Text style={styles.text}>Đơn thuốc</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleSettingsClick}>
            <PayCircleOutline style={styles.icon} />
            <Text style={styles.text}>Thanh toán</Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity style={styles.item} onPress={handleSettingsClick}>
            <SetOutline style={styles.icon} />
            <Text style={styles.text}>Cài đặt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemEnd} onPress={handleLogoutClick}>
            <LeftOutline style={styles.icon} />
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
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
    paddingBottom: 40,
  },
  content: { alignItems: "center", justifyContent: "center" },
  image: {
    height: 60,
    width: 60,
    objectFit: "contain",
  },
  container2: {
    backgroundColor: "#fff",
    marginTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
  },
  itemEnd: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  icon: {
    marginRight: 10,
    fontSize: 18,
  },
  text: {
    fontSize: 16,
  },
  // question: {
  //   fontSize: 14,
  //   lineHeight: 22,
  //   marginBottom: 4,
  // },
  // input: {
  //   borderRadius: 2,
  //   borderColor: "#D9D9D9",
  //   borderWidth: 1,
  //   height: 32,
  //   marginBottom: 14,
  // },
});
export default InforUserIndex;
