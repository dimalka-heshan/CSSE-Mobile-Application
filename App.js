import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from "./src/screens/SignIn";
import LandingPage from "./src/screens/LandingPage";
import FUserHome from "./src/screens/ForeignPassenger/FUserHome";
import LUserHome from "./src/screens/LocalPassenger/LUserHome";
import MyQr from "./src/screens/MyQr";
import FSignUp from "./src/screens/ForeignPassenger/FSignUp";
import LSignUp from "./src/screens/LocalPassenger/LSignUp";
import PSelect from "./src/screens/PSelect";
import LocalPasengerProfiles from "./src/screens/LocalPassenger/LocalPasengerProfiles";
import Travelhistory from "./src/screens/Travelhistory";
import LocalPasengerUpdate from "./src/screens/LocalPassenger/LocalPasengerUpdate";
import ForignPassengerProfile from "./src/screens/ForeignPassenger/ForignPassengerProfile";
import ForignPassengerUpdate from "./src/screens/ForeignPassenger/ForignPassengerUpdate";

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
            name="LUserHome" 
            component={LUserHome}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="FUserHome" 
            component={FUserHome}
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
          <Stack.Screen 
            name="Travelhistory" 
            component={Travelhistory}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="LocalPasengerUpdate" 
            component={LocalPasengerUpdate}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="ForignPassengerProfile" 
            component={ForignPassengerProfile}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="ForignPassengerUpdate" 
            component={ForignPassengerUpdate}
            options = {{
              headerShown: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
