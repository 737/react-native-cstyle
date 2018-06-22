

import { Dimensions, StyleSheet } from 'react-native';

const px1 = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');

export function fitPX(value) {
    const screenWidth = Dimensions.get('window').width;
    const scaleValue =  Math.floor(value * (screenWidth / 375) + 0.5);

    return  (value > 0 && scaleValue === 0)  ? px1 : scaleValue;
}

export const screenWidth = width;
export const screenHeight = height;
