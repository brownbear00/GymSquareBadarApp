import React from 'react';
import { ScrollView, View } from 'react-native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import MainStyling from '../../../constant/MainStyling';
import Header from '../../../components/Header/Header';
import { hp, wp } from '../../../constant/responsive';
import UserProfile from '../../../components/Profile/UserProfile';
import PlanCard from '../MembershipScreen/PlanCard';
import Placeholder from '../../../components/Placeholder/Placeholder';
import Favourite from '../../../assets/images/icons/Favourite.png';
import Language from '../../../assets/images/icons/Language.png';
import History from '../../../assets/images/icons/History.png';
import Location from '../../../assets/images/icons/Location2.png';
import Logout from '../../../assets/images/icons/Logout.png';
import Subscription from '../../../assets/images/icons/Subscription.png';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {

    const userPlan = {
        id: '1',
        title: 'Bronze',
        desc: 'Membership!',
        price: 50,
        services: [
            'Basic workouts',
            'Limited gym access',
            'Great for beginners',

        ],
    };
    const navigation = useNavigation();
    function gotoEditprofile() {
        navigation.navigate('EditProfile');
    }
      function logout() {
        navigation.navigate('EntryScreen');
    }

    return (
        <ScreenBackgroundImage>
            <ScrollView showsVerticalScrollIndicator={false} style={[MainStyling.flex, MainStyling.body]}>
                <Header showprofile={false} title={'My Profile'} />
                <UserProfile editprofile={true} onPressEditProfile={gotoEditprofile} />
                <PlanCard item={userPlan} showPlanForEditScreen={true} />
                <View style={{ marginVertical: wp(2), }} />
                <Placeholder
                    icon={Favourite}
                    title={'Favourite'} />
                <Placeholder
                    icon={Language}
                    title={'Language'} />
                <Placeholder
                    icon={Location}
                    title={'Location'} />
                {/* <Placeholder
                    icon={Subscription}
                    title={'Subscription'} /> */}
                <Placeholder
                    icon={History}
                    title={'Clear History'} />
                <Placeholder
                onPress={logout}
                    icon={Logout}
                    title={'Log out'} />
            </ScrollView>
        </ScreenBackgroundImage>
    );
}
