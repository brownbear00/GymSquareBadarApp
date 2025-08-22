import React from 'react';
import { StatusBar } from 'react-native';
import { acolors } from '../../constant/colors';


export default function AppStatusBar({
  barStyle = "dark-content",
  backgroundColor = acolors.black,
  hidden = false,
}) {
  return (
    <StatusBar
      barStyle={barStyle}
      backgroundColor={backgroundColor}
      hidden={hidden}
    />
  );
}