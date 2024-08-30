import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { AuthSessionProvider } from "../wrappers/AuthSessionProvider";

export default function RootLayout() {
  return (
    <AuthSessionProvider>
      <PaperProvider>
        <Stack>
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
          <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </AuthSessionProvider>
  );
}
