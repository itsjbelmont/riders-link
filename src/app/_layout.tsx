import { Stack } from 'expo-router';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import { AuthSessionProvider } from '../wrappers/AuthSessionProvider';
import { useColorScheme } from 'react-native';
import { lightThemeColors } from '@/constants/theming/light-theme-colors';
import { darkThemeColors } from '@/constants/theming/dark-theme-colors';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  ThemeProvider,
} from '@react-navigation/native';
import merge from 'deepmerge';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationLightTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const customLightTheme = {
  ...MD3LightTheme,
  colors: lightThemeColors,
};

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: darkThemeColors,
};

const appliedDarkTheme = merge(DarkTheme, customDarkTheme);
const appliedLightTheme = merge(LightTheme, customLightTheme);

export default function RootLayout() {
  const systemColorScheme = useColorScheme();

  const paperTheme = systemColorScheme === 'dark' ? appliedDarkTheme : appliedLightTheme;
  return (
    <AuthSessionProvider>
      <PaperProvider theme={paperTheme}>
        <ThemeProvider value={paperTheme}>
          <Stack>
            <Stack.Screen name="(app)" options={{ headerShown: false }} />
            <Stack.Screen name="sign-in" options={{ headerShown: false }} />
            <Stack.Screen name="account-creation" options={{ headerShown: false }} />
            <Stack.Screen name="getting-started" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </PaperProvider>
    </AuthSessionProvider>
  );
}
