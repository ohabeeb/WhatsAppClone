import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'

export default function ContactList({ imgeUrl, name, status, onPress }) {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={{
                flexDirection: 'row',
                gap: 10,
                padding: 10,
                height: Dimensions.get('window').height / 10,
                borderBottomWidth: 1,
                borderColor: '#F5F5F4',
            }}>
            <View style={{ height: '100%', width: '15%' }}>
                <Image source={imgeUrl} style={{ width: 50, height: 50, borderRadius: 25 }} />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>{name}</Text>
                </View>
                <Text numberOfLines={1}>{status}</Text>
            </View>
        </TouchableOpacity>
    )
}