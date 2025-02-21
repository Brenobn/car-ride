import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/home/home.jsx";
import Passenger from "./screens/passenger/passenger.jsx";

const Stack = createNativeStackNavigator();

function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="passenger" component={Passenger} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="home" component={Home} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;