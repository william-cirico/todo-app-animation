import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { SignInScreen } from './src/screens/SignInScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/themes';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <SignInScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
