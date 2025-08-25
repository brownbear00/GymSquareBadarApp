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
import FormInput from '../../../components/Input/FormInput'
export default function NameScreen() {
    const navigation = useNavigation();
    function gotoOTPScreen() {
        //navigation.navigate('OTPScreen')
    }
    return (
        <ScreenBackgroundImage>
            <View style={[MainStyling.flex, MainStyling.body]}>
                <Header />
                <View style={[MainStyling.rowcentered, { marginVertical: hp('4%') }]}>
                    <Texcustom
                        title={"Enter \n Your Name"}
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
                <View style={[{ margin: hp(4) }]} />
                <FormInput
                    placeholder={'Enter Full Name'} />
                <View style={MainStyling.bottomSection}>

                    <SliderButtons
                        label='Proceed'
                        onSlideComplete={gotoOTPScreen}
                    />
                </View>
            </View>

        </ScreenBackgroundImage>
    )
}