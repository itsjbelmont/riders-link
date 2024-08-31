import ThemeAwareLogo from "@/components/ThemeAwareLogo";
import { useAuthSession } from "@/hooks/useAuthSession";
import React, { useEffect, useState } from "react";
import { PixelRatio, View } from "react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";

export default function SignInView() {
  const { signIn } = useAuthSession();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);

  useEffect(() => {
    setLoginError(false);
  }, [userName, password, setLoginError]);

  const handleSignIn = () => {
    if (userName === "" || password === "") {
      setLoginError(true);
      return;
    }
    signIn(userName, password);
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
          <ThemeAwareLogo style={{ marginBottom: 12 }} />
          <TextInput
            label="Email / Username"
            value={userName}
            onChangeText={(text) => setUserName(text)}
            mode="outlined"
            style={{ marginBottom: 12, width: "100%" }} // Set width to 100% to match the container
            left={<TextInput.Icon icon="account" />}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{ marginBottom: 6, width: "100%" }} // Set width to 100% to match the container
            mode="outlined"
            left={<TextInput.Icon icon="lock" />}
            secureTextEntry
          />
          <HelperText type="info" style={{ marginBottom: 6 }}>
            Forgot your password?
          </HelperText>
          <Button
            mode="contained"
            onPress={handleSignIn}
            style={{ width: "50%" }}
          >
            Sign In
          </Button>
          <HelperText type="error" visible={loginError}>
            Username or password is incorrect.
          </HelperText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Don't have an account?</Text>
        <Button onPress={() => console.log("create account")}>
          Create account.
        </Button>
      </View>
    </View>
  );
}
