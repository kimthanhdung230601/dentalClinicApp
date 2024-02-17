// import { Button } from "antd-mobile";
// import React, { useEffect, useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   ImageBackground,
//   Image,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getPatientDetail, updatePatient } from "../../api/api";

// const InforUser = () => {
//   // const isFocused = useIsFocused();
//   //lấy idPatient
//   const [parsedData, setParsedData] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userData = await AsyncStorage.getItem("userData");
//         if (userData !== null) {
//           const parsedUserData = JSON.parse(userData);
//           setParsedData(parsedUserData);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);
//   //detail
//   const [editedData, setEditedData] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await getPatientDetail(parsedData?.idPatient);
//         setEditedData(res);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, [parsedData?.idPatient]);
//   //edit

//   const handleInputChange = (field, value) => {
//     setEditedData({
//       ...editedData,
//       [field]: value,
//     });
//   };
//   // Hàm xử lý khi người dùng nhấn nút "Lưu"
//   const handleSaveChanges = async () => {
//     const payload = {
//       idPatient: parsedData?.idPatient,
//       phoneNumber: editedData?.phoneNumber || parsedData?.phoneNumber,
//       patientName: editedData?.patientName || parsedData?.patientName,
//       patientGmail: editedData?.patientGmail || parsedData?.patientGmail,
//       patientDate: editedData?.patientDate || parsedData?.patientDate,
//       patientSex: editedData?.patientSex || parsedData?.patientSex,
//       patientAddress: editedData?.patientAddress || parsedData?.patientAddress,
//     };
//     const res = await updatePatient(payload);
//     console.log(res);
//     alert("Cập nhật thành công");
//     //  console.log("payload",payload);
//     try {
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <View>
//       <View style={styles.container}>
//         <Text style={styles.question}>Họ tên</Text>
//         <TextInput
//           style={styles.input}
//           defaultValue={editedData?.patientName}
//           onChangeText={(value) => handleInputChange("patientName", value)}
//         />
//         <Text style={styles.question}>Số điện thoại</Text>
//         <TextInput
//           style={styles.input}
//           defaultValue={editedData?.phoneNumber}
//           onChangeText={(value) => handleInputChange("phoneNumber", value)}
//         />
//         <Text style={styles.question}>Địa chỉ liên hệ</Text>
//         <TextInput
//           style={styles.input}
//           defaultValue={editedData?.patientAddress}
//           onChangeText={(value) => handleInputChange("patientAddress", value)}
//         />
//         <Text style={styles.question}>Giới tính</Text>
//         <TextInput
//           style={styles.input}
//           defaultValue={editedData?.patientSex}
//           onChangeText={(value) => handleInputChange("patientSex", value)}
//         />
//         <Text style={styles.question}>Ngày sinh</Text>
//         <TextInput
//           style={styles.input}
//           defaultValue={editedData?.patientDate}
//           onChangeText={(value) => handleInputChange("patientDate", value)}
//         />
//         <Text style={styles.question}>Gmail</Text>
//         <TextInput
//           style={styles.input}
//           defaultValue={editedData?.patientGmail}
//           onChangeText={(value) => handleInputChange("patientGmail", value)}
//         />
//       </View>
//       <View>
//         <Button style={styles.buttonText} onClick={handleSaveChanges}>
//           Lưu thay đổi
//         </Button>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     //   flex: 1,
//     backgroundColor: "#fff",
//     margin: 10,
//     borderRadius: 8,
//     padding: 10,
//     paddingBottom: 40,
//   },
//   block: {
//     // display: "flex",
//   },
//   buttonText: {
//     padding: 10,
//     backgroundColor: "#2DB7F5",
//     color: "#FFFFFF",
//     borderRadius: 5,
//   },
//   question: {
//     fontSize: 14,
//     lineHeight: 22,
//     marginBottom: 4,
//     color: " rgba(82, 82, 108, 0.90)",
//   },
//   input: {
//     borderRadius: 2,
//     borderColor: "#D9D9D9",
//     borderWidth: 1,
//     height: 32,
//     marginBottom: 14,
//     borderWidth: 0,
//     borderBottomWidth: 1,
//   },
// });
// export default InforUser;
// import { Button } from "antd-mobile";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPatientDetail, updatePatient } from "../../api/api";

const InforUser = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.question}>Họ tên</Text>
        <TextInput style={styles.input} defaultValue="Vi Vi" />
        <Text style={styles.question}>Số điện thoại</Text>
        <TextInput style={styles.input} defaultValue="1232456" />
        <Text style={styles.question}>Địa chỉ liên hệ</Text>
        <TextInput style={styles.input} defaultValue="Hà Nội" />
        <Text style={styles.question}>Giới tính</Text>
        <TextInput style={styles.input} defaultValue="Nữ" />
        <Text style={styles.question}>Ngày sinh</Text>
        <TextInput style={styles.input} defaultValue="1995-10-08" />
        <Text style={styles.question}>Gmail</Text>
        <TextInput style={styles.input} defaultValue="ViVi@gmail.com" />
      </View>
      <View>
        <Button title="Lưu thay đổi" style={styles.buttonText}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 8,
    padding: 10,
    paddingBottom: 40,
  },
  block: {
    // display: "flex",
  },
  buttonText: {
    padding: 10,
    backgroundColor: "#2DB7F5",
    color: "#FFFFFF",
    borderRadius: 5,
  },
  question: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 4,
    color: " rgba(82, 82, 108, 0.90)",
  },
  input: {
    borderRadius: 2,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    height: 32,
    marginBottom: 14,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
});
export default InforUser;
