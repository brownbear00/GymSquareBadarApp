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
import Textcustom from '../../../components/Text/Textcustom';
export default function MembershipScreen() {
    return (
        <ScreenBackgroundImage>
            <View style={[MainStyling.flex, MainStyling.body]}>
                <Header />
                <Textcustom
                    title={'MemberSgip Screen'} />
            </View>
        </ScreenBackgroundImage>
    )
}