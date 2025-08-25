import { } from 'react';
import { View } from 'react-native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import MainStyling from '../../../constant/MainStyling';
import Texcustom from '../../../components/Text/Textcustom';
import Header from '../../../components/Header/Header';
import SliderButtons from '../../../components/Buttons/SliderButtons';
import { acolors } from '../../../constant/colors';
import { hp, wp } from '../../../constant/responsive';
import PhoneInput from '../../../components/Input/PhoneInput';
import { useNavigation } from '@react-navigation/native';

export default function PhoneNumberSreen() {
    const navigation = useNavigation();
    function gotoOTPScreen() {
        navigation.navigate('OTPScreen')
    }
    return (
        <ScreenBackgroundImage>
            <View style={[MainStyling.flex, MainStyling.body]}>
                <Header />
                <View style={[MainStyling.rowcentered, { marginVertical: hp('4%') }]}>
                    <Texcustom
                        title={'Enter Your Mobile Number'}
                        style={[
                            MainStyling.textSemiBold,
                            { fontSize: wp(8), color: acolors.secondaryblack },
                        ]}
                        textalign={'center'}
                    />
                    <Texcustom
                        title={'We’ll send you a code to verify your identity'}
                        style={[
                            MainStyling.textRegular,
                            { fontSize: wp(3.2), color: acolors.gray },
                        ]}
                        textalign={'center'}
                    />
                </View>
                <PhoneInput />
                <View style={MainStyling.bottomSection}>

                    <SliderButtons
                        label='Send OTP'
                        onSlideComplete={gotoOTPScreen}
                    />
                </View>
            </View>

        </ScreenBackgroundImage>
    )
}