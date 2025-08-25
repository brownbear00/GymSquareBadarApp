import { } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Mainstyling from '../../constant/MainStyling';
import { wp } from '../../constant/responsive';
import { acolors } from '../../constant/colors';
import BackIcon from '../../assets/images/icons/BackIcon.png';
import NotificationIcon from '../../assets/images/icons/NotificationIcon.png';
import { useNavigation } from '@react-navigation/native';
import Textcustom from '../Text/Textcustom';
import MainStyling from '../../constant/MainStyling';
import UserProfile from '../../components/Profile/UserProfile';

export default function Header({ enableskip = false, skiponpress, shownotification = false, showprofile = true }) {
    const navigation = useNavigation();
    function handlegoback() {
        navigation.goBack();
    }
    function gotoPhoneNumberSreen() {
        navigation.navigate('PhoneNumberSreen')
    }
    return (
        <View style={[Mainstyling.row]}>
            {showprofile ? (
                <>
                    <UserProfile />
                </>
            ) :
                <>
                    <TouchableOpacity activeOpacity={0.4}
                        onPress={handlegoback}
                        style={{
                            width: wp(8),
                            height: wp(8),
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: acolors.red
                        }}>
                        <Image
                            source={BackIcon}
                            style={{
                                width: wp(4),
                                height: wp(4),
                                resizeMode: 'contain'
                            }} />
                    </TouchableOpacity>
                </>}
            {enableskip && (
                <>

                    <TouchableOpacity activeOpacity={0.4}
                        onPress={gotoPhoneNumberSreen}
                    >
                        <Textcustom
                            title={'Skip'}
                            style={[MainStyling.textSemiBold,
                            Mainstyling.textRegular, { color: acolors.red, fontSize: 12 }]}
                        />
                    </TouchableOpacity>
                </>
            )}
            {shownotification && (
                <>

                    <TouchableOpacity
                        activeOpacity={0.4}
                        style={{
                            width: wp(8),
                            height: wp(8),
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: acolors.red,
                            position: 'relative', // important for dot positioning
                        }}
                    >
                        <Image
                            source={NotificationIcon}
                            style={{
                                width: wp(4),
                                height: wp(4),
                                resizeMode: 'contain',
                            }}
                        />

                        {/* 🔴 Small red dot */}
                        <View
                            style={{
                                position: 'absolute',
                                top: 5,
                                right: 7,
                                width: 6,
                                height: 6,
                                borderRadius: 4,
                                backgroundColor: acolors.red,
                            }}
                        />
                    </TouchableOpacity>

                </>
            )}
        </View>
    )
}