import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { SearchOutline } from "antd-mobile-icons";

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <SearchOutline style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm"
          placeholderTextColor="#888"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#FFF",padding:10},
  block: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    // marginTop: 10,
  },
  icon: {
    marginRight: 10,
    color: "#888",
    margin:10,
    fontSize:16
  },
  input: {
    flex: 1,
    color: "#333",
    fontSize: 16,
    borderRadius: 8,
    paddingLeft:10
  },
});

export default SearchComponent;
