import React, { useRef } from 'react';
import { 
  StyleSheet, 
  Animated, 
  PanResponder, 
  Image 
} from 'react-native';
import { acolors } from '../../constant/colors';
import { wp } from '../../constant/responsive';
import MainStyling from '../../constant/MainStyling';

import Tick from '../../assets/images/icons/Tick.png';
import TrippleArrow from '../../assets/images/icons/TrippleArrow.png';

export default function SliderButtons({ onSlideComplete }) {
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const backgroundColor = pan.x.interpolate({
    inputRange: [0, wp(65)],
    outputRange: ['#fff', acolors.red],
    extrapolate: 'clamp',
  });

  // Animate label color
  const labelColor = pan.x.interpolate({
    inputRange: [0, wp(65)],
    outputRange: [acolors.red, '#fff'],
    extrapolate: 'clamp',
  });

  // Handle gesture
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx >= 0 && gestureState.dx <= wp(65)) {
          pan.setValue({ x: gestureState.dx, y: 0 });
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > wp(50)) {
          // Completed → animate to end
          Animated.timing(pan, {
            toValue: { x: wp(65), y: 0 },
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            if (onSlideComplete) onSlideComplete(); // fire like onPress
            // Reset back so user can slide again
            Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              useNativeDriver: false,
            }).start();
          });
        } else {
          // Not completed → reset back
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      {/* Label */}
      <Animated.Text style={[MainStyling.textSemiBold, styles.label, { color: labelColor }]}>
        Continue
      </Animated.Text>

      {/* Arrow icon (right side) */}
      <Image source={TrippleArrow} style={styles.arrow} />

      {/* Sliding Knob */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.slider, { transform: [{ translateX: pan.x }] }]}
      >
        <Image source={Tick} style={styles.icon} />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: wp(12),
    width: '100%',
    borderRadius: wp(13),
    borderWidth: 1,
    borderColor: acolors.red,
    justifyContent: 'center',
    overflow: 'hidden',
   
  },
  label: {
    position: 'absolute',
    alignSelf: 'center',
    fontSize: wp(4),
  },
  arrow: {
    position: 'absolute',
    right: wp(3),
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    tintColor: acolors.red,
  },
  slider: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(13),
    backgroundColor: acolors.red,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
  },
  icon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    tintColor: '#fff',
  },
});
