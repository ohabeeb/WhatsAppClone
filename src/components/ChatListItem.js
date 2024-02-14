import { View, Text, Dimensions, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import moment from 'moment'


export default function ChatListItem({ imgeUrl, createdAt, name, message, onPress }) {
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
                    <Text>{moment().startOf(createdAt).fromNow()}</Text>
                </View>
                <Text numberOfLines={1}>{message}</Text>
            </View>
        </TouchableOpacity>
    )
}