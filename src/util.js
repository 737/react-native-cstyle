

import { Dimensions, StyleSheet } from 'react-native';

const px1 = StyleSheet.hairlineWidth;

export function fitPX(value) {
    const screenWidth = Dimensions.get('window').width;
    const scaleValue =  Math.floor(value * (screenWidth / 375) + 0.5);

    return  (value > 0 && scaleValue === 0)  ? px1 : scaleValue;
}
