import { useAuthSession } from "@/hooks/useAuthSession";
import React, { useState } from "react";
import { View } from "react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";

export default function SignInView() {
  const { signIn } = useAuthSession();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = () => {
    signIn(userName, password);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ width: "80%", maxWidth: 400 }}>
        <HelperText type="info">Sign in or create an account.</HelperText>
        <TextInput
          label="Username/Email"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          style={{ marginBottom: 16 }}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{ marginBottom: 16 }}
          secureTextEntry
        />
        <Button mode="contained" onPress={handleSignIn}>
          Sign In
        </Button>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Don't have an account?</Text>
        <Button onPress={() => console.log("create account")}>
          Create account.
        </Button>
      </View>
    </View>
  );
}
