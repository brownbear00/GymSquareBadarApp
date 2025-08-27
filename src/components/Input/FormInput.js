import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import Textcustom from '../Text/Textcustom';
import MainStyling from '../../constant/MainStyling';
import { acolors } from '../../constant/colors';
import { hp, wp } from '../../constant/responsive';
import { afonts } from '../../constant/fonts';

export default function FormInput({
    placeholder = 'Input Name',
    keyboardType,
    value,
    onChangeText,
    title = "NA",
    description,
    height,
    marginVertical = wp(1),
    multiline = false,
    numberOfLines = 4,
    rightIcon = false,  
    iconSource,          
    onIconPress,
    marginTop,
    backgroundColor = acolors.white,
    color = acolors.bodytext,
}) {
    return (
        <View style={{ marginVertical, marginTop }}>
            {/* Title (commented for now) */}
            {/* <Textcustom
                title={title}
                style={[
                    MainStyling.textSemiBold,
                    { fontSize: 12, marginBottom: wp(1), fontFamily: afonts.medium }
                ]}
            /> */}

            <View
                style={[
                    styles.inputcontainer,
                    {
                        height: multiline ? hp(numberOfLines * 5) : height || hp(5),
                        paddingVertical: 0,
                        flexDirection: 'row',
                        alignItems: multiline ? 'flex-start' : 'center',
                        backgroundColor
                    }
                ]}
            >
                <TextInput
                    style={[
                        styles.input,
                        {
                            textAlignVertical: multiline ? 'top' : 'center',
                            paddingTop: multiline ? wp(2) : 0,
                            paddingBottom: multiline ? wp(1) : 0,
                            color
                        }
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={color}
                    keyboardType={keyboardType || 'default'}
                    value={value}
                    onChangeText={onChangeText}
                    multiline={multiline}
                />

                {rightIcon && iconSource ? (
                    <Image
                        source={iconSource}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                ) : null}
            </View>

            {description ? (
                <Textcustom
                    title={description}
                    style={[
                        MainStyling.textSemiBold,
                        {
                            fontSize: 12,
                            color: acolors.bodytext,
                            marginTop: wp(1),
                            marginHorizontal: wp(1),
                            fontFamily: afonts.medium
                        }
                    ]}
                />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    inputcontainer: {
        width: '100%',
        //backgroundColor: acolors.black,
        borderRadius: wp(10),
        borderWidth: 0.5,
        borderColor: acolors.bodytext,
        paddingHorizontal: wp(4),
    },
    input: {
        flex: 1,
        fontSize: 12,
        fontFamily: afonts.regular,

    },
    icon: {
        width: wp(5),
        height: wp(5),
        marginLeft: wp(2),
        tintColor: acolors.bodytext, // optional
    },
});
