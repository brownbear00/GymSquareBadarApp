import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import MainStyling from '../../../constant/MainStyling';
import Texcustom from '../../../components/Text/Textcustom';
import Header from '../../../components/Header/Header';
import SliderButtons from '../../../components/Buttons/SliderButtons';
import { acolors } from '../../../constant/colors';
import { hp, wp } from '../../../constant/responsive';
import Textcustom from '../../../components/Text/Textcustom';
import { afonts } from '../../../constant/fonts';
import { useNavigation } from '@react-navigation/native';

export default function OTPScreen() {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const inputs = useRef([]);
    const [timer, setTimer] = useState(30);
    const [isResendEnabled, setIsResendEnabled] = useState(false);
    const navigation = useNavigation();
    function gotoNameScreen() {
        navigation.navigate('NameScreen')
    }

    useEffect(() => {
        if (timer === 0) {
            setIsResendEnabled(true);
            return;
        }
        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const handleChange = (text, index) => {
        if (/^\d$/.test(text)) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);

            if (index < 5 && text !== '') {
                inputs.current[index + 1].focus();
            }
        } else if (text === '') {
            const newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);
        }
    };

    const handleBackspace = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleResend = () => {
        setOtp(new Array(6).fill(''));
        setTimer(30);
        setIsResendEnabled(false);

    };



    return (
        <ScreenBackgroundImage>
            <View style={[MainStyling.flex, MainStyling.body]}>
                <Header showprofile={false} />
                <View style={[MainStyling.rowcentered, { marginVertical: hp('4%') }]}>
                    <Texcustom
                        title={'Enter Verification Code'}
                        style={[
                            MainStyling.textSemiBold,
                            { fontSize: wp(8), color: acolors.secondaryblack },
                        ]}
                        textalign={'center'}
                    />
                    <Texcustom
                        title={'A 6-digit OTP has been sent to your number'}
                        style={[
                            MainStyling.textRegular,
                            { fontSize: wp(3.2), color: acolors.gray },
                        ]}
                        textalign={'center'}
                    />
                </View>
                <View style={[{ margin: hp(4) }]} />
                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputs.current[index] = ref)}
                            style={styles.otpInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => handleChange(text, index)}
                            onKeyPress={(e) => handleBackspace(e, index)}
                        />
                    ))}
                </View>

                <View style={[MainStyling.row, { marginVertical: hp(1) }]}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={handleResend}
                        disabled={!isResendEnabled}
                    >
                        <Textcustom
                            title={'Resend OTP'}
                            style={[
                                MainStyling.textMedium,
                                MainStyling.smallText,
                                { color: isResendEnabled ? acolors.primary : acolors.gray }
                            ]}
                        />
                    </TouchableOpacity>

                    <Textcustom
                        title={`00 : ${timer < 10 ? `0${timer}` : timer}`}
                        style={[MainStyling.textMedium, MainStyling.smallText]}
                    />
                </View>
            </View>
            <View style={MainStyling.bottomSection}>
                <SliderButtons
                    label='Send OTP'
                    onSlideComplete={gotoNameScreen}
                />
            </View>

        </ScreenBackgroundImage>
    );
}

const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(4),
    },
    otpInput: {
        width: wp(12),
        height: wp(12),
        borderWidth: 2,
        borderColor: acolors.bodytext,
        borderRadius: wp(2.5),
        textAlign: 'center',
        fontSize: wp(4),
        color: acolors.secondaryblack,
        fontFamily: afonts.semiBold,
        backgroundColor: acolors.white,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
});

