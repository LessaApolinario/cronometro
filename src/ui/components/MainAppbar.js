import { Appbar, useTheme } from 'react-native-paper';

export default function MainAppbar() {
  const theme = useTheme();

  return (
    <Appbar.Header
      style={{ backgroundColor: theme.colors.background }}
      statusBarHeight={40}
    >
      <Appbar.Content title="Home" color={theme.colors.text} />
    </Appbar.Header>
  );
}
