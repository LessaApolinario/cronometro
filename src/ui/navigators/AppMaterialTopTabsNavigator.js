import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AppTabBar from '../components/AppTabBar';
import StopwatchPage from '../pages/StopwatchPage';
import TimerPage from '../pages/TimerPage';

const Tab = createMaterialTopTabNavigator();

export default function AppMaterialTopTabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="stopwatch"
      tabBar={(props) => <AppTabBar {...props} />}
    >
      <Tab.Screen name="stopwatch" component={StopwatchPage} />
      <Tab.Screen name="timer" component={TimerPage} />
    </Tab.Navigator>
  );
}
