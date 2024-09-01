import ThemeAwareLogo from "@/components/ThemeAwareLogo";
import { router } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
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
        padding: 50,
      }}
    >
      <View style={{ width: "40%", marginBottom: 20 }}>
        <ThemeAwareLogo />
      </View>

      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        <Image
          style={{
            resizeMode: "contain",
            flex: 1,
            aspectRatio: 3 / 4,
            borderRadius: 20,
          }}
          source={require("@/../assets/images/photography/GettingStartedImage.png")}
        />
      </View>

      <HelperText type="info" style={{ marginBottom: 12 }}>
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
        style={{ width: "100%", marginBottom: 12 }}
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
