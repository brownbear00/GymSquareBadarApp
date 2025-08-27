import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/DashboardScreens/HomeScreen/HomeScreen';
import GymDetail from '../../screens/DashboardScreens/HomeScreen/GymDetail';



const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="GymDetail" component={GymDetail} />
          
        </Stack.Navigator>
    );
}