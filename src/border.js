import { PixelRatio } from 'react-native';

const borderWidth = 1;

export default {

    top: {
        borderTopWidth: borderWidth / PixelRatio.get(),
        borderTopColor: '#ddd',
        borderStyle: 'solid',
    },

    right: {
        borderRightWidth: borderWidth / PixelRatio.get(),
        borderRightColor: '#ddd',
        borderStyle: 'solid'
    },

    bottom: {
        borderBottomWidth: borderWidth / PixelRatio.get(),
        borderBottomColor: '#ddd',
        borderStyle: 'solid'
    },

    left: {
        borderLeftWidth: borderWidth / PixelRatio.get(),
        borderLeftColor: '#ddd',
        borderStyle: 'solid'
    }
}