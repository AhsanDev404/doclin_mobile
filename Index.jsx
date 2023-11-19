import { View, Text, StatusBar } from "react-native";
import React from "react";
import MainNavigation from "./src/layouts/MainNavigation";

export default function Index() {
  return (
    <>
      <StatusBar />
      <MainNavigation />
    </>
  );
}
