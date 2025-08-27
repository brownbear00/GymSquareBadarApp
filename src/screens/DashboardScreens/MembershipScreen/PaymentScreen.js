import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import Header from '../../../components/Header/Header';
import { acolors } from '../../../constant/colors';
import { hp, wp } from '../../../constant/responsive';
import Stripe from '../../../assets/images/icons/Stripe.png';
import PayPal from '../../../assets/images/icons/PayPal.png';
import Visa from '../../../assets/images/icons/Visa.png';
import Mastercard from '../../../assets/images/icons/Mastercard.png';
import Checked from '../../../assets/images/icons/Checked.png';
import PaymentSuccesfully from '../../../assets/images/icons/PaymentSuccesfully.png';
import { afonts } from '../../../constant/fonts';
import Buttons from '../../../components/Buttons/Buttons';

export default function PaymentScreen() {
    const [selectedMethod, setSelectedMethod] = useState('mastercard');
    const [saveCard, setSaveCard] = useState(true);
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);

    const handlePayNow = () => {
        setPaymentSuccessful(true);
    };

    const handleMethodHover = (method) => {
        setSelectedMethod(method);
    };

    return (
        <ScreenBackgroundImage>
            <View style={{ flex: 1, padding: wp(4) }}>
                <Header showprofile={false} title={'Payment'} />

                {paymentSuccessful ? (

                    <View style={styles.successContainer}>
                        <Image source={PaymentSuccesfully} style={styles.successImage} />
                        <Text style={styles.successTitle}>Payment Successful!</Text>
                        <Text style={styles.successText}>
                            Your membership starts now. Your gym membership is now active and ready to use.
                        </Text>
                        <Buttons title={'Go to Home'} backgroundColor={acolors.red} />
                    </View>
                ) : (

                    <>
                        <View style={styles.card}>
                            <Text style={styles.sectionTitle}>Order Summary</Text>
                            <View style={styles.rowBetween}>
                                <Text style={styles.label}>Plan Name:</Text>
                                <Text style={styles.value}>Silver</Text>
                            </View>
                            <View style={styles.rowBetween}>
                                <Text style={styles.label}>Total Amount Due</Text>
                                <Text style={styles.price}>₨ 99/<Text style={styles.small}>month</Text></Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.sectionTitle}>Select Method:</Text>
                            <View style={styles.methods}>
                                <TouchableOpacity
                                    onPress={() => handleMethodHover('mastercard')}
                                    onPressIn={() => handleMethodHover('mastercard')}
                                    onPressOut={() => setSelectedMethod('mastercard')}
                                >
                                    <Image source={Mastercard} style={[styles.methodIcon, selectedMethod === 'mastercard' && styles.active]} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleMethodHover('visa')}
                                    onPressIn={() => handleMethodHover('visa')}
                                    onPressOut={() => setSelectedMethod('visa')}
                                >
                                    <Image source={Visa} style={[styles.methodIcon, selectedMethod === 'visa' && styles.active]} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleMethodHover('paypal')}
                                    onPressIn={() => handleMethodHover('paypal')}
                                    onPressOut={() => setSelectedMethod('paypal')}
                                >
                                    <Image source={PayPal} style={[styles.methodIcon, selectedMethod === 'paypal' && styles.active]} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleMethodHover('stripe')}
                                    onPressIn={() => handleMethodHover('stripe')}
                                    onPressOut={() => setSelectedMethod('stripe')}
                                >
                                    <Image source={Stripe} style={[styles.methodIcon, selectedMethod === 'stripe' && styles.active]} />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.label}>Card Number:</Text>
                            <TextInput
                                placeholder="2412 - 7512 - 3412 - 3456"
                                style={styles.input}
                                keyboardType="numeric"
                            />

                            <Text style={styles.label}>Card Holder Name:</Text>
                            <TextInput
                                placeholder="Ahmed Bin Abdullah"
                                style={styles.input}
                            />

                            <View style={styles.row}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.label}>Expire Date:</Text>
                                    <TextInput placeholder="09/25" style={styles.input} />
                                </View>
                                <View style={{ width: wp(25), marginLeft: wp(2) }}>
                                    <Text style={styles.label}>CVV</Text>
                                    <TextInput placeholder="246" style={styles.input} secureTextEntry />
                                </View>
                            </View>

                            <TouchableOpacity style={styles.saveRow} onPress={() => setSaveCard(!saveCard)}>
                                <Image source={Checked} style={{ width: 18, height: 18, tintColor: saveCard ? acolors.primary : acolors.bodytext }} />
                                <Text style={styles.saveText}> Save Card Data For Future Payments.</Text>
                            </TouchableOpacity>
                        </View>
                        <Buttons title={'Pay Now'} backgroundColor={acolors.red} onPress={handlePayNow} />
                    </>
                )}
            </View>
        </ScreenBackgroundImage>
    );
}

const styles = StyleSheet.create({
    successContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    successImage: {
        width: wp(40),
        height: wp(40),
        marginBottom: hp(2),
    },
    successTitle: {
        fontSize: 24,
        fontFamily: afonts.semiBold,
        color: acolors.black,
        fontFamily: afonts.semiBold,

    },
    successText: {
        fontSize: 12,
        color: acolors.bodytext,
        textAlign: 'center',
        marginBottom: hp(2),
        fontFamily: afonts.regular,
    },
    card: {
        borderWidth: 1,
        borderColor: acolors.bodytext,
        borderRadius: 8,
        padding: wp(3),
        marginVertical: hp(1.5),
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: afonts.semiBold,
        marginBottom: hp(1),
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp(0.5),
    },
    label: {
        fontSize: 12,
        fontFamily: afonts.semiBold,
        color: acolors.black,
        marginTop: hp(1),
    },
    value: {
        fontSize: 14,
        fontWeight: '600',
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
    },
    small: {
        fontSize: 12,
        color: acolors.bodytext,
    },
    methods: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp(1.5),
    },
    methodIcon: {
        width: wp(18),
        height: hp(6),
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 6,
        padding: 5,
    },
    active: {
        borderColor: acolors.primary,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: wp(2),
        marginTop: hp(0.5),
    },
    row: {
        flexDirection: 'row',
        marginTop: hp(1),
    },
    saveRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(1.5),
    },
    saveText: {
        fontSize: 13,
        color: acolors.red,
    },
});
