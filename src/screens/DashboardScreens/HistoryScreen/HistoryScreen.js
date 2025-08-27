import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import MainStyling from '../../../constant/MainStyling';
import Texcustom from '../../../components/Text/Textcustom';
import Header from '../../../components/Header/Header';
import { acolors } from '../../../constant/colors';
import { wp } from '../../../constant/responsive';
import BranchLogo from '../../../assets/images/icons/BranchLogo.png';

export default function HistoryScreen() {
    // Instead of repeating 13 placeholders, just use an array
    const attendanceData = Array(13).fill({
        date: 'July 19th, 2025',
        place: 'Arena Fitness Innovation',
        distance: '0.9 KM',
        checkin: 'Check-in 9:00 AM',
        checkout: 'Checked-out 5:00 PM',
    });

    return (
        <ScreenBackgroundImage>
            <View style={[MainStyling.flex, MainStyling.body]}>
                <Texcustom
                    title="Attendance History"
                    textalign="center"
                    style={[MainStyling.textSemiBold, MainStyling.title]}
                />
                <Texcustom
                    title="Monitor past check-ins easily"
                    textalign="center"
                    style={[MainStyling.textRegular, MainStyling.description]}
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    {attendanceData.map((item, index) => (
                        <AttendencePlaceHolder key={index} {...item} />
                    ))}
                </ScrollView>
            </View>
        </ScreenBackgroundImage>
    );
}

const AttendencePlaceHolder = ({ date, place, distance, checkin, checkout }) => {
    return (
        <View
            style={{
                width: '100%',
                backgroundColor: acolors.white,
                borderRadius: 10,
                marginVertical: wp(1),
                borderWidth: 1,
                borderColor: acolors.bodytext,
                paddingVertical: wp(1),
                paddingHorizontal: wp(2),
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: wp(2) }}>
                <Image source={BranchLogo} style={MainStyling.profileimage} />

                <View>
                    <Texcustom
                        title={date}
                        style={[MainStyling.textRegular, MainStyling.description, { fontSize: 10 }]}
                    />
                    <Texcustom
                        title={place}
                        style={[MainStyling.textSemiBold, { fontSize: wp(4.2) }]}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: wp(3) }}>
                        <Texcustom
                            title={distance}
                            style={[MainStyling.textRegular, MainStyling.description, { fontSize: 10 }]}
                        />
                        <Texcustom
                            title={checkin}
                            style={[MainStyling.textRegular, MainStyling.description, { fontSize: 10 }]}
                        />
                        <Texcustom
                            title={checkout}
                            style={[MainStyling.textRegular, MainStyling.description, { fontSize: 10 }]}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};
