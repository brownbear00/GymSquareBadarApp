import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Image, Animated, StyleSheet } from 'react-native';
import MainStyling from '../../../constant/MainStyling';
import Texcustom from '../../../components/Text/Textcustom';
import Header from '../../../components/Header/Header';
import SliderButtons from '../../../components/Buttons/SliderButtons';
import { acolors } from '../../../constant/colors';
import { hp, wp } from '../../../constant/responsive';
import { useNavigation } from '@react-navigation/native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import Male from '../../../assets/images/icons/Male.png';
import Female from '../../../assets/images/icons/Female.png';

export default function GenderScreen() {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState('female');

  // animation
  const translateX = useRef(new Animated.Value(0)).current;

  const onSelect = (gender) => {
    setSelectedGender(gender);
    Animated.spring(translateX, {
      toValue: gender === 'female' ? 0 : wp(35),
      useNativeDriver: true,
    }).start();
  };

  function gotoAgeScreen() {
    navigation.navigate('AgeScreen');
  }

  return (
    <ScreenBackgroundImage>
      <View style={[MainStyling.flex, MainStyling.body]}>
        <Header showprofile={false} />

        <View style={[MainStyling.rowcentered, { marginVertical: hp('4%') }]}>
          <Texcustom
            title={'Tell us about yourself'}
            style={[
              MainStyling.textSemiBold,
              { fontSize: wp(8), color: acolors.secondaryblack },
            ]}
            textalign={'center'}
          />

          <Texcustom
            title={'Please choose your gender. We value your uniqueness'}
            style={[
              MainStyling.textRegular,
              { fontSize: wp(3.2), color: acolors.gray },
            ]}
            textalign={'center'}
          />

          <View style={styles.container}>
            <Animated.View
              style={[
                styles.circle,
                { transform: [{ translateX }] },
              ]}
            />

            <TouchableOpacity
              style={styles.option}
              activeOpacity={0.8}
              onPress={() => onSelect('female')}>
              <Image
                source={Female}
                style={[
                  styles.icon,
                  { tintColor: selectedGender === 'female' ? acolors.white : acolors.black },
                ]}
              />
              <Texcustom
                title={'Female'}
                style={[MainStyling.textSemiBold, {
                  fontSize: wp(3.5),
                  color: selectedGender === 'female' ? acolors.white : acolors.black,

                }]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              activeOpacity={0.8}
              onPress={() => onSelect('male')}>
              <Image
                source={Male}
                style={[
                  styles.icon,
                  { tintColor: selectedGender === 'male' ? acolors.white : acolors.black },
                ]}
              />
              <Texcustom
                title={'Male'}
                style={[MainStyling.textSemiBold, {
                  fontSize: wp(3.5),
                  color: selectedGender === 'male' ? acolors.white : acolors.black,

                }]}
              />
            </TouchableOpacity>
          </View>
        </View>


      </View>
      <View style={[MainStyling.bottomSection]}>
        <SliderButtons onSlideComplete={gotoAgeScreen} />
      </View>
    </ScreenBackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(70),
    height: wp(28),
    borderRadius: wp(20),
    borderColor: acolors.red,
    borderWidth: 1,
    marginTop: wp(40),
    backgroundColor: acolors.white,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    width: wp(35),
    height: wp(28),
    borderRadius: wp(40),
    backgroundColor: acolors.red,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  icon: {
    width: wp(8),
    height: wp(8),
    marginBottom: 4,
    resizeMode: 'contain',
  },
});
