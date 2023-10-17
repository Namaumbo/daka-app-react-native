import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import News from "./pages/News/News";
import Settings from "./pages/settings/Settings";
import Icon from "react-native-vector-icons/AntDesign";
import LandingHome from "./pages/LandingHome/LandingHome";
import ExploreSpacePage from "./pages/ExploreSpace/ExploreSpacePage";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        component={LandingHome}
      />
      <Tab.Screen
        name="News"
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color, size }) => (
            <Icon name="filetext1" color={color} size={size} />
          ),
        }}
        component={News}
      />
      <Tab.Screen
        name="Space"
        options={{
          tabBarLabel: "Space",
          tabBarIcon: ({ color, size }) => (
            <Icon name="earth" color={color} size={size} />
          ),
        }}
        component={ExploreSpacePage}
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
