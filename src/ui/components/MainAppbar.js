import { Appbar, useTheme } from 'react-native-paper';

export default function MainAppbar() {
  const theme = useTheme();

  function goToTimerPage() {}

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.background }} statusBarHeight={40}>
      <Appbar.Content title="Cronômetro" color={theme.colors.text} />
      <Appbar.Action icon="clock" onPress={goToTimerPage} color={theme.colors.text} />
    </Appbar.Header>
  );
}
