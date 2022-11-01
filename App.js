import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from "./src/screens/SignIn";
import LandingPage from "./src/screens/LandingPage";
import UserHome from "./src/screens/UserHome";
import Navigationbar from "./src/screens/Navigationbar";
import MyQr from "./src/screens/MyQr";
import FSignUp from "./src/screens/FSignUp";
import LSignUp from "./src/screens/LSignUp";
import PSelect from "./src/screens/PSelect";
import LocalPasengerProfiles from "./src/screens/LocalPasengerProfiles";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="LandingPage" 
            component={LandingPage}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="SignIn" 
            component={SignIn}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="UserHome" 
            component={UserHome}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="MyQr" 
            component={MyQr}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="FSignUp" 
            component={FSignUp}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="LSignUp" 
            component={LSignUp}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="PSelect" 
            component={PSelect}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="LocalPasengerProfiles" 
            component={LocalPasengerProfiles}
            options = {{
              headerShown: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
