import React from "react";
import { View, Text, FlatList, StyleSheet, Image, ImageBackground } from "react-native";

const doctorData = [
  {
    id: 1,
    title: "Nha khoa thẩm mĩ",
    imageBg: require("../assets/bgSv2.png"),
    image: require("../assets/ListServe1.png"),
  },
  {
    id: 2,
    title: "Nha khoa tổng quát ",
    imageBg: require("../assets/bgSv2.png"),
    image: require("../assets/ListServe1.png"),
  },
  {
    id: 3,
    title: "Răng hàm mặt",
    imageBg: require("../assets/bgSv2.png"),
    image: require("../assets/ListServe1.png"),
  },
  {
    id: 4,
    title: "Bệnh lý răng miệng",
    imageBg: require("../assets/bgSv2.png"),
    image: require("../assets/ListServe1.png"),
  },
];

const DoctorItem = ({ doctor }) => {
  return (
    <View style={styles.column}>
      <ImageBackground source={doctor.imageBg} style={styles.imageBg}>
        <Image source={doctor.image} style={styles.image} />
      </ImageBackground>
      <Text style={styles.title}>{doctor.title}</Text>
    </View>
  );
};

const DoctorList = () => {
  const renderDoctorItem = ({ item }) => <DoctorItem doctor={item} />;

  const renderRow = ({ item }) => {
    return (
      <View style={styles.row}>
        <DoctorItem doctor={item[0]} />
        {item.length > 1 && <DoctorItem doctor={item[1]} />}
      </View>
    );
  };

  // Chia danh sách thành các cặp để hiển thị 2 item trên mỗi dòng
  const pairs = doctorData.reduce((result, item, index) => {
    if (index % 2 === 0) {
      result.push([item]);
    } else {
      result[result.length - 1].push(item);
    }
    return result;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleList}>Dịch vụ dành cho bạn</Text>
      <FlatList
        data={pairs}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 8,
    // marginRight:10
  },
  imageBg: {
    resizeMode: 'contain', // Chọn 'contain' để hình ảnh lấp đầy không gian
    width: 170,
    height: 160,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleList: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 5,
    marginBottom:10,
  },
  title: {
    fontSize: 14,
    color: "#2F2F3B",
    fontWeight: 500,
    marginTop: 5,
  },
  container: {
    backgroundColor: "#FFFF",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
});

export default DoctorList;
