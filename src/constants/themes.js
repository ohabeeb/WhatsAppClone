import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window').height;
const {width} = Dimensions.get('window').width;

const COLORS = {
    primary: '#376f6f',
    secondary: '#376f6f',
    tetiary: '#DCF8C4',
    white: '#FFF',
    black: '#000',
    gray: 'gray',
    lightblue: '#0080ff',
    red: '#ff0000'
}

const DIMENSIONS = {
    width: width,
    height: height,
    padding_small: 10,
    padding_medium: 15,
    padding_large: 20,
    padding_larger: 25,

    marging_small: 10,
    marging_medium: 15,
    marging_large: 20,
    marging_larger: 25,
}
const FONTS = {
    SIZES: {
        small: 16,
        medium: 18,
        large: 20,
        extralarge: 24,
    },
    STYLE: {
        roboto: ''
    },
}


export { COLORS, FONTS, DIMENSIONS }