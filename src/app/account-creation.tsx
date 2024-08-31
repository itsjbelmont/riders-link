import { useAuthSession } from "@/hooks/useAuthSession";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function AccountCreationView() {
  const { signIn } = useAuthSession();

  const handleAccountCreation = () => {
    // TODO: Handle api calls for account creation then sign the user in
    signIn("TEMP_USER", "TEMP_PASSWORD");
  };

  const handleGoBackToSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 32,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: "80%",
            maxWidth: 400,
            alignItems: "center", // Center content horizontally
            justifyContent: "center", // Center content vertically
          }}
        >
          <Text>This is the account creation view</Text>
          <Button mode="contained" onPress={handleAccountCreation}>
            Create Account.
          </Button>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Already have an account?</Text>
        <Button onPress={handleGoBackToSignIn}>Sign In.</Button>
      </View>
    </View>
  );
}
