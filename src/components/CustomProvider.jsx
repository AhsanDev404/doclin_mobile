import { View, Text } from "react-native";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import store from "../redux/store";
export default function CustomProvider({ children }) {
  return (
    <>
      <PaperProvider>
        <Provider store={store}>{children}</Provider>
      </PaperProvider>
    </>
  );
}
