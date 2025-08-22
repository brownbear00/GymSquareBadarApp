import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import MainStyling from '../../constant/MainStyling';
import RedLogo from '../../assets/images/icons/RedLogo.png';
import { wp } from '../../constant/responsive';

export default function SplashScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('EntryScreen'); 
        }, 2000); 

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={[MainStyling.container, MainStyling.centered]}>
            <Image
                source={RedLogo}
                style={{
                    width: wp(70),
                    height: wp(70),
                    resizeMode: 'contain',
                }}
            />
        </SafeAreaView>
    );
}
