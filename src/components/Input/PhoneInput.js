import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image, Pressable, Text } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { hp, wp } from '../../constant/responsive';
import { acolors } from '../../constant/colors';
import { afonts } from '../../constant/fonts';
import Textcustom from '../Text/Textcustom';
import MainStyling from '../../constant/MainStyling';
import Dropdown from '../../assets/images/icons/Dropdown.png';

export default function PhoneInput({
  placeholder = 'Select Country',
  height = hp(5),
  marginVertical = hp(4),
  rightIcon = true,
  iconSource = Dropdown,
  disabled = false,
  description,
}) {
  const [countryCode, setCountryCode] = useState('PK');   
  const [callingCode, setCallingCode] = useState('92');
  const [countryName, setCountryName] = useState('Pakistan');
  const [pickerVisible, setPickerVisible] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [maxLength, setMaxLength] = useState(10);   
  const [dynamicPlaceholder, setDynamicPlaceholder] = useState('----------'); 

  const handleCountrySelect = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setCountryName(country.name);

    try {
     
      const example = parsePhoneNumberFromString(`+${country.callingCode[0]}1234567890`, country.cca2);
      if (example) {
        const possibleLength = example.nationalNumber.length;
        setMaxLength(possibleLength);
        setDynamicPlaceholder('-'.repeat(possibleLength));
      } else {
        setMaxLength(10);
        setDynamicPlaceholder('----------');
      }
    } catch (e) {
      setMaxLength(10);
      setDynamicPlaceholder('----------');
    }

    setPhoneNumber('');
  };

  return (
    <View style={{ marginVertical }}>
      {/* --- Country Select Row --- */}
      <View style={[styles.inputcontainer, { height }]}>
        <CountryPicker
          countryCode={countryCode}
          withFilter
          withFlag
          withCallingCode
          withCountryNameButton={false}
          withEmoji
          visible={pickerVisible}
          onClose={() => setPickerVisible(false)}
          onSelect={handleCountrySelect}
        />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={acolors.bodytext}
          value={countryName}
          editable={false}
        />

        {rightIcon && iconSource ? (
          <Image source={iconSource} style={styles.icon} resizeMode="contain" />
        ) : null}

        <Pressable
          onPress={() => setPickerVisible(true)}
          disabled={disabled}
          style={StyleSheet.absoluteFillObject}
          accessibilityRole="button"
          accessibilityLabel={placeholder}
        />
      </View>

      <View style={[styles.inputcontainer, { height, marginVertical: wp(4), paddingHorizontal: wp(2) }]}>
        <Text style={styles.callingCode}>+{callingCode}</Text>
        <View style={styles.divider} />

        <TextInput
          style={styles.phoneInput}
          placeholder={dynamicPlaceholder}   
          placeholderTextColor={acolors.bodytext}
          value={phoneNumber}
          keyboardType="phone-pad"
          maxLength={maxLength}
          onChangeText={setPhoneNumber}
        />
      </View>

      {description ? (
        <Textcustom
          title={description}
          style={[
            MainStyling.textSemiBold,
            {
              fontSize: 12,
              color: acolors.bodytext,
              marginTop: wp(1),
              marginHorizontal: wp(1),
              fontFamily: afonts.medium,
            },
          ]}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inputcontainer: {
    width: '100%',
    backgroundColor: acolors.white,
    borderRadius: wp(10),
    borderWidth: 0.5,
    borderColor: acolors.bodytext,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: wp(2),
  },
  input: {
    flex: 1,
    fontSize: 12,
    fontFamily: afonts.regular,
    color: acolors.bodytext,
    paddingVertical: 0,
    paddingHorizontal: wp(4),
  },
  phoneInput: {
    flex: 1,
    fontSize: 12,
    fontFamily: afonts.regular,
    color: acolors.bodytext,
    paddingVertical: 0,
    marginLeft: wp(2),
  },
  callingCode: {
    fontSize: 12,
    fontFamily: afonts.medium,
    color: acolors.bodytext,
    marginLeft: wp(2),
  },
  divider: {
    width: 1,
    height: hp(2),
    backgroundColor: acolors.bodytext,
    marginHorizontal: wp(2),
  },
  icon: {
    width: wp(3),
    height: wp(3),
    marginRight: wp(2),
    tintColor: acolors.bodytext,
  },
});
