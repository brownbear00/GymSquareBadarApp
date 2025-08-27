import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/DashboardScreens/HomeScreen/HomeScreen';
import QRScanScreen from '../../screens/DashboardScreens/QRScanScreen/QRScanScreen';
import HistoryScreen from '../../screens/DashboardScreens/HistoryScreen/HistoryScreen';
import MembershipScreen from '../../screens/DashboardScreens/MembershipScreen/MembershipScreen';
import ProfileScreen from '../../screens/DashboardScreens/ProfileScreen/ProfileScreen';

// icons
import Home from '../../assets/images/tabicons/Home.png';
import QRScan from '../../assets/images/tabicons/QRScan.png';
import Membership from '../../assets/images/tabicons/Membership.png';
import History from '../../assets/images/tabicons/History.png';
import Profile from '../../assets/images/tabicons/Profile.png';
import { wp } from '../../constant/responsive';
import { acolors } from '../../constant/colors';
import { afonts } from '../../constant/fonts';

import HomeStack from './HomeStack';
import MembershipStack from './MembershipStack';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                // icons mapping
                let icon;
                if (route.name === 'Home') icon = Home;
                else if (route.name === 'QR Scan') icon = QRScan;
                else if (route.name === 'Membership') icon = Membership;
                else if (route.name === 'History') icon = History;
                else if (route.name === 'Profile') icon = Profile;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={[styles.tabItem, isFocused ? styles.activeTab : styles.inactiveTab]}
                        activeOpacity={0.8}
                    >
                        <Image
                            source={icon}
                            style={[styles.icon, { tintColor: isFocused ? '#fff' : 'gray' }]}
                            resizeMode="contain"
                        />
                        {isFocused && <Text style={styles.label}>{label}</Text>}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="QR Scan" component={QRScanScreen} />
            <Tab.Screen name="Membership" component={MembershipStack} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        height: wp(18),
        paddingBottom: 20

    },
    tabItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 30,
    },
    activeTab: {
        backgroundColor: '#B22222', 
    },
    inactiveTab: {
        backgroundColor: '#f0f0f0', 
        borderRadius: 25,
        paddingHorizontal: 12,
    },
    icon: {
        width: wp(4),
        height: wp(4),
    },
    label: {
        color: acolors.white,
        fontSize: 12,
        fontFamily: afonts.semiBold,
        marginLeft: 6,
    },
});
