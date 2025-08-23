import React from 'react';
import { View } from 'react-native';
import MainStyling from '../../constant/MainStyling';
import Texcustom from '../../components/Text/Textcustom';
import Header from '../../components/Header/Header';
import SliderButtons from '../../components/Buttons/SliderButtons';
import { acolors } from '../../constant/colors';
import { hp, wp } from '../../constant/responsive';
import { useNavigation } from '@react-navigation/native';
import ScreenBackgroundImage from '../../components/BackgroundImage/ScreenBackgroundImage';

export default function GenderScreen() {
  const navigation = useNavigation();

  function gotoOldscreen() {
    navigation.navigate('EntryScreen');
  }

  return (
    <ScreenBackgroundImage>
      <View style={[MainStyling.flex, MainStyling.body]}>
        <Header />
        <View style={[MainStyling.rowcentered, { marginVertical: hp('4%') }]}>
          <Texcustom
            title={'Tell us about yourself'}
            style={[
              MainStyling.textSemiBold,
              {
                fontSize: wp(8),
                color: acolors.secondaryblack,
              },
            ]}
            textalign={'center'}
          />
          <Texcustom
            title={'Please choose your gender. We value your uniqueness'}
            style={[
              MainStyling.textRegular,
              {
                fontSize: wp(3.2),
                color: acolors.gray,
              },
            ]}
            textalign={'center'}
          />
        </View>
        <View style={[MainStyling.bottomSection]}>
          <SliderButtons onSlideComplete={gotoOldscreen} />
        </View>
      </View>
    </ScreenBackgroundImage>
  );
}
