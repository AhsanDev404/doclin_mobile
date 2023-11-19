import { View, Text } from "react-native";
import React from "react";
import { PaperProvider } from "react-native-paper";
export default function CustomProvider({ children }) {
  return (
    <>
      <PaperProvider>
        {children}
        </PaperProvider>
    </>
  );
}
