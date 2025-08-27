import React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import Texcustom from '../../../components/Text/Textcustom';
import { acolors } from '../../../constant/colors';
import { hp, wp } from '../../../constant/responsive';
import Star from '../../../assets/images/gymimages/Star.png';
import LocationIcon from '../../../assets/images/gymimages/LocationIcon.png';
import TrippleArrow from '../../../assets/images/icons/TrippleArrow.png';
import { afonts } from '../../../constant/fonts';

export default function Gymimage({
    gymimage,
    gymname,
    gymlocation,
    gymreward = 0,
    gymscore,
    onPress,
    showdetail = true
}) {
    return (
        <View style={styles.cardContainer}>
            <Image source={gymimage} style={styles.imageStyle} />


            {!showdetail && (
                <View style={styles.topRightScore}>
                    <Image source={Star} style={styles.topStarIcon} />
                    <Texcustom
                        title={gymscore?.toFixed(1)}
                        style={styles.topScoreText}
                    />
                </View>
            )}

            <View style={styles.overlay}>

                <Texcustom
                    title={gymname}
                    style={[
                        styles.gymTitle,
                        {
                            fontSize: showdetail ? wp(4.5) : wp(6),
                            //textAlign: showdetail === false ? 'center' : null,
                        },
                    ]}
                />


                <View style={styles.infoRow}>
                    {showdetail ? (
                        <>
                            <View style={styles.locationContainer}>
                                <Image source={LocationIcon} style={styles.iconStyle} />
                                <Texcustom
                                    title={gymlocation}
                                    style={styles.locationText}
                                    marginHorizontal={wp(1.5)}
                                />
                            </View>
                        </>
                    ) : null}

                    {showdetail ? (
                        <>
                            <View style={styles.starsContainer}>
                                {[...Array(5)].map((_, i) => (
                                    <Image
                                        key={i}
                                        source={Star}
                                        style={[
                                            styles.iconStyle,
                                            {
                                                tintColor: i < gymreward ? acolors.yellow : acolors.white,
                                            },
                                        ]}
                                    />
                                ))}
                                <Texcustom
                                    title={gymscore?.toFixed(1)}
                                    style={styles.ratingText}
                                    marginHorizontal={wp(1.5)}
                                />
                            </View>
                        </>
                    ) : null}
                </View>
            </View>

            {showdetail ? (
                <>
                    <TouchableOpacity
                        style={styles.arrowButton}
                        activeOpacity={0.4}
                        onPress={onPress}
                    >
                        <Image source={TrippleArrow} style={styles.arrowIcon} />
                    </TouchableOpacity>
                </>
            ) : null}
        </View>

    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: wp(50),
        borderRadius: wp(3),
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: acolors.black,
        marginBottom: wp(2)
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: wp(4),
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderTopRightRadius: wp(3),
        borderTopLeftRadius: wp(3)
    },
    gymTitle: {
        color: acolors.white,
        fontSize: wp(4.5),
        fontFamily:afonts.semiBold,
    },
    infoRow: {
        marginTop: hp(1),
        flexDirection: 'row',

        alignItems: 'center',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: hp(3)
    },
    iconStyle: {
        width: wp(4),
        height: wp(4),
        resizeMode: 'contain',
        tintColor: acolors.white,
    },
    locationText: {
        color: acolors.white,
        fontSize: wp(3.5),
    },
    ratingText: {
        color: acolors.white,
        fontSize: wp(3.5),
    },
    arrowButton: {
        position: 'absolute',
        right: wp(4),
        bottom: wp(4),
        width: wp(12),
        height: wp(12),
        borderRadius: wp(6),
        backgroundColor: acolors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowIcon: {
        width: wp(5),
        height: wp(5),
        resizeMode: 'contain',
        tintColor: 'red',
    },
    topRightScore: {
        position: 'absolute',
        top: wp(2),
        right: wp(2),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: wp(3),
        paddingHorizontal: wp(2),
        paddingVertical: wp(0.5),
    },
    topStarIcon: {
        width: wp(4),
        height: wp(4),
        resizeMode: 'contain',
        tintColor: acolors.yellow,
        marginRight: wp(1),
    },
    topScoreText: {
        color: acolors.white,
        fontSize: wp(3.5),
        fontWeight: '600',
    },

});
