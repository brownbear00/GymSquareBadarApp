import React, { useRef, useState } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import MainStyling from '../../../constant/MainStyling';
import Texcustom from '../../../components/Text/Textcustom';
import Header from '../../../components/Header/Header';
import { acolors } from '../../../constant/colors';
import { hp, wp } from '../../../constant/responsive';
import { useNavigation } from '@react-navigation/native';
import PlanCard from './PlanCard'; // ✅ import your new component

const { width } = Dimensions.get('window');
const CARD_WIDTH = wp(70);
const SPACING = wp(5);

const plans = [
  {
    id: '1',
    title: 'Bronze',
    desc: 'Membership!',
    price: 50,
    services: ['Basic workouts', 'Limited gym access', 'Great for beginners', 'Standard support', 'Diet guidelines'],
  },
  {
    id: '2',
    title: 'Pro',
    desc: 'Membership!',
    price: 100,
    services: ['Advanced workouts', 'Full gym access', 'Personal trainer support', 'Diet planning', 'Monthly assessments'],
  },
  {
    id: '3',
    title: 'Premium',
    desc: 'Membership!',
    price: 200,
    services: ['All workouts', 'VIP gym access', 'Nutrition & Trainer included', 'Dedicated mentor', 'Priority support'],
  },
];

export default function MembershipScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  function gotoPaymentScreen() {
    navigation.navigate('PaymentScreen');
  }

  return (
    <ScreenBackgroundImage>
      <View style={[MainStyling.flex, MainStyling.body]}>
        <Header showprofile={false} shownotification={true} />

        <View style={[MainStyling.rowcentered, { marginVertical: hp('4%') }]}>
          <Texcustom
            title="Choose Your Plan"
            style={[MainStyling.textSemiBold, { fontSize: wp(8), color: acolors.secondaryblack }]}
            textalign="center"
          />
          <Texcustom
            title="Flexible option for every fitness level."
            style={[MainStyling.textRegular, { fontSize: wp(3.2), color: acolors.gray }]}
            textalign="center"
          />
        </View>
      </View>

      <View style={{ marginVertical: hp('4%') }} />

      {/* Plan Carousel */}
      <Animated.FlatList
        data={plans}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{ paddingHorizontal: (width - CARD_WIDTH) / 2 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={(ev) => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / (CARD_WIDTH + SPACING));
          setActiveIndex(index);
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * (CARD_WIDTH + SPACING),
            index * (CARD_WIDTH + SPACING),
            (index + 1) * (CARD_WIDTH + SPACING),
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
          });

          return <PlanCard item={item} scale={scale} onSelect={gotoPaymentScreen} />;
        }}
      />

      {/* Dashes Indicator */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
        {plans.map((_, i) => (
          <View
            key={i}
            style={{
              width: wp(6),
              height: 3,
              borderRadius: 2,
              marginHorizontal: 3,
              backgroundColor: i === activeIndex ? acolors.red : acolors.gray,
            }}
          />
        ))}
      </View>
    </ScreenBackgroundImage>
  );
}
