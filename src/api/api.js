import axios from "axios"
import { baseUrl } from "../untils/untils";
import AsyncStorageHelper from "../helper/AsyncStorageHelper";
export const getListExam  = ()=>{
    axios({
        method: 'get',
        url: `${baseUrl}/exams`,
      }).then((res) => {
        console.log(res.data);
      });
}
export const logIn = (payload)=>{
    axios({
        method: 'post',
        url: `${baseUrl}/loginPatient`,
        data: payload
      })
      .then((res) => {
        const userData = res.data; 
        AsyncStorageHelper.storeUserData(userData); // Lưu thông tin vào AsyncStorage
        console.log('Thông tin người dùng đã được lưu vào AsyncStorage.');
      })
      .catch((error) => {
        console.error(error);
      });
}
export const patientDetail = (payload)=>{
  axios({
    method: 'get',
    url: `${baseUrl}//patient/detail?idPatient=${payload}`,

  })
  .then((res) => {
    return res.data; 
  })
  .catch((error) => {
    console.error("error:", error);
    return null; // Trả về null nếu có lỗi
  });
}
export const listCalendar = (payload) => {
    return axios({
      method: "get",
      url: `${baseUrl}/exams/history?idPatient=${payload}`,
    })
    .then((res) => {
      return res.data; // Trả về dữ liệu từ yêu cầu Axios
    })
    .catch((error) => {
      console.error("error:", error);
      return null; // Trả về null nếu có lỗi
    });
  };
export const calendarDetail = (payload)=>{
  return axios({
    method: "get",
    url: `${baseUrl}/exams/detail?idExam=${payload}`,
  })
  .then((res) => {
    return res.data; // Trả về dữ liệu từ yêu cầu Axios
  })
  .catch((error) => {
    console.error("error", error);
    return null; // Trả về null nếu có lỗi
  });
}
export const insertCalendar = (payload)=>{
  return axios({
    method: "post",
    url: `${baseUrl}/exams/insert`,
    data:payload
  })
  .then((res) => {
    return res.data; // Trả về dữ liệu từ yêu cầu Axios
  })
  .catch((error) => {
    console.error("error", error);
    return null; // Trả về null nếu có lỗi
  });
}
export const updateCalendar = (payload)=>{
  return axios({
    method: "post",
    url: `${baseUrl}/updateExam`,
    data:payload
  })
  .then((res) => {
    return res.data; // Trả về dữ liệu từ yêu cầu Axios
  })
  .catch((error) => {
    console.error("error", error);
    return null; // Trả về null nếu có lỗi
  });
}
export const getHistoryMedicine = (payload)=>{
  return axios({
    method: "get",
    url: `${baseUrl}/exams/medicine/patient?idPatient=${payload}`,
  })
  .then((res) => {
    return res.data; // Trả về dữ liệu từ yêu cầu Axios
  })
  .catch((error) => {
    console.error("error", error);
    return null; // Trả về null nếu có lỗi
  });
} 
export const getHistoryExam = (payload)=>{
  return axios({
    method: "get",
    url: `${baseUrl}/exams/medicine?idExam=${payload}`,
  })
  .then((res) => {
    return res.data; // Trả về dữ liệu từ yêu cầu Axios
  })
  .catch((error) => {
    console.error("error", error);
    return null; // Trả về null nếu có lỗi
  });
}
export const deleteCalendar = (payload)=>{
  return axios({
    method: "post",
    url: `${baseUrl}/exams/deletedexam?idExam=${payload}`,
  })
  .then((res) => {
    return res.data; // Trả về dữ liệu từ yêu cầu Axios
  })
  .catch((error) => {
    console.error("error", error);
    return null; // Trả về null nếu có lỗi
  });
}
export const getListOperator = ()=>{
  return axios({
    method: "get",
    url: `${baseUrl}/users`,
  })
  .then((res) => {
    return res.data; 
  })
  .catch((error) => {
    console.error("error", error);
    return null; // Trả về null nếu có lỗi
  });
}
//patient
export const getPatientDetail = (payload)=>{
  return axios({
    method: "get",
    url: `${baseUrl}/patient/detail?idPatient=${payload}`,
  })
  .then((res) => {
    return res.data; 
  })
  .catch((error) => {
    console.error("error", error);
    return null; // Trả về null nếu có lỗi
  });
}
export const updatePatient = (payload)=>{
  return axios({
    method: "post",
    url: `${baseUrl}/updatePatient`,
    data:payload,
  })
  .then((res) => {
    return res.data; 
  })
  .catch((error) => {
    console.error("error", error);
    return null; // Trả về null nếu có lỗi
  });
}
export const getNoti= (payload)=>{
  return axios({
    method: "get",
    url: `${baseUrl}/exams/noti/patient?idPatient=${payload}`,
  })
  .then((res) => {
    return res.data; 
  })
  .catch((error) => {
    console.error("error", error);
    return null; // Trả về null nếu có lỗi
  });
}