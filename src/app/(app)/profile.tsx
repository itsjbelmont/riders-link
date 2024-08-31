import { useAuthSession } from "@/hooks/useAuthSession";
import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Text } from "react-native-paper";

export default function ProfileView() {
  const { signOut } = useAuthSession();

  const handleSignOut = () => {
    signOut();
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
