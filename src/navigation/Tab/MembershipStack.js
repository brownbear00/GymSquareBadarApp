import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MembershipScreen from '../../screens/DashboardScreens/MembershipScreen/MembershipScreen';
import PaymentScreen from '../../screens/DashboardScreens/MembershipScreen/PaymentScreen';

const Stack = createNativeStackNavigator();

export default function MembershipStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Membership" component={MembershipScreen} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />

        </Stack.Navigator>
    );
}