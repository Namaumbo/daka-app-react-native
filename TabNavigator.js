import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import News from "./pages/News/News";
import Settings from "./pages/settings/Settings";
import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="News"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="filetext1" color={color} size={size} />
          ),
        }}
        component={News}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="setting" color={color} size={size} />
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};


export default TabNavigator;
