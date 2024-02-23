import { View, Text, Pressable, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, DIMENSIONS, FONTS } from '../constants/themes'
import moment from 'moment'

export default function ItemIcon({ imageUri, isImageAllowed = true, imageComponent, name, timestamp, iconComponent, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.container}>
            <View style={styles.imageContainer}>
                {isImageAllowed ? <Image source={imageUri} style={styles.image} /> : { imageComponent }}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textName}>{name}</Text>
                <Text style={styles.textTimestamp}>{moment().startOf(timestamp).fromNow()}</Text>
            </View>
            <View style={styles.iconContainer}>
                {iconComponent}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 10,
        padding: 10,
        gap: 10,
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 5,
    },
    textName: {
        fontSize: FONTS.SIZES.medium,
        color: COLORS.black,
        fontWeight: '500',
    },
    textTimestamp: {
        fontSize: FONTS.SIZES.small,
    },
    iconContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})