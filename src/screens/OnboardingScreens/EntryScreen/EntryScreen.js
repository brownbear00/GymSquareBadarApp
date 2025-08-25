import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Image,
    ImageBackground,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import GymBg from '../../../assets/images/icons/BackgroundImage2.png';
import Logo from '../../../assets/images/icons/WhiteLogo.png';
import { acolors } from '../../../constant/colors';
import { wp } from '../../../constant/responsive';
import Buttons from '../../../components/Buttons/Buttons';
import { useNavigation } from '@react-navigation/native';
import { afonts } from '../../../constant/fonts';
export default function EntryScreen() {
    const slideAnim = useRef(new Animated.Value(1000)).current;
    const navigation = useNavigation();

    function gotoGenderScreen() {
        navigation.navigate('GenderScreen')
    }
    function gotoPhoneNumberSreen() {
        navigation.navigate('PhoneNumberSreen')
    }
    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <ImageBackground
                source={GymBg}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <Animated.View
                    style={[
                        styles.centerContent,
                        { transform: [{ translateY: slideAnim }] },
                    ]}
                >
                    <Image source={Logo} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.heading}>
                        Get Your Perfect Workout with the Best Trainers
                    </Text>

                    <Buttons
                        title="Login"
                        backgroundColor={acolors.white}
                        color={acolors.black}
                        onPress={gotoPhoneNumberSreen}
                    />
                    <Buttons
                        title="Sign Up"
                        backgroundColor={acolors.white}
                        color={acolors.black}
                        onPress={gotoGenderScreen}
                    />
                </Animated.View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '110%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp(5),
    },
    logo: {
        width: wp(50),
        height: wp(50),
        marginBottom: wp(10),
    },
    heading: {
        color: acolors.white,
        fontSize: 32,
        fontFamily:afonts.semiBold,
        letterSpacing:-1,
        textAlign: 'center',
        marginBottom: wp(10),
    },
});
