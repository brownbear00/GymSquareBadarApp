import { StyleSheet } from 'react-native';
import { acolors } from '../constant/colors';
import { afonts } from '../constant/fonts';
import { wp, hp } from '../constant/responsive';

const MainStyling = StyleSheet.create({

    flex: { flex: 1 },
    container: {
        flex: 1,
        backgroundColor: acolors.white,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        marginHorizontal: wp(5),
        marginVertical: wp(3),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowcentered: {

        justifyContent: 'center',
        alignItems: 'center',
    },


    textRegular: {
        fontFamily: afonts.regular,
        color: acolors.black,
    },
    textMedium: {
        fontFamily: afonts.medium,
        color: acolors.black,
    },
    textSemiBold: {
        fontFamily: afonts.semiBold,
        color: acolors.black,
    },
    textBold: {
        fontFamily: afonts.bold,
        color: acolors.black,
    },


    title: { fontSize: 28,  },
    heading: { fontSize: 25, },
    subHeading: { fontSize: 18,  },
    bodyText: { fontSize: 15 },
    smallText: { fontSize: 12 },
    description: { fontSize: 12, color: acolors.gray },


    button: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp(0.5),
        paddingHorizontal: wp(4),
    },
    buttonText: {
        fontFamily: afonts.semiBold,
        color: acolors.black,
    },


    input: {
        width: '100%',
        borderColor: acolors.bodytext,
        borderWidth: 1,
        borderRadius: wp(2),
        paddingHorizontal: wp(4),
        paddingVertical: hp(1.5),
        fontSize: hp(2),
        fontFamily: afonts.regular,
        color: acolors.black,
        marginBottom: hp(2),
    },


    link: {
        fontSize: 12,
        fontFamily: afonts.regular,
        color: acolors.black,
        marginHorizontal: 5,
        textDecorationLine: 'underline',
    },


    bottomSection: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: wp(4),
        paddingVertical: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: acolors.black,
        borderRadius: 10,
        paddingVertical: wp(4),
        paddingHorizontal: wp(4),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: hp(5),
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    // Divider
    divider: {
        borderWidth: 0.5,
        borderColor: acolors.bodytext,
    },
});

export default MainStyling;
