// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   TouchableHighlight,
//   Modal,
//   TouchableOpacity,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import RNPickerSelect from "react-native-picker-select";
// import {
//   calendarDetail,
//   deleteCalendar,
//   getListOperator,
//   insertCalendar,
//   updateCalendar,
// } from "../../api/api";
// import { options } from "../../untils/untils";
// import { useNavigation } from "@react-navigation/native";
// import AppStyle from "../../theme";
// const DoctorListModal = ({
//   modalVisible,
//   setModalVisible,
//   setSelectedDoctor,
// }) => {
//   const [doctors, setDoctors] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await getListOperator();
//         setDoctors(res);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);
//   const renderItem = ({ item }) => {
//     return (
//       <TouchableHighlight
//         onPress={() => {
//           setSelectedDoctor(item); // Cập nhật trạng thái khi chọn nha sĩ
//           setModalVisible(false);
//         }}
//         underlayColor="#DDDDDD"
//       >
//         <View style={styles.item}>
//           <Text>Họ tên: {item.operatorName}</Text>
//           <Text>Số điện thoại {item.phoneNumber}</Text>
//         </View>
//       </TouchableHighlight>
//     );
//   };
//   return (
//     <Modal
//       animationType="slide"
//       // transparent={false}
//       visible={modalVisible}
//       onRequestClose={() => {
//         setModalVisible(false);
//       }}
//     >
//       <View style={styles.modalContainer}>
//         <Text style={styles.modalTitle}>Chọn nha sĩ</Text>
//         <FlatList
//           data={doctors}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.idOperator.toString()}
//         />
//         <TouchableHighlight
//           style={styles.closeButton}
//           onPress={() => {
//             setModalVisible(!modalVisible);
//           }}
//         >
//           <Text style={styles.closeButtonText}>Đóng</Text>
//         </TouchableHighlight>
//       </View>
//     </Modal>
//   );
// };

// const EditCalendar = ({ route }) => {
//   const { idExam, calendar } = route.params;
//   const [modalVisible, setModalVisible] = useState(false);
//   const [data, setData] = useState();
//   const [selectedDoctor, setSelectedDoctor] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await calendarDetail(idExam);
//         setData(res);
//         setSelectedDoctor(res.operatorName);
//       } catch (error) {
//         console.log("error:", error);
//       }
//     };
//     fetchData();
//   }, [idExam]);
//   //lấy giá trị idPatient
//   const [parsedData, setParsedData] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userData = await AsyncStorage.getItem("userData");
//         if (userData !== null) {
//           const parsedUserData = JSON.parse(userData);
//           // console.log(parsedUserData.patientName);
//           setParsedData(parsedUserData);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);
//   // lưu giá trị mới sau khi thay đổi
//   const [formData, setFormData] = useState({
//     control: null,
//     operatorName: "",
//     contentControl: "",
//   });
//   const handleInputChange = (field, value) => {
//     setFormData({
//       ...formData,
//       [field]: value,
//     });
//   };
//   //update calendar
//   const handleSave = async () => {
//     try {
//       console.log("formData", formData);
//       console.log("doctor", selectedDoctor.idOperator);
//       const payload = {
//         idExam: idExam,
//         idOperator: selectedDoctor.idOperator|| data.idOperator,
//         idPatient: parsedData.idPatient,
//         control: formData.control,
//         contentControl: formData.contentControl,
//         controlDate: calendar.dateString,
//         typeCalendar: 0,
//       };
//       const res = await updateCalendar(payload);
//       alert("Cập nhật thành công");
//       console.log("res", res);
//     } catch (error) {
//       console.error("Lỗi khi lưu dữ liệu:", error);
//       alert("sửa thất bại");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.item}>
//         <Text style={styles.question}>Loại hình khám</Text>
//         <RNPickerSelect
//           placeholder={{
//             label: "Chọn loại hình khám...",
//             value: null,
//           }}
//           items={options}
//           value={data?.control || null}
//           onValueChange={(value) => handleInputChange("control", value)}
//           style={{
//             inputIOS: styles.input,
//             inputAndroid: styles.input,
//           }}
//         />
//       </View>
//       <View style={styles.item}>
//         <Text style={styles.question}>Nha sĩ phụ trách</Text>
//         <TouchableHighlight
//           onPress={() => {
//             setModalVisible(true);
//           }}
//           underlayColor="#DDDDDD"
//         >
//           <View>
//             <Text style={styles.input}>
//               {selectedDoctor?.operatorName || data?.operatorName}
//             </Text>
//           </View>
//         </TouchableHighlight>

//         <DoctorListModal
//           modalVisible={modalVisible}
//           setModalVisible={setModalVisible}
//           setSelectedDoctor={setSelectedDoctor}
//         />
//         <View style={styles.item}>
//           <Text style={styles.question}>Nội dung khám</Text>
//           <TextInput
//             style={styles.input}
//             defaultValue={data?.contentControl || ""}
//             onChangeText={(value) => handleInputChange("contentControl", value)}
//           />
//         </View>
//       </View>
//       <View style={styles.item}>
//         {/* Nút Lưu */}
//         <TouchableOpacity
//           style={[AppStyle.StyleCommon.button1, styles.btnInsert]}
//           onPress={handleSave}
//         >
//           <Text style={styles.btnSaveText}>THAY ĐỔI LỊCH</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     margin: 10,
//     borderRadius: 8,
//     padding: 10,
//   },
//   question: {
//     fontSize: 14,
//     lineHeight: 22,
//     // marginBottom: 4,
//   },
//   input: {
//     borderRadius: 2,
//     borderColor: "#D9D9D9",
//     borderWidth: 0,
//     borderBottomWidth: 1,
//     marginBottom: 17,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     margin: 30,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 15,
//   },
//   closeButton: {
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: "#DDDDDD",
//   },
//   closeButtonText: {
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   item: {
//     padding: 10,
//     fontSize: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#CCCCCC",
//   },
//   container3: {
//     flex: 1,
//     backgroundColor: "#fff",
//     margin: 10,
//     padding: 10,
//     borderRadius: 8,
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   column3: {
//     width: "50%", // Chia đôi khoảng không gian cho mỗi cột
//     paddingHorizontal: 5,
//     marginBottom: 10,
//   },
//   label3: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   value3: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   divider3: {
//     width: "100%",
//     borderTopWidth: 1,
//     borderTopColor: "#CCCCCC",
//     marginVertical: 10,
//   },
//   btnInsert: {
//     padding: 10,
//     backgroundColor: "#2DB7F5",
//     color: "#FFFFFF",
//     borderRadius: 5,
//     width: "100%",
//   },
//   btnSaveText: {
//     color: "#FFFFFF",
//   },
// });
// export { EditCalendar };

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableHighlight,
  Modal,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from "react-native-picker-select";
import {
  calendarDetail,
  deleteCalendar,
  getListOperator,
  insertCalendar,
  updateCalendar,
} from "../../api/api";
import { options } from "../../untils/untils";
import { useNavigation } from "@react-navigation/native";
import AppStyle from "../../theme";
const DoctorListModal = ({ modalVisible, setModalVisible, setSelectedDoctor }) => {
  const hardcodedDoctors = [
    {
      idOperator: 1,
      operatorName: "Dr. John Doe",
      phoneNumber: "123-456-7890",
    },
    // Add more hardcoded doctor data as needed
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          setSelectedDoctor(item);
          setModalVisible(false);
        }}
        underlayColor="#DDDDDD"
      >
        <View style={styles.item}>
          <Text>Họ tên: {item.operatorName}</Text>
          <Text>Số điện thoại {item.phoneNumber}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Chọn nha sĩ</Text>
        <FlatList
          data={hardcodedDoctors}
          renderItem={renderItem}
          keyExtractor={(item) => item.idOperator.toString()}
        />
        <TouchableHighlight
          style={styles.closeButton}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.closeButtonText}>Đóng</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );
};

const EditCalendar = ({ route }) => {
  const { idExam, calendar } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({
    control: "Nha khoa tổng quát",
    contentControl: "Đau răng",
    operatorName: "Nguyễn Văn A",
  });
  const [selectedDoctor, setSelectedDoctor] = useState();

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleSave = () => {
    alert("Cập nhật thành công");
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.question}>Loại hình khám</Text>
        <RNPickerSelect
          placeholder={{
            label: "Chọn loại hình khám...",
            value: null,
          }}
          items={options}
          value={data?.control || null}
          onValueChange={(value) => handleInputChange("control", value)}
          style={{
            inputIOS: styles.input,
            inputAndroid: styles.input,
          }}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.question}>Nha sĩ phụ trách</Text>
        <TouchableHighlight
          onPress={() => {
            setModalVisible(true);
          }}
          underlayColor="#DDDDDD"
        >
          <View>
            <Text style={styles.input}>
              {selectedDoctor?.operatorName || data?.operatorName}
            </Text>
          </View>
        </TouchableHighlight>

        <DoctorListModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setSelectedDoctor={setSelectedDoctor}
        />
        <View style={styles.item}>
          <Text style={styles.question}>Nội dung khám</Text>
          <TextInput
            style={styles.input}
            defaultValue={data?.contentControl || ""}
            onChangeText={(value) => handleInputChange("contentControl", value)}
          />
        </View>
      </View>
      <View style={styles.item}>
        {/* Nút Lưu */}
        <TouchableOpacity
          style={[AppStyle.StyleCommon.button1, styles.btnInsert]}
          onPress={handleSave}
        >
          <Text style={styles.btnSaveText}>THAY ĐỔI LỊCH</Text>
        </TouchableOpacity>
      </View>
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
  },
  question: {
    fontSize: 14,
    lineHeight: 22,
    // marginBottom: 4,
  },
  input: {
    borderRadius: 2,
    borderColor: "#D9D9D9",
    borderWidth: 0,
    borderBottomWidth: 1,
    marginBottom: 17,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#DDDDDD",
  },
  closeButtonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  container3: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  column3: {
    width: "50%", // Chia đôi khoảng không gian cho mỗi cột
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  label3: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value3: {
    fontSize: 14,
    marginBottom: 5,
  },
  divider3: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    marginVertical: 10,
  },
  btnInsert: {
    padding: 10,
    backgroundColor: "#2DB7F5",
    color: "#FFFFFF",
    borderRadius: 5,
    width: "100%",
  },
  btnSaveText: {
    color: "#FFFFFF",
  },
});
export { EditCalendar };
