import { } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import MainStyling from '../../../constant/MainStyling';
import Texcustom from '../../../components/Text/Textcustom';
import Header from '../../../components/Header/Header';
import SliderButtons from '../../../components/Buttons/SliderButtons';
import { acolors } from '../../../constant/colors';
import { hp, wp } from '../../../constant/responsive';
import { useNavigation } from '@react-navigation/native';
import Location from '../../../assets/images/icons/Location.png';
import FormInput from '../../../components/Input/FormInput'
import MapImage from '../../../assets/images/icons/MapImage.png';
import LinearGradient from 'react-native-linear-gradient';
export default function LocationScreen() {
    const navigation = useNavigation();
    function gotoPhoneNumberSreen() {
        navigation.navigate('PhoneNumberSreen')
    }
    return (
        <ScreenBackgroundImage>
            <View style={[MainStyling.flex, MainStyling.body]}>
                <Header enableskip={true} />

                <View style={[MainStyling.rowcentered, { marginVertical: hp('4%') }]}>
                    <Texcustom
                        title={'Enter your location'}
                        style={[
                            MainStyling.textSemiBold,
                            { fontSize: wp(8), color: acolors.secondaryblack },
                        ]}
                        textalign={'center'}
                    />
                    <Texcustom
                        title={'Tell us where you’re based for personalized recommendations.'}
                        style={[
                            MainStyling.textRegular,
                            { fontSize: wp(3.2), color: acolors.gray },
                        ]}
                        textalign={'center'}
                    />



                </View>
                <View>
                    <FormInput
                        placeholder={'Choose your Current Location'}
                        rightIcon
                        iconSource={Location} />
                    <Image
                        source={MapImage}
                        style={{
                            width: '100%',
                            height: wp(50),
                            resizeMode: 'contain'
                        }} />
                    <View>
                        <TouchableOpacity style={{
                            alignSelf: 'flex-end',
                            borderRadius: wp(20),
                            paddingHorizontal: wp(4),
                            paddingVertical: wp(1),
                            backgroundColor: acolors.red,
                            marginTop: wp(2)
                        }}>
                            <Texcustom
                                title={'Show Map'}
                                style={[MainStyling.textSemiBold, MainStyling.smallText, { color: acolors.white }]} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={MainStyling.bottomSection}>

                <SliderButtons
                    onSlideComplete={gotoPhoneNumberSreen}
                />
            </View>

        </ScreenBackgroundImage>
    )
}