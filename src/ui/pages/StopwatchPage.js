import { StyleSheet, View } from 'react-native';

import { Text, useTheme } from 'react-native-paper';

import { useStopwatch } from '../hooks/useStopwatch';

import AppButton from '../components/AppButton';

export default function StopwatchPage() {
  const { togglePause, resetStopwatch, getFormattedTime, getStartButtonText } =
    useStopwatch();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text variant="displayMedium" style={{ color: theme.colors.background }}>
        Cronômetro
      </Text>

      <Text variant="displayLarge" style={{ color: theme.colors.background }}>
        {getFormattedTime()}
      </Text>

      <AppButton onPress={togglePause}>{getStartButtonText()}</AppButton>

      <AppButton onPress={resetStopwatch}>Resetar</AppButton>
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
