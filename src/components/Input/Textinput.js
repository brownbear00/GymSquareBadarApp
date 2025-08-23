import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { wp, hp } from '../../constant/responsive';
import { acolors } from '../../constant/colors';
import MainStyling from '../../constant/MainStyling';

export default function Textinput({
  placeholder,
  leftIcon,
  rightIconShow,
  rightIconHide,
  isPassword = false,
  value,
  onChangeText,
  keyboardType = 'default',
  autoCapitalize = 'none',
  style = {},
}) {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <View style={styles.inputContainer}>
      {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}

      <View style={styles.textInputWrapper}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={acolors.bodytext}
          secureTextEntry={secureText}
          style={[MainStyling.textRegular,MainStyling.description, styles.textInput, style]}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
      </View>

      {isPassword && (
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Image
            source={secureText ? rightIconShow : rightIconHide}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: acolors.bodytext,
    marginVertical: wp(2),
    paddingHorizontal: wp(2),
    width: '100%',
  },
  leftIcon: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
  textInputWrapper: {
    flex: 1,
  },
  textInput: {
    fontSize:12,
    color: acolors.bodytext,
    paddingVertical: hp(1),
  },
  rightIcon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    marginLeft: wp(2),
  },
});