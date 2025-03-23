// app/_layout.tsx
import React, { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (fontsLoaded) {
      timer = setTimeout(() => {
        SplashScreen.hideAsync();
      }, 2000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
