import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

// console.log(width)
console.log(winWidth)

export default StyleSheet.create({
    preview: {
        height: winWidth/1.8,
        width: winHeight,
        position: 'absolute',
    },
});