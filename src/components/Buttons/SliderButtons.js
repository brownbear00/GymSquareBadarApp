import { } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { acolors } from '../../constant/colors';
import { wp } from '../../constant/responsive';
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';
import MainStyling from '../../constant/MainStyling';
export default function SliderButtons() {
    return (
        <TouchableOpacity activeOpacity={0.4} style={{
            height: wp(12),
            width: '100%',
            borderRadius: 20,
            borderWidth: 1, borderColor: acolors.red,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={[MainStyling.textSemiBold,
                 { color: acolors.red }]} > Slider Button </Text>
        </TouchableOpacity>
    )
}