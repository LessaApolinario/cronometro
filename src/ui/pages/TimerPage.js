import { StyleSheet, View } from 'react-native';

import { Text } from 'react-native-paper';

import AppButton from '../components/AppButton';

import { useTimer } from '../hooks/useTimer';

export default function TimerPage() {
  const { togglePause, resetTimer, getFormattedTime, getStartButtonText } =
    useTimer();

  return (
    <View style={styles.container}>
      <Text variant="displayMedium" style={{ color: theme.colors.background }}>
        Temporizador
      </Text>

      <Text variant="displayLarge" style={{ color: theme.colors.background }}>
        {getFormattedTime()}
      </Text>

      <AppButton onPress={togglePause}>{getStartButtonText()}</AppButton>

      <AppButton onPress={resetTimer}>Resetar</AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    gap: 12.8,
  },
});
