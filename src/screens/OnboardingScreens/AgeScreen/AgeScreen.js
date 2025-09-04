import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
} from 'react-native';
import ScreenBackgroundImage from '../../../components/BackgroundImage/ScreenBackgroundImage';
import MainStyling from '../../../constant/MainStyling';
import Texcustom from '../../../components/Text/Textcustom';
import Header from '../../../components/Header/Header';
import SliderButtons from '../../../components/Buttons/SliderButtons';
import { acolors } from '../../../constant/colors';
import { hp, wp } from '../../../constant/responsive';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');
const ITEM_HEIGHT = hp(6);

export default function AgeScreen() {
    const ages = Array.from({ length: 60 }, (_, i) => i + 15);
    const defaultAge = 30;

    const [selectedAge, setSelectedAge] = useState(defaultAge);
    const flatListRef = useRef(null);
    const navigation = useNavigation();
    function gotoLocationScreen() {
        navigation.navigate('LocationScreen')
    }

    useEffect(() => {
        const index = ages.indexOf(defaultAge);
        if (index >= 0) {
            setTimeout(() => {
                flatListRef.current?.scrollToIndex({
                    index,
                    animated: false,
                });
            }, 100);
        }
    }, []);

    const handleMomentumScrollEnd = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / ITEM_HEIGHT);
        const age = ages[index];
        if (age) {
            setSelectedAge(age);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Texcustom
                    title={item.toString()}
                    style={[
                        styles.itemText,
                        { color: acolors.gray },
                    ]}
                />
            </View>
        );
    };

    return (
        <ScreenBackgroundImage>
            <View style={[MainStyling.flex, MainStyling.body]}>
                <Header showprofile={false} />

                {/* Title */}
                <View style={[MainStyling.rowcentered, { marginVertical: hp('4%') }]}>
                    <Texcustom
                        title={'How old are you?'}
                        style={[
                            MainStyling.textSemiBold,
                            { fontSize: wp(8), color: acolors.secondaryblack },
                        ]}
                        textalign={'center'}
                    />
                    <Texcustom
                        title={'Share with us your age. This information will assist us.'}
                        style={[
                            MainStyling.textRegular,
                            { fontSize: wp(3.2), color: acolors.gray },
                        ]}
                        textalign={'center'}
                    />
                </View>

                <View style={{ justifyContent: 'center' }}>
                    <FlatList
                        ref={flatListRef}
                        data={ages}
                        keyExtractor={(item) => item.toString()}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingTop: height / 2 - ITEM_HEIGHT / 2,
                            paddingBottom: height / 2 - ITEM_HEIGHT / 2, // add bottom padding too
                        }}
                        snapToInterval={ITEM_HEIGHT}
                        decelerationRate="fast"
                        onScroll={(event) => {
                            const offsetY = event.nativeEvent.contentOffset.y;
                            const index = Math.round(offsetY / ITEM_HEIGHT);
                            const age = ages[index];
                            if (age && age !== selectedAge) {
                                setSelectedAge(age);
                            }
                        }}
                        scrollEventThrottle={16}
                        getItemLayout={(data, index) => ({
                            length: ITEM_HEIGHT,
                            offset: ITEM_HEIGHT * index,
                            index,
                        })}
                    />



                    <View style={styles.redBox}>
                        <Texcustom
                            title={selectedAge.toString()}
                            style={{
                                fontSize: wp(7),
                                color: acolors.white,
                                fontWeight: '700',
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={MainStyling.bottomSection}>
                <SliderButtons onSlideComplete={gotoLocationScreen} />
            </View>

        </ScreenBackgroundImage>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontSize: wp(5),
        textAlign: 'center',
    },
    redBox: {
        position: 'absolute',
        top: '50%',
        alignSelf: 'center',
        backgroundColor: acolors.red,
        paddingVertical: hp(1),
        paddingHorizontal: wp(8),
        borderRadius: wp(10),
        zIndex: 2,
    },
});
