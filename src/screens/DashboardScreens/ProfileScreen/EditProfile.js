import { } from 'react';
import { View } from 'react-native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import MainStyling from '../../../constant/MainStyling';
import { acolors } from '../../../constant/colors';
import { hp, wp } from '../../../constant/responsive';
import GymBg from '../../../assets/images/icons/BackgroundImage2.png';
import FormInput from '../../../components/Input/FormInput';
import PhoneInput from '../../../components/Input/PhoneInput';
import Buttons from '../../../components/Buttons/Buttons';
import Header from '../../../components/Header/Header';
import HideEye from '../../../assets/images/icons/HideEye.png';
import UserProfile from '../../../components/Profile/UserProfile';
import { useNavigation } from '@react-navigation/native';
export default function EditProfile() {

    const navigation = useNavigation();
    function goBack() {
        navigation.goBack();
    }
    return (
        <ScreenBackgroundImage bgimage={GymBg}>
            <View style={[MainStyling.flex, MainStyling.body]}>
                <Header
                    shownotification={true}
                    showprofile={false}
                    color={acolors.white}
                    borderColor={acolors.white}
                    showtickicon={true}
                    title={'Edit Profile'} />

                <UserProfile changeprofile={true} />

                <FormInput
                    color={acolors.white}
                    backgroundColor={'transparent'}
                    placeholder={'Name'} />
                <PhoneInput
                    color={acolors.white}
                    backgroundColor={'transparent'}
                    marginVertical={wp(1)} />
                <FormInput
                    color={acolors.white}
                    backgroundColor={'transparent'}
                    placeholder={'Password'} marginTop={0}
                    rightIcon={true} iconSource={HideEye} />
                <FormInput
                    color={acolors.white}
                    backgroundColor={'transparent'}
                    placeholder={'Date of Birth'} />

                <Buttons
                onPress={goBack}
                    title={'Save Changes'}
                    backgroundColor={acolors.white}
                    color={acolors.red} />
            </View>
        </ScreenBackgroundImage>
    )
}