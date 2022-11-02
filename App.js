import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from "./src/screens/SignIn";
import LandingPage from "./src/screens/LandingPage";
import FUserHome from "./src/screens/ForeignPassenger/FUserHome";
import LUserHome from "./src/screens/LocalPassenger/LUserHome";
import MyQr from "./src/screens/MyQr";
import FMyQr from "./src/screens/ForeignPassenger/FMyQr";
import LMyQr from "./src/screens/LocalPassenger/LMyQr";
import FSignUp from "./src/screens/ForeignPassenger/FSignUp";
import LSignUp from "./src/screens/LocalPassenger/LSignUp";
import PSelect from "./src/screens/PSelect";
import LocalPasengerProfiles from "./src/screens/LocalPassenger/LocalPasengerProfiles";
import Travelhistory from "./src/screens/Travelhistory";
import FTravelhistory from "./src/screens/ForeignPassenger/FTravelhistory";
import LTravelhistory from "./src/screens/LocalPassenger/LTravelhistory";
import LocalPasengerUpdate from "./src/screens/LocalPassenger/LocalPasengerUpdate";
import ForignPassengerProfile from "./src/screens/ForeignPassenger/ForignPassengerProfile";
import ForignPassengerUpdate from "./src/screens/ForeignPassenger/ForignPassengerUpdate";
import Alltravelhistory from "./src/screens/Alltravelhistory";
import Credits from "./src/screens/Credits";
import Payment from "./src/screens/Payment";

import Driverdashboard from "./src/screens/Driver/Driverdashboard";
import Driverprofiles from "./src/screens/Driver/Driverprofiles";
import UpdateDriverProfile from "./src/screens/Driver/UpdateDriverProfile";
import BusProfiles from "./src/screens/Driver/BusProfiles";
import DriverQRScanner from "./src/screens/Driver/DriverQRScanner";
import PassengerGetOnScreen from "./src/screens/Driver/PassengerGetOnScreen";

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
            name="LMyQr" 
            component={LMyQr}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="FMyQr" 
            component={FMyQr}
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
            name="FTravelhistory" 
            component={FTravelhistory}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="LTravelhistory" 
            component={LTravelhistory}
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
          <Stack.Screen 
            name="Driverdashboard" 
            component={Driverdashboard}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="Driverprofiles" 
            component={Driverprofiles}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="UpdateDriverProfile" 
            component={UpdateDriverProfile}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen 
            name="BusProfiles" 
            component={BusProfiles}
            options = {{
              headerShown: false,
          }} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="DriverQRScanner"
            component={DriverQRScanner}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="PassengerGetOnScreen"
            component={PassengerGetOnScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Alltravelhistory"
            component={Alltravelhistory}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Credits"
            component={Credits}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Payment"
            component={Payment}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
