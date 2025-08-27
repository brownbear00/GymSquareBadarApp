import { } from 'react';
import { Image, View } from 'react-native';
import UserImage from '../../assets/images/icons/UserImage.png';
import { acolors } from '../../constant/colors';
import { afonts } from '../../constant/fonts';
import MainStyling from '../../constant/MainStyling';
import Textcustom from '../Text/Textcustom';
import { hp, wp } from '../../constant/responsive';
import Buttons from '../Buttons/Buttons';

export default function UserProfile({ showidentity = false, editprofile = false, onPressEditProfile, changeprofile = false }) {
    const name = "Ahmed"
    return (
        <View>
            {changeprofile ? (
                <>

                    <View style={{
                        width: wp(30),
                        height: wp(30),
                        alignSelf: 'center',
                        marginVertical: wp(4),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image
                            source={UserImage}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: wp(17.5),
                                alignSelf: 'center',
                                marginVertical: wp(4),
                                borderWidth: 4,
                                borderColor: acolors.white
                            }} />
                    </View>


                </>
            ) : (
                <>

                    {editprofile ? (<>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: wp(5), marginVertical: wp(4) }}>
                            <Image
                                source={UserImage}
                                style={{
                                    width: wp(25),
                                    height: wp(25),
                                    borderRadius: wp(7.5),
                                    alignSelf: 'center',
                                }} />
                            <View>
                                <Textcustom
                                    title={name}
                                    style={[MainStyling.textSemiBold, { fontSize: wp(5.5) }]}
                                />
                                <Buttons
                                    title={'Edit Profile'}
                                    fontFamily={afonts.regular}
                                    fontSize={wp(3)}
                                    height={hp(3)}
                                    backgroundColor={acolors.red}
                                    marginVertical={0}
                                    onPress={onPressEditProfile}
                                />
                            </View>

                        </View>
                    </>) : (
                        <>

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
                        </>
                    )}
                </>
            )}
        </View >
    )
}