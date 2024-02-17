import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import HistoryMedicine from "../../components/medicine/HistoryMedicine";
import ListMedicine from "../../components/medicine/ListMedicine";
import SearchComponent from "../../components/SearchComponent";

const MedicineScreen = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState("A"); // Giá trị mặc định là "A"

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View>
      <SearchComponent />
      <View style={styles.container}>
      </View>

      {selectedTab === "A" && <HistoryMedicine navigation={navigation}/>}
      {selectedTab === "B" && <ListMedicine />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop:10
  },
  button: {
    backgroundColor: "#FFFF",
    margin: 10,
    borderRadius: 8,
    // padding: 10,
  },
});
export default MedicineScreen;
