import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Button } from "react-native-paper";

export default function SignInView() {
  const handleSignIn = () => {
    router.push("/");
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
      <Text>This is the sign-in view</Text>
      <Button mode="contained" onPress={handleSignIn}>
        Sign In
      </Button>
    </SafeAreaView>
  );
}
