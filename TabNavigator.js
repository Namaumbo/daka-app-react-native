// TabNavigator.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import News from './components/NewsComponent/NewsComponent';
import News from './pages/News/News';
import Settings from './pages/settings/Settings';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
