import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeView() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,
      }}
    >
      <Text>This is the home view</Text>
    </View>
  );
}
