import { StyleSheet, View } from 'react-native';

import { Button, useTheme } from 'react-native-paper';

import MainAppbar from '../components/MainAppbar';

export default function AppTabBar({
  state,
  descriptors,
  navigation,
  position,
}) {
  const theme = useTheme();

  const mappedRoutes = {
    stopwatch: 'Cronômetro',
    timer: 'Temporizador',
  };

  return (
    <View>
      <MainAppbar />

      <View style={styles.tabs}>
        {state.routes.map((route, index) => {
          const label = mappedRoutes[route.name] || route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const buttonRightWidthForOddPositions = index + (1 % 2) == 1 ? 3 : 0;

          return (
            <Button
              mode="outlined"
              textColor={theme.colors.background}
              labelStyle={styles.label}
              uppercase
              compact
              style={{
                flex: 1,
                backgroundColor: theme.colors.text,
                borderRadius: 0,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: buttonRightWidthForOddPositions,
                borderBottomWidth: 3,
                borderColor: theme.colors.background,
              }}
              onPress={onPress}
              onLongPress={onLongPress}
              key={index}
            >
              {label}
            </Button>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});
