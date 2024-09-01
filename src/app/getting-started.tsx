import ThemeAwareLogo from "@/components/ThemeAwareLogo";
import { useAuthSession } from "@/hooks/useAuthSession";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { Button, HelperText, Text } from "react-native-paper";

export default function GettingStartedView() {
  const handleGoToAccountCreation = () => {
    router.push("/account-creation");
  };

  const handleGoToSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <ThemeAwareLogo style={{ width: 150, resizeMode: "contain" }} />
      <HelperText type="info">
        <Text>By tapping Sign in or Create account you agree to our </Text>
        <Text style={{ fontWeight: "bold" }}>Terms of Service</Text>
        <Text>. Learn how we process your data in our </Text>
        <Text style={{ fontWeight: "bold" }}>Privacy Policy</Text>
        <Text> and </Text>
        <Text style={{ fontWeight: "bold" }}>Cookies Policy</Text>
        <Text>.</Text>
      </HelperText>
      <Button
        mode="contained"
        style={{ width: "100%" }}
        onPress={handleGoToAccountCreation}
      >
        Create account
      </Button>
      <Button
        mode="outlined"
        style={{ width: "100%" }}
        onPress={handleGoToSignIn}
      >
        Sign in
      </Button>
    </View>
  );
}
