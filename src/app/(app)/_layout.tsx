import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useAuthSession } from "@/hooks/useAuthSession";
import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native-paper";

export default function TabLayout() {
  const { session, isLoading } = useAuthSession();

  if (isLoading) {
    // TODO: Render splash screen until the session is authenticated
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/getting-started" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
