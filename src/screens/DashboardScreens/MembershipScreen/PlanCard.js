// components/PlanCard.js
import React from 'react';
import { View, Image, Animated } from 'react-native';
import Texcustom from '../../../components/Text/Textcustom';
import Buttons from '../../../components/Buttons/Buttons';
import { acolors } from '../../../constant/colors';
import { hp, wp } from '../../../constant/responsive';
import MainStyling from '../../../constant/MainStyling';
import Bronze from '../../../assets/images/icons/Bronze.png';
import Riyal from '../../../assets/images/icons/Riyal.png';
import CheckBox from '../../../assets/images/icons/CheckBox.png';
import CheckBoxProfilePlan from '../../../assets/images/icons/CheckBoxProfilePlan.png';
import { afonts } from '../../../constant/fonts';

const CARD_WIDTH = wp(70);
const SPACING = wp(5);

export default function PlanCard({
    item,
    scale,
    onSelect,
    showPlanForEditScreen = false, // default false
}) {
    if (showPlanForEditScreen) {

        return (
            <View
                style={{
                    width: '100%',
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: acolors.gray,
                    padding: wp(4),
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    backgroundColor: acolors.red,
                    marginVertical: wp(2),
                }}
            >

                <View>
                    <View style={{ flexDirection: 'row', gap: wp(3), flex: 1 }}>
                        <Image source={Bronze} style={{ width: wp(10), height: wp(10), resizeMode: 'contain' }} />
                        <View>
                            <Texcustom
                                title={item.title}
                                style={[{ fontSize: wp(4.5), color: acolors.white, fontWeight: '600' }]}
                            />
                            <Texcustom
                                title={item.desc}
                                style={[{ color: acolors.white, fontSize: wp(3), marginTop: wp(1) }]}
                            />


                        </View>
                    </View>
                    {item.services.map((srv, i) => (
                        <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginTop: wp(1.5) }}>
                            <Image source={CheckBoxProfilePlan} style={{ width: wp(3.5), height: wp(3.5), resizeMode: 'contain' }} />
                            <Texcustom
                                title={srv}
                                style={[{ fontSize: wp(3), color: acolors.white, fontWeight: '600' }]}
                                marginHorizontal={wp(2)}
                            />
                        </View>
                    ))}
                </View>

                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: wp(1) }}>
                        <Image source={Riyal} style={{ width: wp(5), height: wp(5), resizeMode: 'contain' }} />
                        <Texcustom
                            title={`${item.price}`}
                            style={[MainStyling.textSemiBold, { fontSize: hp(5), color: acolors.white }]}
                        />
                        <Texcustom
                            title="/month"
                            style={[{ fontSize: wp(2.8), color: acolors.white }]}
                        />
                    </View>
                    <Buttons
                        title={'Selected Plan'}
                        fontFamily={afonts.regular}
                        fontSize={wp(3)}
                        height={hp(3)}
                        backgroundColor={acolors.white}
                        color={acolors.red}
                        marginVertical={wp(2)}
                    />
                </View>

            </View>
        );
    }

    // ✅ Default MembershipScreen layout
    return (
        <Animated.View
            style={{
                width: CARD_WIDTH,
                marginRight: SPACING,
                transform: [{ scale }],
                backgroundColor: acolors.red,
                borderRadius: 20,
                padding: wp(5),
                alignSelf: 'flex-start',
            }}
        >
            <View style={{ alignItems: 'center' }}>
                <Image source={Bronze} style={[MainStyling.profileimage]} />
                <Texcustom
                    title={item.title}
                    style={[MainStyling.textSemiBold, { fontSize: wp(5), color: acolors.white }]}
                    textalign="center"
                />
                <Texcustom
                    title={item.desc}
                    style={[MainStyling.textRegular, { fontSize: wp(3), color: acolors.white }]}
                    textalign="center"
                />
            </View>

            {item.services.map((srv, i) => (
                <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginTop: wp(2) }}>
                    <Image source={CheckBox} style={[MainStyling.icon]} />
                    <Texcustom
                        title={srv}
                        style={[MainStyling.textMedium, { fontSize: wp(3), color: acolors.white }]}
                        marginHorizontal={wp(2)}
                    />
                </View>
            ))}

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: wp(4) }}>
                <Image source={Riyal} style={{ width: wp(4), height: wp(4), resizeMode: 'contain' }} />
                <Texcustom
                    title={` ${item.price} /`}
                    style={[MainStyling.textSemiBold, { fontSize: wp(6), color: acolors.white }]}
                />
                <Texcustom
                    title=" month"
                    style={[MainStyling.textRegular, { fontSize: wp(3), color: acolors.white }]}
                />
            </View>

            <Buttons
                onPress={onSelect}
                title="Select Plan"
                color={acolors.red}
                backgroundColor={acolors.white}
                height={hp(4)}
                fontFamily={afonts.semiBold}
                fontSize={wp(3)}
            />
        </Animated.View>
    );
}
