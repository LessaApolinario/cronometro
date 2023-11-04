import { PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';

import theme from './src/ui/themes';

import AppMaterialTopTabsNavigator from './src/ui/navigators/AppMaterialTopTabsNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <AppMaterialTopTabsNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}
