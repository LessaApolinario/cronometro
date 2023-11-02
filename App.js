import { PaperProvider } from 'react-native-paper';

import StopwatchPage from './src/ui/pages/StopwatchPage';

import theme from './src/ui/themes';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StopwatchPage />
    </PaperProvider>
  );
}
