// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   TouchableHighlight,
//   Modal,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// import AppStyle from "../../theme";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import RNPickerSelect from "react-native-picker-select";
// import { getListOperator, insertCalendar } from "../../api/api";
// import { options } from "../../untils/untils";
// import { useNavigation } from "@react-navigation/native";

// // import { Modal } from "antd-mobile";

// const UserInfoIndicator = ({ currentPage }) => {
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
//   return (
//     <View style={styles.container}>
//       <Text style={styles.question}>Họ tên </Text>
//       <TextInput style={styles.input} defaultValue={parsedData?.patientName} />
//       <Text style={styles.question}>Số điện thoại</Text>
//       <TextInput style={styles.input} defaultValue={parsedData?.phoneNumber} />
//       <Text style={styles.question}>Địa chỉ liên hệ</Text>
//       <TextInput
//         style={styles.input}
//         defaultValue={parsedData?.patientAddress}
//       />
//       <Text style={styles.question}>Giới tính</Text>
//       <TextInput style={styles.input} defaultValue={parsedData?.patientSex} />
//       <Text style={styles.question}>Ngày sinh</Text>
//       <TextInput style={styles.input} defaultValue={parsedData?.patientDate} />
//     </View>
//   );
// };
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
//         // console.log("res", res);
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
   
//       <Modal
//         // style={styles.modalWrap}
//         animationType="slide"
//         // transparent={false}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(false);
//         }}
//       >
//         <View style={styles.modalContainer2}>
//           <Text style={styles.modalTitle}>Chọn nha sĩ</Text>
//           <FlatList
//             data={doctors}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.idOperator.toString()}
//           />
//           <TouchableHighlight
//             style={styles.closeButton}
//             onPress={() => {
//               setModalVisible(!modalVisible);
//             }}
//           >
//             <Text style={styles.closeButtonText}>Đóng</Text>
//           </TouchableHighlight>
//         </View>
//       </Modal>

//   );
// };

// const ContentIndicator = ({
//   currentPage,
//   setContent,
//   setSelectedDoctor,
//   setSelectedValue,
//   content,
//   selectedDoctor,
//   selectedValue,
// }) => {
//   const [modalVisible, setModalVisible] = useState(false);
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
//           onValueChange={(value) => setSelectedValue(value)}
//           value={selectedValue}
//           style={pickerSelectStyles}
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
//               {selectedDoctor ? selectedDoctor.operatorName : "Chọn nha sĩ"}
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
//             onChangeText={(value) => setContent(value)} // Thay đổi từ onValueChange thành onChangeText
//             value={content}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const CheckInfoIndicator = ({
//   currentPage,
//   content,
//   selectedDoctor,
//   selectedValue,
//   calendar,
// }) => {
//   const [parsedData, setParsedData] = useState(null);
//   console.log("selectedDoctor", selectedDoctor);
//   console.log("content", content);
//   console.log("selectedValue", selectedValue);
//   console.log("calendar", calendar.dateString);
//   const navigation = useNavigation();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userData = await AsyncStorage.getItem("userData");
//         if (userData !== null) {
//           const parsedUserData = JSON.parse(userData);
//           console.log(parsedUserData.patientName);
//           setParsedData(parsedUserData);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);
//   const handleInsert = async () => {
//     try {
//       const payload = {
//         idOperator: selectedDoctor.idOperator,
//         controlDate: calendar.dateString,
//         idPatient: parsedData.idPatient,
//         typeCalendar: 0,
//         control: selectedValue,
//         contentControl: content,
//       };
//       console.log(payload);
//       const res = await insertCalendar(payload);
//       console.log("res", res);
//       alert("Đặt lịch thành công");
//       navigation.goBack();
//     } catch (error) {
//       console.log(error);
//       alert("Đặt lịch thất bại");
//     }
//   };
//   return (
//     <View style={styles.container3}>
//       <View style={styles.column3}>
//         <Text style={styles.label3}>Ngày khám:</Text>
//         <Text style={styles.label3}>Loại hình khám:</Text>
//         <Text style={styles.label3}>Nha sĩ phụ trách:</Text>{" "}
//         <Text style={styles.label3}>Thông tin liên hệ:</Text>
//         <Text style={styles.label3}>Nội dung:</Text>
//       </View>
//       <View style={styles.column3}>
//         <Text style={styles.value3}>{calendar.dateString}</Text>
//         <Text style={styles.value3}>{selectedValue}</Text>
//         <Text style={styles.value3}>{selectedDoctor?.operatorName}</Text>
//         <Text style={styles.value3}>{selectedDoctor?.phoneNumber}</Text>
//         <Text style={styles.value3}>{content}</Text>
//       </View>
//       <View style={styles.divider3} />
//       <TouchableOpacity
//         onPress={handleInsert}
//         style={[AppStyle.StyleCommon.button1, styles.button]}
//       >
//         <Text style={styles.btnInsert}>Đặt lịch</Text>{" "}
//       </TouchableOpacity>{" "}
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
//   modalContainer1:{
//     opacity:0.7
//   },
//   modalContainer2: {
//     // flex: 1,
//     // alignItems: "center",
//     // justifyContent: "center",
//     padding:"5%"
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 15,
//     marginLeft:"40%",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   closeButton: {
//     marginTop: 5,
//     padding: 10,
//     backgroundColor: "#2db7f5",
//   },
//   closeButtonText: {
//     textAlign: "center",
//     fontWeight: "bold",
//     color: "#FFF",
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
//   button: {
//     paddingLeft: "45%",
//     color: "#FFFFFF",
//     borderRadius: 5,
//     width: "100%",
//     textAlign: "center",
//   },
// });
// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 4,
//     color: "black",
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
//   inputAndroid: {
//     fontSize: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderWidth: 0.5,
//     borderColor: "purple",
//     borderRadius: 8,
//     color: "black",
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
// });
// export { UserInfoIndicator, ContentIndicator, CheckInfoIndicator };

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableHighlight,
  Modal,
  Button,
  TouchableOpacity,
} from "react-native";
import AppStyle from "../../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from "react-native-picker-select";
import { getListOperator, insertCalendar } from "../../api/api";
import { options } from "../../untils/untils";
import { useNavigation } from "@react-navigation/native";

// import { Modal } from "antd-mobile";

const UserInfoIndicator = ({ currentPage }) => {
  const hardcodedData = {
    patientName: 'Vi Vi',
    phoneNumber: '09710456486',
    patientAddress: 'Hà Đông, Hà Nội',
    patientSex: 'Nữ',
    patientDate: '1998-05-03',
  };
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Họ tên </Text>
      <TextInput style={styles.input} defaultValue={hardcodedData.patientName} />
      <Text style={styles.question}>Số điện thoại</Text>
      <TextInput style={styles.input} defaultValue={hardcodedData.phoneNumber} />
      <Text style={styles.question}>Địa chỉ liên hệ</Text>
      <TextInput style={styles.input} defaultValue={hardcodedData.patientAddress} />
      <Text style={styles.question}>Giới tính</Text>
      <TextInput style={styles.input} defaultValue={hardcodedData.patientSex} />
      <Text style={styles.question}>Ngày sinh</Text>
      <TextInput style={styles.input} defaultValue={hardcodedData.patientDate} />
    </View>
  );
};
const DoctorListModal = ({
  modalVisible,
  setModalVisible,
  setSelectedDoctor,
}) => {
  const hardcodedDoctors = [
    {
      idOperator: 1,
      operatorName: 'Nguyễn Văn A',
      phoneNumber: '09710609904',
    },
    {
      idOperator: 2,
      operatorName: 'Thuận Bình',
      phoneNumber: '012345678',
    },
    {
      idOperator: 3,
      operatorName: 'Lý Đào',
      phoneNumber: '09711234686',
    },
    {
      idOperator: 4,
      operatorName: 'Nguyễn Châu Anh',
      phoneNumber: '0471056987',
    },
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
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalContainer2}>
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


const ContentIndicator = ({
  currentPage,
  setContent,
  setSelectedDoctor,
  setSelectedValue,
  content,
  selectedDoctor,
  selectedValue,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
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
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
          style={pickerSelectStyles}
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
              {selectedDoctor ? selectedDoctor.operatorName : "Chọn nha sĩ"}
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
            onChangeText={(value) => setContent(value)} // Thay đổi từ onValueChange thành onChangeText
            value={content}
          />
        </View>
      </View>
    </View>
  );
};

const CheckInfoIndicator = ({
  currentPage,
  content,
  selectedDoctor,
  selectedValue,
  calendar,
}) => {
  const [parsedData, setParsedData] = useState(null);
  console.log("selectedDoctor", selectedDoctor);
  console.log("content", content);
  console.log("selectedValue", selectedValue);
  console.log("calendar", calendar.dateString);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData !== null) {
          const parsedUserData = JSON.parse(userData);
          console.log(parsedUserData.patientName);
          setParsedData(parsedUserData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const handleInsert = async () => {
    alert("Đặt lịch thành công");
    navigation.goBack();
  };
  return (
    <View style={styles.container3}>
      <View style={styles.column3}>
        <Text style={styles.label3}>Ngày khám:</Text>
        <Text style={styles.label3}>Loại hình khám:</Text>
        <Text style={styles.label3}>Nha sĩ phụ trách:</Text>{" "}
        <Text style={styles.label3}>Thông tin liên hệ:</Text>
        <Text style={styles.label3}>Nội dung:</Text>
      </View>
      <View style={styles.column3}>
        <Text style={styles.value3}>{calendar.dateString}</Text>
        <Text style={styles.value3}>{selectedValue}</Text>
        <Text style={styles.value3}>{selectedDoctor?.operatorName}</Text>
        <Text style={styles.value3}>{selectedDoctor?.phoneNumber}</Text>
        <Text style={styles.value3}>{content}</Text>
      </View>
      <View style={styles.divider3} />
      <TouchableOpacity
        onPress={handleInsert}
        style={[AppStyle.StyleCommon.button1, styles.button]}
      >
        <Text style={styles.btnInsert}>Đặt lịch</Text>{" "}
      </TouchableOpacity>{" "}
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
  modalContainer1: {
    opacity: 0.7,
  },
  modalContainer2: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    padding: "5%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    marginLeft: "40%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  closeButton: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "#2db7f5",
  },
  closeButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFF",
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
  button: {
    paddingLeft: "45%",
    color: "#FFFFFF",
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export { UserInfoIndicator, ContentIndicator, CheckInfoIndicator };
