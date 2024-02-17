import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import HomeScreen from "./Home/HomeScreen ";
import LogIn from "./LogIn/LogIn";
import SighUpOne from "./SignUp/SignUpOne";
import SighUpTwo from "./SignUp/SignUpTwo";
import SighUpThree from "./SignUp/SignUpThree";
import CalendarIndex from "./Calendar/CalendarIndex";
import CalendarForm from "./Calendar/CalendarForm";
import InforUserIndex from "./InforUser/InforUserIndex";
import InforUser from "./InforUser/InforUser";
import MedicineScreen from "./Medicine/Medicine";
import HistoryMedicine from "../components/medicine/HistoryMedicine";
import MedicineDetail from "../components/medicine/MedicineDetail";
import { EditCalendar } from "./Calendar/EditCalendar";
import GoBackComponent from "../components/goBack";
import ListNoti from "./Noti/Noti";
const Stack = createStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route }) => (
          <Header navigation={navigation} route={route} />
        ),
        headerRight: () => <GoBackComponent />,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ route }) => ({
          header: (props) => <Header {...props} route={"HomeScreen"} />,
          headerRight: () => <GoBackComponent />,
        })}
      />
      {/* <Stack.Screen name="MedicineScreen" component={MedicineScreen} /> */}
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CalendarIndex"
        component={CalendarIndex}
        options={({ route }) => ({
          header: (props) => <Header {...props} route={"CalendarIndex"} />,
          headerRight: () => <GoBackComponent navigation={navigation} />, // Sử dụng headerRight ở đây
        })}
      />
      <Stack.Screen
        name="CalendarForm"
        component={CalendarForm}
        options={({ route }) => ({
          header: (props) => <Header {...props} route={"CalendarIndex"} />,
        })}
      />
      <Stack.Screen
        name="InforUserIndex"
        component={InforUserIndex}
        options={({ route }) => ({
          header: (props) => <Header {...props} route={"InforUserIndex"} />,
        })}
      />
      <Stack.Screen
        name="InforUser"
        component={InforUser}
        options={({ route }) => ({
          header: (props) => <Header {...props} route={"InforUserIndex"} />,
        })}
      />
      <Stack.Screen
        name="MedicineScreen"
        component={MedicineScreen}
        options={({ route }) => ({
          header: (props) => <Header {...props} route={"MedicineScreen"} />,
        })}
      />
      <Stack.Screen
        name="MedicineDetail"
        component={MedicineDetail}
        options={({ route }) => ({
          header: (props) => <Header {...props} route={"MedicineDetail"} />,
        })}
      />
      <Stack.Screen
        name="EditCalendar"
        component={EditCalendar}
        options={({ route }) => ({
          header: (props) => <Header {...props} route={"EditCalendar"} />,
        })}
      />
        <Stack.Screen
        name="ListNoti"
        component={ListNoti}
        options={({ route }) => ({
          header: (props) => <Header {...props} route={"ListNoti"} />,
        })}
      />
      <Stack.Screen
        name="SighUpOne"
        component={SighUpOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SighUpTwo"
        component={SighUpTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SighUpThree"
        component={SighUpThree}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Screens;
