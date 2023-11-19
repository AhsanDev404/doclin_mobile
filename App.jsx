import React from "react";
import Index from "./Index";
import CustomProvider from "./src/components/CustomProvider";

export default function App() {
  return (
    <>
      <CustomProvider>
        <Index />
      </CustomProvider>
    </>
  );
}
