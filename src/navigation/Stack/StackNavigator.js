import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import EntryScreen from '../../screens/OnboardingScreens/EntryScreen/EntryScreen';
import GenderScreen from '../../screens/OnboardingScreens/GenderScreen/GenderScreen';
import AgeScreen from '../../screens/OnboardingScreens/AgeScreen/AgeScreen';
import LocationScreen from '../../screens/OnboardingScreens/LocationScreen/LocationScreen';
import PhoneNumberSreen from '../../screens/OnboardingScreens/PhoneNumberSreen/PhoneNumberSreen';
import OTPScreen from '../../screens/OnboardingScreens/OTPScreen/OTPScreen';
import NameScreen from '../../screens/OnboardingScreens/NameScreen/NameScreen';
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="EntryScreen" component={EntryScreen} />
            <Stack.Screen name="GenderScreen" component={GenderScreen} />
            <Stack.Screen name="AgeScreen" component={AgeScreen} />
            <Stack.Screen name="LocationScreen" component={LocationScreen} />
            <Stack.Screen name="PhoneNumberSreen" component={PhoneNumberSreen} />
            <Stack.Screen name="OTPScreen" component={OTPScreen} />
            <Stack.Screen name="NameScreen" component={NameScreen} />
        </Stack.Navigator>
    );
}