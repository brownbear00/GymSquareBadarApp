import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { wp } from '../../constant/responsive';
import { acolors } from '../../constant/colors';
import { afonts } from '../../constant/fonts';
import MainStyling from '../../constant/MainStyling';
import Filter from '../../assets/images/icons/Filter.png';
import SearchIcon from '../../assets/images/icons/SearchIcon.png';
import FireIcon from '../../assets/images/icons/Fire.png';

const chipsData = [
    { id: 1, label: 'Top GYM', icon: FireIcon },
    { id: 2, label: 'Riyadh' },
    { id: 3, label: 'Jeddah' },
    { id: 4, label: 'Mecca' },
    { id: 5, label: 'Medina' },
];

export default function SearchFilter({}) {
    const [activeChip, setActiveChip] = useState(1);

    return (
        <View style={{ marginTop: wp(2) }}>

            <View
                style={[
                    MainStyling.row,
                    { alignItems: 'center', paddingHorizontal: wp(5) },
                ]}
            >

                <TouchableOpacity style={styles.filterButton} activeOpacity={0.6}>
                    <Image
                        source={Filter}
                        style={{ width: wp(4), height: wp(4), resizeMode: 'contain' }}
                    />
                </TouchableOpacity>


                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search..."
                        placeholderTextColor="#999"
                        style={styles.searchInput}
                    />
                    <Image
                        source={SearchIcon}
                        style={{ width: wp(4), height: wp(4), marginRight: 10 }}
                    />
                </View>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginTop: wp(4), paddingLeft: wp(4) }}
            >
                {chipsData.map((chip) => {
                    const isActive = activeChip === chip.id;
                    return (
                        <TouchableOpacity
                            key={chip.id}
                            style={[styles.chip, isActive && styles.activeChip]}
                            activeOpacity={0.7}
                            onPress={() => setActiveChip(chip.id)}
                        >
                            {chip.icon && (
                                <Image
                                    source={chip.icon}
                                    style={{
                                        width: wp(4),
                                        height: wp(4),
                                        resizeMode: 'contain',
                                        marginRight: 4,
                                        tintColor: isActive ? acolors.white : acolors.red,
                                    }}
                                />
                            )}
                            <Text
                                style={[
                                    styles.chipText,
                                    isActive && { color: acolors.white, fontFamily: afonts.bold },
                                ]}
                            >
                                {chip.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
           
        </View>
    );
}

const styles = StyleSheet.create({
    filterButton: {
        width: wp(8),
        height: wp(8),
        borderWidth: 1,
        borderColor: acolors.red,
        borderRadius: wp(20),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: wp(3),
        backgroundColor:acolors.white
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: acolors.red,
        borderRadius: wp(20),
        alignItems: 'center',
        paddingHorizontal: 10,
        height: wp(8),
         backgroundColor:acolors.white
    },
    searchInput: {
        flex: 1,
        fontFamily: afonts.regular,
        fontSize: 10,
        color: acolors.black,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: acolors.red,
        borderRadius: wp(20),
        paddingHorizontal: 14,
        paddingVertical: 6,
        marginRight: 10,
    },
    chipText: {
        fontSize: 12,
        fontFamily: afonts.regular,
        color: acolors.red,
    },
    activeChip: {
        backgroundColor: acolors.red,
    },
});
