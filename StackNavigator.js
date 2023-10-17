
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./components/welcome/Welcome";
import Settings from "./pages/settings/Settings";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";



const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      /> 
    
       {/* <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: true }}
      /> */}
      
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false}}
      ></Stack.Screen> 

    </Stack.Navigator>
  );
};

export default StackNavigator;
