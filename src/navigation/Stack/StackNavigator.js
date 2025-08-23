import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import EntryScreen from '../../screens/EntryScreen/EntryScreen';
import GenderScreen from '../../screens/GenderScreen/GenderScreen';
import AgeScreen from '../../screens/AgeScreen/AgeScreen';
import LocationScreen from '../../screens/LocationScreen/LocationScreen';
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="EntryScreen" component={EntryScreen} />
            <Stack.Screen name="GenderScreen" component={GenderScreen} />
            <Stack.Screen name="AgeScreen" component={AgeScreen} />
             <Stack.Screen name="LocationScreen" component={LocationScreen} />

        </Stack.Navigator>
    );
}