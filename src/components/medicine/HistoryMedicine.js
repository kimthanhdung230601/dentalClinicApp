// import React, { useState, useCallback, useRef, useEffect } from "react";
// import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
// import StepIndicator from "react-native-step-indicator";
// import dummyData from "./data";
// import { getHistoryMedicine } from "../../api/api";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function HistoryMedicine({ navigation }) {
//   const [currentPage, setCurrentPage] = useState(0);
//   const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 40 }).current;
//   // const stepCount =1;
//   const [stepCount,setStepCount] = useState();
//   console.log("data",data?.length );
//   const onPressItem = (idExam,controlDate) => {
//      navigation.navigate("MedicineDetail",{ idExam: idExam, controlDate: controlDate}); // 
//     // console.log("medicine",idMedicine);
//   };
//    //lấy idPatient
//    const [parsedData, setParsedData] = useState(null);
//    useEffect(() => {
//      const fetchData = async () => {
//        try {
//          const userData = await AsyncStorage.getItem("userData");
//          if (userData !== null) {
//            const parsedUserData = JSON.parse(userData);
//            setParsedData(parsedUserData);
//          }
//        } catch (error) {
//          console.error(error);
//        }
//      };
//      fetchData();
//    }, []);
//    //listMedicine
//    const [data, setData] = useState(null);
//    useEffect(() => {
//      const fetchData = async () => {
//        try {
//          const res = await getHistoryMedicine(parsedData?.idPatient);
//          console.log("listMedicine",res);
//          setData(res);
//          setStepCount(res.length)
//         //  setEditedData(res);
//        } catch (error) {
//          console.error(error);
//        }
//      };
//      fetchData();
//    }, [parsedData?.idPatient]);
//   const renderPage = (rowData) => {
//     const item = rowData.item;
//     return (
//       <TouchableOpacity style={styles.rowItem} onPress={()=>{onPressItem(item?.idExam,item.controlDate)}}>
//         <Text style={styles.title}>{item.controlDate}</Text>
//         <Text style={styles.body}>Tên thuốc: {item.medicineName}</Text>
//         <Text style={styles.body}>Giá tiền: {item.price} Đ</Text>
//       </TouchableOpacity>
//     );
//   };

//   const onViewableItemsChanged = useCallback(({ viewableItems }) => {
//     const visibleItemsCount = viewableItems.length;
//     if (visibleItemsCount !== 0) {
//       setCurrentPage(viewableItems[visibleItemsCount - 1].index);
//     }
//   }, []);

//   return (
//     <View style={styles.wrap}>
//       <Text style={styles.title1}>Lịch sử theo dõi</Text>
//       <View style={styles.container}>
//         <View style={styles.stepIndicator}>
//           <StepIndicator
//             stepCount={stepCount}
//             direction="vertical"
//             currentPosition={currentPage}
//             labels={data?.map((item) => item.controlDate)}
//           />
//         </View>
//         <FlatList
//           style={{ flexGrow: 1 }}
//           data={data}
//           renderItem={renderPage}
//           onViewableItemsChanged={onViewableItemsChanged}
//           viewabilityConfig={viewabilityConfig}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrap: {
//     backgroundColor: "#ffffff",
//     marginTop: 10,
//   },
//   title1: {
//     marginTop: 10,
//     marginLeft: 10,
//     fontSize: 18,
//     color: "#333333",
//     fontWeight: "600",
//   },
//   container: {
//     flex: 1,
//     flexDirection: "row",
//   },
//   stepIndicator: {
//     // marginVertical: 50,
//     paddingHorizontal: 10,
//   },
//   rowItem: {
//     flex: 3,
//     paddingVertical: 10,
//     // borderWidth: 1,
//   },
//   title: {
//     flex: 1,
//     fontSize: 16,
//     color: "#333333",
//     paddingVertical: 16,
//     fontWeight: "600",
//   },
//   body: {
//     flex: 1,
//     fontSize: 15,
//     color: "#606060",
//     lineHeight: 24,
//     marginRight: 8,
//   },
// });
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import StepIndicator from "react-native-step-indicator";

// Sample hardcoded data to simulate the API response
const hardcodedData = [
  {
    idExam: 1,
    controlDate: "2023-01-01",
    medicineName: "Paracetamol",
    price: 10,
  },
  {
    idExam: 2,
    controlDate: "2023-01-02",
    medicineName: "Aspirin",
    price: 15,
  },
];

export default function HistoryMedicine({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {

    setStepCount(hardcodedData.length);
  }, []);

  const onPressItem = (idExam, controlDate) => {
    navigation.navigate("MedicineDetail", { idExam: idExam, controlDate: controlDate });
  };

  const renderPage = (rowData) => {
    const item = rowData.item;
    return (
      <TouchableOpacity style={styles.rowItem} onPress={() => { onPressItem(item?.idExam, item.controlDate) }}>
        <Text style={styles.title}>{item.controlDate}</Text>
        <Text style={styles.body}>Tên thuốc: {item.medicineName}</Text>
        <Text style={styles.body}>Giá tiền: {item.price} Đ</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.title1}>Lịch sử theo dõi</Text>
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            stepCount={stepCount}
            direction="vertical"
            currentPosition={currentPage}
            labels={hardcodedData.map((item) => item.controlDate)}
          />
        </View>
        <FlatList
          style={{ flexGrow: 1 }}
          data={hardcodedData}
          renderItem={renderPage}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#ffffff",
    marginTop: 10,
  },
  title1: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    color: "#333333",
    fontWeight: "600",
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
  stepIndicator: {
    // marginVertical: 50,
    paddingHorizontal: 10,
  },
  rowItem: {
    flex: 3,
    paddingVertical: 10,
    // borderWidth: 1,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#333333",
    paddingVertical: 16,
    fontWeight: "600",
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: "#606060",
    lineHeight: 24,
    marginRight: 8,
  },
});
