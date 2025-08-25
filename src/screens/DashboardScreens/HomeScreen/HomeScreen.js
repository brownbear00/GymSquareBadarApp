import React from 'react';
import { View, FlatList } from 'react-native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import Header from '../../../components/Header/Header';
import { wp } from '../../../constant/responsive';
import SearchFilter from '../../../components/Filter/SearchFilter';
import GymImage from './GymImage';
import Gym1 from '../../../assets/images/gymimages/Gym1.png';
import Gym2 from '../../../assets/images/gymimages/Gym2.png';
import Gym3 from '../../../assets/images/gymimages/Gym3.png';

export default function HomeScreen() {
    const gymData = [
        {
            id: '1',
            gymimage: Gym1,
            gymname: 'Arena Fitness Innovation',
            gymlocation: '0.7 KM Riyadh',
            gymreward: 4,
            gymscore: 4.2
        },
        {
            id: '2',
            gymimage: Gym2,
            gymname: 'Jeem Gym',
            gymlocation: '0.9 KM Jeddah',
            gymreward: 3,
            gymscore: 3.8
        },
        {
            id: '3',
            gymimage: Gym3,
            gymname: 'Powerlife Gym',
            gymlocation: '1.2 KM Mecca',
            gymreward: 4,
            gymscore: 4.2
        },
        {
            id: '4',
            gymimage: Gym1,
            gymname: 'Strong Gym',
            gymlocation: '0.2 KM Jeddah',
            gymreward: 4,
            gymscore: 4.2
        },
        {
            id: '5',
            gymimage: Gym2,
            gymname: 'Rockshield Gym Riyadh',
            gymlocation: '0.4 KM Riyadh',
            gymreward: 3,
            gymscore: 3.8
        },
        {
            id: '6',
            gymimage: Gym3,
            gymname: 'Smart Fitness Gym',
            gymlocation: '0.2 KM Medina',
            gymreward: 4,
            gymscore: 4.2
        }
    ];

    return (
        <ScreenBackgroundImage>
            <View style={{
                paddingHorizontal: wp(5),
                paddingVertical: wp(3),
            }}>
                <Header
                    showprofile={true}
                    shownotification={true}
                />
            </View>

            <SearchFilter />
            <View style={{margin:5}}/>
            <FlatList
                data={gymData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <GymImage
                        gymimage={item.gymimage}
                        gymname={item.gymname}
                        gymlocation={item.gymlocation}
                        gymreward={item.gymreward}
                        gymscore={item.gymscore}
                    />
                )}
                contentContainerStyle={{
                    paddingHorizontal: wp(5),
                    paddingBottom: wp(5),
                }}
                showsVerticalScrollIndicator={false}
            />
        </ScreenBackgroundImage>
    );
}
