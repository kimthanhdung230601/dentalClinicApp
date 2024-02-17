import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import {
  BellOutline,
  UserOutline,
  CalendarOutline,
  GlobalOutline,
  LeftOutline,
  FileOutline,
} from "antd-mobile-icons";
const Header = ({ navigation, route }) => {
  const [activeScreen, setActiveScreen] = useState("");
  const [isHome, setIsHome] = useState(false); // Tạo state để kiểm tra có đang ở trang Home hay không

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setActiveScreen(route);
    // Kiểm tra nếu đang ở trang Home, thiết lập isHome thành true
    if (route === "HomeScreen") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [route]);

  useEffect(() => {
    //cập nhật active
    setActiveScreen(route);
  }, [route]);
  return (
    <View>
      {" "}
      {!isHome && ( // Kiểm tra nếu không phải trang Home thì hiển thị phần wrap
        <View style={styles.wrap}>
          <View>
            <TouchableOpacity style={styles.icons} onPress={goBack}>
              <Text style={[styles.iconStyle]}>
                <LeftOutline />
              </Text>
            </TouchableOpacity>
            {/* <Button title="Go Back" /> */}
          </View>
        </View>
      )}
      <View style={[styles.container]}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          {" "}
          <Image
            style={[
              styles.logo,
              activeScreen === "HomeScreen" && styles.activeLogo,
            ]}
            source={require("../assets/logo.png")}
          />{" "}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate("CalendarIndex")}
        >
          <Text
            style={[
              styles.iconStyle,
              activeScreen === "CalendarIndex" && styles.activeIcon,
            ]}
          >
            <CalendarOutline fontSize={24} />{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate("MedicineScreen")}
        >
          <Text
            style={[
              styles.iconStyle,
              activeScreen === "MedicineScreen" && styles.activeIcon,
            ]}
          >
            <FileOutline fontSize={24} />{" "}
          </Text>
        </TouchableOpacity>
          <TouchableOpacity
          style={styles.icons}
          onPress={() =>
            navigation.navigate("ListNoti", (navigation = { navigation }))
          }
        >
          <Text
            style={[
              styles.iconStyle,
              activeScreen === "ListNoti" && styles.activeIcon,
            ]}
          >
            <BellOutline fontSize={24} />{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() =>
            navigation.navigate("InforUserIndex", (navigation = { navigation }))
          }
        >
          <Text
            style={[
              styles.iconStyle,
              activeScreen === "InforUserIndex" && styles.activeIcon,
            ]}
          >
            <UserOutline fontSize={24} />{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    position: "fixed", // hoặc 'fixed'
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 0,
    // alignItems: "center",
    zIndex: 10,
    width: "100%",
    borderTopColor: "#CCC",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    borderBottomColor: "#FFF",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },

  logo: {
    height: "45px",
    width: "45px",
    objectFit: "contain",
  },
  activeLogo: {
    height: "55px",
    width: "55px",
    objectFit: "contain",
  },
  icons: {
    flexDirection: "row",
    marginRight: "10px",
  },
  iconStyle: {
    color: "#000",
    fontSize: 22,
    margin: "7px",
  },
  activeIcon: {
    color: "#2DB7F5", // Màu khi được chọn
  },
});

export default Header;
