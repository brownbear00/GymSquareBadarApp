import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { acolors } from '../../constant/colors';
import { afonts } from '../../constant/fonts';

const Textcustom = ({
  title,
  color,
  fontSize,
  textalign,
  marginTop,
  fontFamily,
  paddingLeft,
  paddingRight,
  flexShrink,
  numberOfLines,
  flexWrap,
  lineHeight,
  marginLeft,
  marginBottom,
  style,
  marginHorizontal,
  marginVertical,
  ellipsizeMode 

}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
       ellipsizeMode={ellipsizeMode}
      style={[
        styles.titlestyle,
        {
          color,
          fontSize,
          textAlign: textalign,
          marginTop,
          fontFamily,
          paddingLeft,
          paddingRight,
          flexShrink,
          flexWrap,
          lineHeight,
          marginLeft,
          marginBottom,
          marginVertical,
          marginHorizontal
        },
        style,
      ]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  titlestyle: {
    fontSize: 19,
    fontFamily: afonts.regular,
    color: acolors.black,
    marginTop: 20,
  },
});

export default Textcustom;