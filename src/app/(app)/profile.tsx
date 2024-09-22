import { useAuthSession } from '@/hooks/useAuthSession';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileView() {
  const { signOut } = useAuthSession();
  const insets = useSafeAreaInsets();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>This is the profile view</Text>
      <Button mode="contained" onPress={handleSignOut}>
        Sign Out
      </Button>
    </View>
  );
}
