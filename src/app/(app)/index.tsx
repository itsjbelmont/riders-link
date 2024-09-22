import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';

export default function HomeView() {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>This is the home view</Text>
    </SafeAreaView>
  );
}
