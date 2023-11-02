import { Button, useTheme } from 'react-native-paper';

export default function AppButton({ children, onPress }) {
  const theme = useTheme();

  return (
    <Button
      mode="elevated"
      onPress={onPress}
      textColor={theme.colors.text}
      labelStyle={{ fontSize: 22, fontWeight: 'bold', paddingVertical: 10 }}
      style={{
        backgroundColor: theme.colors.background,
        width: '100%',
      }}
    >
      {children}
    </Button>
  );
}
