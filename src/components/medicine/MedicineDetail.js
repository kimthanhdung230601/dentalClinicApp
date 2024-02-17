import React, { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import SearchComponent from "../SearchComponent";
import { getHistoryExam } from "../../api/api";

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


const MedicineDetail = ({route}) => {
  const {idExam,controlDate} = route.params;
  const [data, setData] = useState(null);
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await getHistoryExam(idExam);
      console.log("listMedicine",res);
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, [idExam]);
  // console.log("idExam",idExam);
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.column}>
        <Text style={styles.type}>{item.medicineName}</Text>
        <Text style={styles.amount}>{item.amount} {item.medicineForm}</Text>
      </View>
      <View style={styles.columnRight}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.time}>{item.usingMedicine}</Text>
      </View>
    </View>
  );

  return (
    <View>
      {" "}
      <SearchComponent />
      <View style={styles.container}>
        <Text style={styles.name}>Đơn thuốc ngày: {controlDate} </Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.medicineName}
        />
      </View>
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

export default MedicineDetail;
