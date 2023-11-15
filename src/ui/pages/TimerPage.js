 import { StyleSheet, View } from 'react-native';

import { Text, TextInput, useTheme } from 'react-native-paper';

import AppButton from '../components/AppButton';

import { useTimer } from '../hooks/useTimer';

export default function TimerPage() {
  const {
    isPaused,
    seconds,
    minutes,
    hours,
    setSeconds,
    setMinutes,
    setHours,
    togglePause,
    resetTimer,
    getStartButtonText,
  } = useTimer();
  const theme = useTheme();

  function startTimer() {
    const isSecondsEmpty = seconds === '00';
    const isMinutesEmpty = minutes == '00';
    const isHoursEmpty = hours === '00';

    const areAllFieldsEmpty = isSecondsEmpty && isMinutesEmpty && isHoursEmpty;

    if (isPaused && areAllFieldsEmpty) {
      return;
    }

    togglePause();
  }

  return (
    <View style={styles.container}>
      <Text variant="displayMedium" style={{ color: theme.colors.background }}>
        Temporizador
      </Text>

      <View style={styles.fields}>
        <TextInput
          type="outlined"
          label="Horas"
          style={styles.field}
          value={hours}
          onChangeText={(text) => setHours(text)}
        />
        <Text variant="displayLarge" style={{ color: theme.colors.background }}>
          :
        </Text>
        <TextInput
          type="outlined"
          label="Minutos"
          style={styles.field}
          value={minutes}
          onChangeText={(text) => setMinutes(text)}
        />
        <Text variant="displayLarge" style={{ color: theme.colors.background }}>
          :
        </Text>
        <TextInput
          type="outlined"
          label="Segundos"
          style={styles.field}
          value={seconds}
          onChangeText={(text) => setSeconds(text)}
        />
      </View>

      <AppButton onPress={startTimer}>{getStartButtonText()}</AppButton>

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
  fields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  field: {
    color: '#1E2022',
    backgroundColor: '#F0F5F9',
  },
});
