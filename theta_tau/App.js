import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./pages/homepage.jsx";
import Brothers from "./pages/brothers.jsx";
import Calender from "./pages/calender.jsx";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Brothers" component={Brothers} />
        <Stack.Screen name="Calender" component={Calender} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
