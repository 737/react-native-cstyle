import { PixelRatio, StyleSheet } from 'react-native';

const px1 = StyleSheet.hairlineWidth;
const pxr1 = 1 / PixelRatio.get();

export default {

    top: {
        borderTopWidth: px1,
        borderTopColor: '#ddd',
        borderStyle: 'solid',
    },

    right: {
        borderRightWidth: px1,
        borderRightColor: '#ddd',
        borderStyle: 'solid'
    },

    bottom: {
        borderBottomWidth: px1,
        borderBottomColor: '#ddd',
        borderStyle: 'solid'
    },

    left: {
        borderLeftWidth: px1,
        borderLeftColor: '#ddd',
        borderStyle: 'solid'
    }
}