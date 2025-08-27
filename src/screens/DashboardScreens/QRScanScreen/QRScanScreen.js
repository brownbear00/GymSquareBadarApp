import { } from 'react';
import { Image, ScrollView, View } from 'react-native';
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
import Textcustom from '../../../components/Text/Textcustom';
import QRCode from '../../../assets/images/icons/QRCode.png';
import UserProfile from '../../../components/Profile/UserProfile';

export default function QRScanScreen() {
    return (
        <ScreenBackgroundImage>
            <ScrollView showsVerticalScrollIndicator={false} style={[MainStyling.flex, MainStyling.body]}>
                <Header showprofile={false} shownotification={true} />

                <View style={{
                    width: wp(90),
                    alignSelf: 'center',
                    marginTop: hp(3),
                    backgroundColor: acolors.white,
                    elevation: 5,
                    borderRadius: 10,
                    padding: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,

                }}>
                    <UserProfile
                        showidentity={true} />
                    <Image
                        source={QRCode}
                        style={{
                            width: wp(70),
                            height: hp(30),
                            alignSelf: 'center',
                            marginTop: hp(5),
                            resizeMode: 'contain',
                        }} />
                </View>
            </ScrollView>
        </ScreenBackgroundImage>
    )
}