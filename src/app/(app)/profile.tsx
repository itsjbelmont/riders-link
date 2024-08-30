import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Button } from "react-native-paper";

export default function ProfileView() {
  const handleSignOut = () => {
    router.push("/sign-in");
  };
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
      <Button mode="contained" onPress={handleSignOut}>
        Sign Out
      </Button>
    </SafeAreaView>
  );
}
