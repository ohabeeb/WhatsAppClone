import { View, Text, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'
import { ChatListItem } from '../../components'
import { Chat, ChatRooms } from '../../constants/data'
import { COLORS } from '../../constants/themes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Chats({navigation}) {
  return (
    <View style={{flex: 1}}>
      <FlatList 
      data={ChatRooms}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => (
      <ChatListItem 
      onPress={() => navigation.navigate('ChatScreen', {item})} 
      imgeUrl={item?.users[0]?.imageUri} 
      name={item?.users[0]?.name} 
      createdAt={item?.lastMessage?.createdAt} 
      message={item?.lastMessage.content} />
      )} />
      <TouchableOpacity 
      style={{ 
        position: 'absolute', 
        bottom: 50, right: 20, 
        borderRadius: 20, 
        zIndex: 1, 
        backgroundColor: COLORS.primary, 
        width: 60, height: 60, justifyContent: 'center', alignItems: 'center'}}>
        <MaterialCommunityIcons name="message" size={24} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  )
}