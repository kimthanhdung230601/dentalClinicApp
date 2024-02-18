import React, { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { getNoti } from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";



const ListNoti = ({ navigation }) => {
  const [parsedData, setParsedData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData !== null) {
          const parsedUserData = JSON.parse(userData);
          setParsedData(parsedUserData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  //detail
  const [editedData, setEditedData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getNoti(parsedData?.idPatient);
        setEditedData(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [parsedData?.idPatient]);
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.column}>
        <Text style={styles.type}>Từ nha sĩ {item?.operatorName}</Text>
        <Text style={styles.amount}>Nội dung: {item?.content}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Thông báo</Text>
      <FlatList
        data={editedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF",
    margin: 10,
    borderRadius: 8,
    // padding: 10,
  },
  name: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    color: "#333333",
    fontWeight: "600",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  header: {
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  column: {
    flex: 1,
  },
  columnRight: {
    width: "45%",
    alignItems: "flex-end",
  },
  type: {
    color: "#2F2F3B",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "0.3px",
  },
  price: {
    color: "#87D068",
    fontSize: 14,
    letterSpacing: "0.3px",
  },
  amount: {
    color: " rgba(82, 82, 108, 0.80)",
    letterSpacing: "0.3px",
    // letterSpacing:"0.3px",
  },
  time: { color: " rgba(82, 82, 108, 0.80)", letterSpacing: "0.3px" },
  //   letterSpacing:"0.3px",
});

export default ListNoti;
