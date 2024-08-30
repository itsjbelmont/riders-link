import React from "react";
import { SafeAreaView, Text } from "react-native";

export default function ProfileView() {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>This is the profile view</Text>
    </SafeAreaView>
  );
}
