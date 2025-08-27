import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import { hp, wp } from '../../constant/responsive';
import { acolors } from '../../constant/colors';
import MainStyling from '../../constant/MainStyling';
import { afonts } from '../../constant/fonts';

const Buttons = ({
  title,
  onPress,
  backgroundColor = '#000',
  leftIcon,
  rightIcon,
  color = acolors.white,
  elevation,
  marginVertical = wp(2),
  fontFamily = afonts.semiBold,
  width = "100%",
  height = hp('5'),
  fontSize = 16,
  marginHorizontal,
  borderRadius = wp(10)

}) => {
  return (
    <TouchableOpacity
      style={[MainStyling.button, styles.button, { backgroundColor, elevation, marginVertical, width, height, marginHorizontal, borderRadius }]}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <View style={styles.buttonContainer}>

        {leftIcon && <Image source={leftIcon} style={styles.icon} />}


        <Text style={[MainStyling.buttonText,
        { color, marginHorizontal: wp(2), fontFamily, fontSize, }]}>
          {title}
        </Text>


        {rightIcon && <Image source={rightIcon} style={styles.icon} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  icon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
  },
  button: {
    borderWidth: 0.5,
    borderColor: acolors.bodytext,
  }
});

export default Buttons;