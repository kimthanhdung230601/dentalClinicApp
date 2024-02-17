// import React, { useEffect, useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { calendarDetail, deleteCalendar } from "../../api/api";
// import { useNavigation } from "@react-navigation/native";
// import AppStyle from "../../theme";
// function ExamDetail({ idExam, calendar }) {
//   const navigation = useNavigation();
//   console.log("calendar", calendar.dateString);
//   const [data, setData] = useState();
//   const [showButtons, setShowButtons] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await calendarDetail(idExam);
//         console.log(res);
//         setData(res);
//       } catch (error) {
//         console.log("error:", error);
//       }
//     };
//     fetchData();
//   }, [idExam]);
//   //show button
//   useEffect(() => {
//     if (calendar?.dateString) {
//       const currentDate = new Date();
//       const selectedDate = new Date(calendar.dateString);
//       if (selectedDate >= currentDate) {
//         setShowButtons(true);
//       } else {
//         setShowButtons(false);
//       }
//     }
//   }, [calendar]);
//   const nevigateToEdit = () => {
//     navigation.navigate(
//       "EditCalendar",
//       { idExam, calendar }
//     );
//   };
//     //delete calendar
//     const handleDaleteCalendar = async () => {
//       try {
//         const payload = idExam;
//         const res = await deleteCalendar(idExam);
//         console.log(res);
//         alert("xóa lịch thành công")
//         navigation.goBack();
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//   return (
//     <>
//       <View style={styles.container}>
//         <Text style={styles.title}>Nội dung khám bệnh</Text>
//         <Text style={styles.item}>
//           <Text style={styles.label}>Số thứ tự:</Text> {data?.numericalOrder}
//         </Text>
//         <Text style={styles.item}>
//           <Text style={styles.label}>Tình trạng khám:</Text> {data?.statusExam}
//         </Text>
//         <Text style={styles.item}>
//           <Text style={styles.label}>Nội dung khám:</Text>{" "}
//           {data?.contentControl}
//         </Text>
//         <Text style={styles.item}>
//           <Text style={styles.label}>Phương pháp chữa trị:</Text>{" "}
//           {data?.control}
//         </Text>
//         <Text style={styles.item}>
//           <Text style={styles.label}>Bác sĩ phụ trách:</Text>{" "}
//           {data?.operatorName}
//         </Text>
//         {showButtons && (
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={[AppStyle.StyleCommon.button1, styles.button]}
//               onPress={nevigateToEdit}
//             >
//               <Text style={styles.buttonText}>Sửa</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[AppStyle.StyleCommon.buttonDanger, styles.button]}
//               onPress={handleDaleteCalendar}
//             >
//               <Text style={styles.buttonText}>Xóa</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     margin: 10,
//     borderRadius: 8,
//     padding: 10,
//     display: "flex",
//   },
//   title: {
//     textAlign: "center",
//     fontWeight: "bold",
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   item: {
//     marginBottom: 5,
//   },
//   label: {
//     fontWeight: "bold",
//   },
//   button: {
//     padding: 10,
//     // backgroundColor: "#2DB7F5",
//     color: "#FFFFFF",
//     borderRadius: 5,
//     width: "100%",
//     margin:"10px",

//   },
//   buttonText: {
//     color: "#FFFF",
//   },
// });
// export default ExamDetail;
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { calendarDetail, deleteCalendar } from "../../api/api";
import { useNavigation } from "@react-navigation/native";
import AppStyle from "../../theme";
function ExamDetail({ idExam, calendar }) {
  const navigation = useNavigation();
  console.log("calendar", calendar.dateString);
  const [data, setData] = useState({
    numericalOrder: 123,
    statusExam: "Thành công",
    contentControl: "Đau răng",
    control: "Nha khoa tổng quát ",
    operatorName: "Nguyễn Văn A",
  });
  const [showButtons, setShowButtons] = useState(false);

  // Show button
  useEffect(() => {
    if (calendar?.dateString) {
      const currentDate = new Date();
      const selectedDate = new Date(calendar.dateString);
      if (selectedDate >= currentDate) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    }
  }, [calendar]);

  const navigateToEdit = () => {
    navigation.navigate("EditCalendar", { idExam, calendar });
  };

  // Delete calendar
  const handleDeleteCalendar = async () => {
    alert("Xóa lịch thành công");
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Nội dung khám bệnh</Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Số thứ tự:</Text> {data.numericalOrder}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Tình trạng khám:</Text> {data.statusExam}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Nội dung khám:</Text> {data.contentControl}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Phương pháp chữa trị:</Text> {data.control}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Bác sĩ phụ trách:</Text> {data.operatorName}
        </Text>
        {showButtons && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[AppStyle.StyleCommon.button1, styles.button]}
              onPress={navigateToEdit}
            >
              <Text style={styles.buttonText}>Sửa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[AppStyle.StyleCommon.buttonDanger, styles.button]}
              onPress={handleDeleteCalendar}
            >
              <Text style={styles.buttonText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 8,
    padding: 10,
    display: "flex",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  item: {
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    // backgroundColor: "#2DB7F5",
    color: "#FFFFFF",
    borderRadius: 5,
    width: "100%",
    margin: "10px",
  },
  buttonText: {
    color: "#FFFF",
  },
});
export default ExamDetail;
