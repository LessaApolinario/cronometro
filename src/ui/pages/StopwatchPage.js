import { StyleSheet, View } from 'react-native';

import { Text, useTheme } from 'react-native-paper';

import { useTimer } from '../hooks/useTimer';

import AppButton from '../components/AppButton';
import MainAppbar from '../components/MainAppbar';

export default function StopwatchPage() {
  const { togglePause, resetTimer, getFormattedTime, getStartButtonText } =
    useTimer();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <MainAppbar />

      <View style={styles.stopwatch}>
        <Text variant="displayLarge" style={{ color: theme.colors.background }}>
          {getFormattedTime()}
        </Text>

        <AppButton onPress={togglePause}>{getStartButtonText()}</AppButton>

        <AppButton onPress={resetTimer}>Resetar</AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stopwatch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    gap: 12.8,
  },
});
