import { } from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainStyling from '../../constant/MainStyling';
import Texcustom from '../../components/Text/Textcustom';
import AppStatusBar from '../../components/AppStatusBar/AppStatusBar';
import Header from '../../components/Header/Header';
import SliderButtons from '../../components/Buttons/SliderButtons';
import { acolors } from '../../constant/colors';
import { hp, wp } from '../../constant/responsive';
export default function GenderScreen() {
    return (
        <SafeAreaView style={[MainStyling.container]}>
            <AppStatusBar />
            <View style={[MainStyling.flex, MainStyling.body, {}]}>
                <Header />
                <View style={[MainStyling.rowcentered, { marginVertical: hp('4%') }]}>
                    <Texcustom
                        title={'Tell us about yourself'}
                        style={[MainStyling.textBold, {
                            fontSize: 35,
                            color: acolors.secondaryblack

                        }]}
                        textalign={'center'}
                    />
                    <Texcustom
                        title={'please choose your gender. We value your uniqueness'}
                        style={[MainStyling.textRegular, {
                            fontSize: 15,
                            color: acolors.gray

                        }]}
                        textalign={'center'} />
                </View>
                <View style={[MainStyling.bottomSection]}>
                    <SliderButtons />
                </View>
            </View>
        </SafeAreaView>
    )
}