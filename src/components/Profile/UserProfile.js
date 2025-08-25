import { } from 'react';
import { Image, View } from 'react-native';
import UserImage from '../../assets/images/icons/UserImage.png';
import { acolors } from '../../constant/colors';
import { afonts } from '../../constant/fonts';
import MainStyling from '../../constant/MainStyling';
import Textcustom from '../Text/Textcustom';
import { wp } from '../../constant/responsive';

export default function UserProfile() {
    return (
        <View>
            <View style={[MainStyling.row]}>
                <Image
                    source={UserImage}
                    style={[MainStyling.profileimage]} />
                <Textcustom
                    title={'Welcome, Alex!'}
                    style={[MainStyling.textSemiBold, { fontSize: wp(4.5) }]}
                    marginHorizontal={wp(2)} />
                    
            </View>
        </View>
    )
}