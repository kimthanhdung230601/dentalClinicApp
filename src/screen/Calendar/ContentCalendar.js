import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ContentCalendar = ({ jsonData }) => {
  // Render mỗi mục trong danh sách
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.date}>
          {item.controlDate}: {item.contentControl}
        </Text>
        <Text></Text>
        <Text>Thứ tự: {item.numericalOrder}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={jsonData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: "8px",
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  date: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#0085FF",
  },
});

export default ContentCalendar;
