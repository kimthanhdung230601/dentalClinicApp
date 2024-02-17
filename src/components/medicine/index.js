import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
// import MedicationItem from "./MedicationItem";
import HistoryMedicine from "./HistoryMedicine";

const medications = [
  {
    type: "Thuốc kháng sinh",
    time: "Sau ăn",
    amount: "2 viên",
    price: "45.000",
  },
  {
    type: "Thuốc kháng sinh",
    time: "Sau ăn",
    amount: "2 viên",
    price: "45.000",
  },
];

const Medicine = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.column}>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
      <View style={styles.columnRight}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.name}>Đơn thuốc hiện tại</Text>
        <FlatList
          data={medications}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  container2: {
    backgroundColor: "#FFFF",
    margin: 10,
    borderRadius: 8,
    // padding: 10,
  },
  name: {
    marginLeft:10,
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

export default Medicine;
