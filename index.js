"use strict";

import { StyleSheet, Dimensions, Platform } from 'react-native';
import cstyle from './src/cstyle';
import border from './src/border';
import * as cutil from './src/util';

const viewPort = Dimensions.get('window');
const toString = Object.prototype.toString;

function ParseRule(value) {
    let needEval = false;
    if (toString.call(value) === '[object String]') {
        value = value.replace(/([0-9]+(?:.[0-9]+)?)%|(\$width)|(\$height)/g, function (cur, num, win, hei) {
            let ret;
            if (num != undefined) {
                ret = num / 100;
                if (cur === value.trim()) {
                    ret = ret * viewPort.width;
                }
            } else if (win) {
                ret = viewPort.width;
            } else if (hei) {
                ret = viewPort.height;
            }
            if (ret && !needEval) needEval = true;
            return ret;
        });
        return needEval ? new Function('return ' + value)() : value;
    }
    return value;
}

/**
 * @style {object}
 * @parsePrecent {boolean}?
 * @onExtend {boolean}?
 */
export default function (style, parsePrecent, onExtend) {
    if (!parsePrecent && style) {
        for (const key in style) {
            if (style.hasOwnProperty(key)) {
                for (const c_key in style[key]) {
                    if (style[key].hasOwnProperty(c_key)) {
                        style[key][c_key] = ParseRule(style[key][c_key]);
                    }
                }
            }
        }
    }
    const extendStyle = Object.assign({}, cstyle, border, style);
    return onExtend ? extendStyle : StyleSheet.create(extendStyle);
}

export {
    cstyle,
    border,
    cutil
}




