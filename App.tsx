import React from "react";
import { StatusBar } from "react-native";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Home } from "./src/screens/home";

export default function App() {
  const [fontsLoaded] = useFonts({
    InterRegular: Inter_400Regular,
    InterBold: Inter_700Bold,
  });

  if (!fontsLoaded) return <></>;

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Home />
    </>
  );
}
