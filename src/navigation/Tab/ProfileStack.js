import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfile from '../../screens/DashboardScreens/ProfileScreen/EditProfile';
import ProfileScreen from '../../screens/DashboardScreens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    );
}