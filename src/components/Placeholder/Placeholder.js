import { } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Textcustom from '../Text/Textcustom';
import MainStyling from '../../constant/MainStyling';
import { acolors } from '../../constant/colors';
import { hp, wp } from '../../constant/responsive';
import { afonts } from '../../constant/fonts';
import Favourite from '../../assets/images/icons/Favourite.png';
import RightIcon from '../../assets/images/icons/RightIcon.png';
export default function Placeholder({ icon, title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.4} style={{
            width: '100%',
            borderWidth: 1,
            borderColor: acolors.bodytext,
            paddingVertical: wp(2),
            alignSelf: 'center',
            borderRadius: 4,
            marginBottom:wp(3)
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp(2),



            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={icon || Favourite}
                        style={[MainStyling.icon]} />
                    <Textcustom
                        title={title || 'NA'}
                        style={[MainStyling.textRegular, MainStyling.description, { color: acolors.gray, }]}
                        marginHorizontal={wp(3)} />
                </View>
                <View>
                    <Image
                        source={RightIcon}
                        style={{
                            width: wp(3), height: wp(3), resizeMode: 'contain'
                        }} />
                </View>
            </View>
        </TouchableOpacity>
    )
}