
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screens from "./src/screen/Layout";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Screens/>
    </NavigationContainer>
  );
}

export default App;
