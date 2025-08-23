import React from 'react';
import { StyleSheet, ImageBackground, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenBackground from '../../assets/images/icons/ScreenBackground.png'; // adjust path

export default function ScreenBackgroundImage({ children }) {
  return (
    <ImageBackground
      source={ScreenBackground}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Handle iOS notch + Android StatusBar */}
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
