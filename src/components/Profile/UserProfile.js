import { } from 'react';
import { Image, View } from 'react-native';
import UserImage from '../../assets/images/icons/UserImage.png';
import { acolors } from '../../constant/colors';
import { afonts } from '../../constant/fonts';
import MainStyling from '../../constant/MainStyling';
import Textcustom from '../Text/Textcustom';
import { hp, wp } from '../../constant/responsive';

export default function UserProfile({ showidentity = false }) {
    const name = "Ahmed Bin Abdullah"
    return (
        <View>
            {showidentity ? (
                <>
                    <Image
                        source={UserImage}
                        style={{
                            width: wp(25),
                            height: wp(25),
                            borderRadius: wp(7.5),
                            alignSelf: 'center',
                        }} />
                    <Textcustom
                        title={name}
                        style={[MainStyling.textSemiBold, { fontSize: wp(4.5) }]}
                        marginHorizontal={wp(2)}
                        textalign={'center'}
                        marginTop={hp(4)} />
                    <Textcustom
                        title={'Please verify your Idenity by scanning the QR code'}
                        style={[MainStyling.textRegular, MainStyling.description]}
                        marginHorizontal={wp(4)}
                        textalign={'center'} />
                </>
            ) : <>

                <View style={[MainStyling.row]}>
                    <Image
                        source={UserImage}
                        style={[MainStyling.profileimage]} />
                    <Textcustom
                        title={`Welcome! ${name}`}
                        style={[MainStyling.textSemiBold, { fontSize: wp(3.5) }]}
                        marginHorizontal={wp(2)} />

                </View>
            </>}
        </View >
    )
}