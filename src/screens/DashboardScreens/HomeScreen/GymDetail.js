import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import Header from '../../../components/Header/Header';
import { hp, wp } from '../../../constant/responsive';
import MainStyling from '../../../constant/MainStyling';
import GymImage from './GymImage';
import { acolors } from '../../../constant/colors';
import Textcustom from '../../../components/Text/Textcustom';
import PersonalTraining from '../../../assets/images/gymimages/PersonalTraining.png';
import NutritionalGuidance from '../../../assets/images/gymimages/NutritionalGuidance.png';
import GroupFitnessClasses from '../../../assets/images/gymimages/GroupFitnessClasses.png';
import FitnessAssessments from '../../../assets/images/gymimages/FitnessAssessments.png';
import Star from '../../../assets/images/gymimages/Star.png';
import UserImage from '../../../assets/images/icons/UserImage.png';

export default function GymDetail() {
    const route = useRoute();
    const { gymimage, gymname, gymscore } = route.params;
    const [selectedFilter, setSelectedFilter] = useState("Top GYM");
    const services = [
        { id: 1, title: 'Personal Training', icon: PersonalTraining },
        { id: 2, title: 'Group Fitness Classes', icon: GroupFitnessClasses },
        { id: 3, title: 'Nutritional Guidance', icon: NutritionalGuidance },
        { id: 4, title: 'Fitness Assessments', icon: FitnessAssessments },
    ];
    const ratingData = { 5: 50, 4: 20, 3: 5, 2: 3, 1: 1 };
    const totalReviews = Object.values(ratingData).reduce((a, b) => a + b, 0);
    const filterOptions = ["Top GYM", "Positive", "Negative"];
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            rating: gymscore,
            time: "2 days ago",
            text: "Great gym with excellent facilities and friendly staff. Highly recommend! The trainers are knowledgeable and supportive, making every workout enjoyable.",
        },
        {
            id: 2,
            name: "Jane Smith",
            rating: gymscore,
            time: "5 days ago",
            text: "Amazing gym with a wide range of equipment and classes. The atmosphere is motivating, and the staff is always ready to help. I've seen great results since joining.",
        },
    ];

    return (
        <ScreenBackgroundImage>
            <View style={MainStyling.body}>
                <Header showprofile={false} shownotification={true} />
                <View style={{ margin: wp(2) }} />
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp(5) }}>
                    <GymImage showdetail={false} gymimage={gymimage} gymscore={gymscore} gymname={gymname} />
                    <View style={styles.container}>
                        <Textcustom title="About:" style={[MainStyling.textSemiBold, MainStyling.subHeading]} />
                        <Textcustom
                            title="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,"
                            style={[MainStyling.textRegular, MainStyling.description]}
                        />
                    </View>
                    <Textcustom title="Services:" style={[MainStyling.textSemiBold, MainStyling.subHeading]} />
                    <View style={[MainStyling.row, styles.serviceRow]}>
                        {services.map((item) => (
                            <View key={item.id} style={styles.serviceBox}>
                                <Image source={item.icon} style={styles.serviceIcon} />
                                <Textcustom title={item.title} style={[MainStyling.textMedium, styles.serviceText]} textalign="center" />
                            </View>
                        ))}
                    </View>
                    <View style={styles.container}>
                        <InfoRow label="Hours:" value="6 am–11 pm" />
                        <InfoRow label="Address:" value="2849 Prince Sultan Bin Abdulaziz Rd, Al Mathar Ash Shamali, Riyadh 12312, Saudi Arabia" />
                        <InfoRow label="Contact Info:" value="info@arena.sa" />
                        <InfoRow label="Gender Specificity:" value="Both" />
                    </View>
                    <View style={[styles.container, styles.ratingContainer]}>
                        <View style={styles.scoreBox}>
                            <Textcustom title={gymscore} style={[MainStyling.textSemiBold, { fontSize: 45 }]} />
                            <Textcustom title={`${totalReviews} Reviews`} style={[MainStyling.textMedium, MainStyling.subHeading]} />
                        </View>
                        <View style={styles.ratingsBox}>
                            {Object.keys(ratingData).reverse().map((star) => (
                                <RatingRow key={star} star={star} count={ratingData[star]} totalReviews={totalReviews} />
                            ))}
                        </View>
                    </View>

                    <View style={[MainStyling.row, { marginTop: wp(2) }]}>
                        {filterOptions.map((option) => {
                            const isActive = selectedFilter === option;
                            return (
                                <TouchableOpacity
                                    key={option}
                                    activeOpacity={0.7}
                                    style={[
                                        styles.filterBtn,
                                        isActive
                                            ? { backgroundColor: acolors.red, borderColor: acolors.red }
                                            : { backgroundColor: "transparent", borderColor: acolors.bodytext },
                                    ]}
                                    onPress={() => setSelectedFilter(option)}
                                >
                                    <Textcustom
                                        title={option}
                                        style={[MainStyling.textSemiBold, { color: isActive ? acolors.white : acolors.red }]}
                                    />
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    {reviews.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </ScrollView>
            </View>
        </ScreenBackgroundImage>
    );
}


const InfoRow = ({ label, value }) => (
    <View style={styles.verticalspacing}>
        <Textcustom title={label} style={[MainStyling.textMedium,MainStyling.bodyText]} />
        <Textcustom title={value} style={[MainStyling.textRegular, MainStyling.description]} />
    </View>
);

const RatingRow = ({ star, count, totalReviews }) => {
    const percentage = (count / totalReviews) * 100;
    return (
        <View style={styles.ratingRow}>
            <Textcustom title={star} style={[MainStyling.textMedium, { fontSize: 8 }]} />
            <Image source={Star} style={styles.starIcon} />
            <View style={styles.progressContainer}>
                <View style={styles.progressBg} />
                <View style={[styles.progressFill, { width: `${percentage}%` }]} />
            </View>
        </View>
    );
};

const ReviewCard = ({ name, rating, time, text }) => (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: wp(3) }}>
            <Image source={UserImage} style={[MainStyling.profileimage]} />
            <View>
                <Textcustom title={name} style={[MainStyling.textSemiBold, { marginLeft: wp(2) }]} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp(2) }}>
                    <Image source={Star} style={styles.starIcon} />
                    <Textcustom title={rating} style={[MainStyling.textRegular, MainStyling.description, { fontSize: wp(3) }]} />
                    <Textcustom title={time} style={[MainStyling.textRegular, MainStyling.description, { marginLeft: wp(2), fontSize: wp(3) }]} />
                </View>
            </View>
        </View>
        <Textcustom title={text} style={[MainStyling.textRegular, MainStyling.description]} />
    </View>
);

const styles = StyleSheet.create({
    container: { padding: wp(2), backgroundColor: 'transparent', borderRadius: wp(2), borderWidth: 1, borderColor: acolors.bodytext, marginVertical: wp(2) },
    verticalspacing: { marginBottom: wp(2) },
    serviceRow: { flexWrap: 'wrap', justifyContent: 'space-between' },
    serviceBox: { width: wp(22), height: wp(22), borderRadius: wp(2), borderColor: acolors.red, borderWidth: 1, justifyContent: 'center', alignItems: 'center', padding: wp(2), marginBottom: wp(3), backgroundColor: 'transparent' },
    serviceIcon: { width: wp(10), height: wp(10), resizeMode: 'contain', marginBottom: wp(1) },
    serviceText: { fontSize: wp(2.5) },
    ratingContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    scoreBox: { width: '50%', justifyContent: 'center', alignItems: 'center' },
    ratingsBox: { width: '50%', justifyContent: 'center', alignItems: 'center' },
    ratingRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: wp(0.5) },
    starIcon: { width: wp(2.5), height: wp(2.5), resizeMode: 'contain', marginHorizontal: wp(1) },
    progressContainer: { width: '70%', height: wp(1), borderRadius: wp(10), overflow: 'hidden', backgroundColor: acolors.bodytext },
    progressBg: { ...StyleSheet.absoluteFillObject, backgroundColor: acolors.bodytext, borderRadius: wp(10) },
    progressFill: { height: '100%', backgroundColor: acolors.red, borderRadius: wp(10) },
    filterBtn: { borderRadius: wp(10), paddingHorizontal: wp(5), paddingVertical: wp(2), borderWidth: 1, alignSelf: 'center' },
});
