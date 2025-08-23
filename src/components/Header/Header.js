import { } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Mainstyling from '../../constant/MainStyling';
import { wp } from '../../constant/responsive';
import { acolors } from '../../constant/colors';
import BackIcon from '../../assets/images/icons/BackIcon.png';
import { useNavigation } from '@react-navigation/native';
import Textcustom from '../Text/Textcustom';
import MainStyling from '../../constant/MainStyling';

export default function Header({ enableskip = false, skiponpress }) {
    const navigation = useNavigation();
    function handlegoback() {
        navigation.goBack();
    }
    return (
        <View style={[Mainstyling.row]}>
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
            {enableskip && (
                <>

                    <TouchableOpacity activeOpacity={0.4}
                        onPress={skiponpress}
                    >
                        <Textcustom
                            title={'Skip'}
                            style={[MainStyling.textSemiBold,
                            Mainstyling.textRegular, { color: acolors.red, fontSize: 12 }]}
                        />
                    </TouchableOpacity>
                </>
            )}
        </View>
    )
}